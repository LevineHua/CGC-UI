<template>
	<view class="cgc-stepper cgc-flex">
		<view 
			class="cgc-w-h-56 cgc-m-r-16 cgc-border-radius-circular cgc-white-bg" 
			@touchstart.stop="btnTouchStart('minus')"
			@touchend.stop="clearTimer"
		>
			<image v-if="reductionHoverClass" src="/static/cgc-ui/reduction-icon.png" class="cgc-w-cover cgc-h-cover"></image>
			<image v-else src="/static/cgc-ui/inreduction-icon.png" class="cgc-w-cover cgc-h-cover"></image>
		</view>
		<view class="cgc-w-88 cgc-h-56 cgc-default-bg cgc-flex cgc-stepper__input">
			<input 
				class="cgc-flex-1 cgc-text-center cgc-title-sm" 
				:class="[disabled?'cgc-black-dark':'cgc-black']"
				v-model="inputValue" 
				:disabled="disabled || disabledInput"
				@blur="onBlur"
				type="number" 
			/>
		</view>
		<view 
			class="cgc-w-h-56 cgc-m-l-16 cgc-border-radius-circular cgc-white-bg" 
			@touchstart.stop="btnTouchStart('plus')"
			@touchend.stop="clearTimer"
		>
			<image v-if="addcationHoverClass" src="/static/cgc-ui/addcation-icon.png" class="cgc-w-cover cgc-h-cover"></image>
			<image v-else src="/static/cgc-ui/inaddcation-icon.png" class="cgc-w-cover cgc-h-cover"></image>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			value: {
				type: Number,
				default() {
					return 1
				}
			},
			/**
			 * 最小值
			 */
			minimum: {
				type: Number,
				default() {
					return 1
				}
			},
			/**
			 * 最大值
			 */
			maximum: {
				type: Number,
				default() {
					return 100
				}
			},
			/**
			 * 每次加或减所改变的值
			 */
			step: {
				type: Number,
				default() {
					return 1
				}
			},
			/**
			 * 是否禁用
			 */
			disabled: {
				type: Boolean,
				default() {
					return false
				}
			},
			/**
			 * 是否禁止输入框输入
			 */
			disabledInput: {
				type: Boolean,
				default() {
					return false
				}
			},
			/**
			 * 是否开启长按连续递增或递减
			 */
			longPress: {
				type: Boolean,
				default() {
					return true
				}
			},
			/**
			 * 开启长按后，每触发一次需要多久
			 */
			pressTime: {
				type: Number,
				default() {
					return 250
				}
			},
			/**
			 * 是否只能输入大于或等于0的整数
			 */
			positiveInteger: {
				type: Boolean,
				default() {
					return true
				}
			}
		},
		data() {
			return {
				inputValue: 1,
				timer: null,	// 长按的定时器
				changeFromInner: false,	// 值发生变化，是来自内部还是外部
			}
		},
		created() {
			this.inputValue = Number(this.value)
		},
		computed:{
			reductionHoverClass() {
				if(this.inputValue <= this.minimum || this.disabled) {
					return ''
				} else {
					return 'hover'
				}
			},
			addcationHoverClass() {
				if(this.inputValue>=this.maximum || this.disabled) {
					return ''
				} else {
					return 'hover'
				}
			}
		},
		watch:{
			value(v1, v2) {
				// 只有value的改变是来自外部的时候，才去同步inputValue的值， 否则会造成循环错误
				if(!this.changeFromInner) {
					this.inputValue = v1
				}
				this.changeFromInner = false
			},
			inputValue(v1, v2) {
				// 为了让用户能够删除所有输入值，重新输入内容，删除所有值后，内容为空
				if(v1 == '') return
				let value = 0
				// 首先判断是否数值，并且在minimum和maximum直接，如果不是，使用原来值
				if(this.$cgc.test.number(v1) && v1 >= this.minimum && v1 <= this.maximum) {
					value = v1
				} else {
					value = v2
				}
				if(this.positiveInteger) {
					// 小于0，或带有小数点
					if(v1 < 0 || String(v1).indexOf('.') !== -1) {
						value = v2
						// 双向绑定input的值，必须要使用$nextTick修改显示的值
						this.$nextTick(() => {
							this.inputValue = v2
						})
					}
				}
				// 触发change事件
				this.handleChange(value, 'change')
			}
		},
		methods:{
			/**
			 * 点击按钮
			 * @param {Object} callback
			 */
			btnTouchStart(callback) {
				// 先执行一遍方法，否则会造成松开手时，就执行clearTimer,导致无法实现功能
				this[callback]();
				// 如果没开启长按功能，直接返回
				if(!this.longPress) return;
				// 再次清空定时器，防止重复注册
				clearInterval(this.timer);
				this.timer = null;
				this.timer = setInterval(() => {
					// 执行加减函数
					this[callback]();
				}, this.pressTime)
			},
			/**
			 * 清除长按定时器
			 */
			clearTimer() {
				this.$nextTick(() => {
					clearInterval(this.timer);
					this.timer = null;
				})
			},
			/**
			 * 减
			 */
			minus() {
				this.computeVal('minus')
			},
			/**
			 * 加
			 */
			plus() {
				this.computeVal('plus')
			},
			/**
			 * 计算
			 * @param {Object} type
			 */
			computeVal(type) {
				uni.hideKeyboard();
				if(this.disabled) return
				let value = 0;
				if(type === 'minus') {
					value = this.calcMinus(this.inputValue, this.step)
				} else if(type === 'plus') {
					value = this.calcPlus(this.inputValue, this.step)
				}
				// 判断是否小于最小值和大于最大值
				if(value < this.minimum || value > this.maximum) {
					return
				}
				this.inputValue = value
				this.handleChange(value, type)
			},
			/**
			 * 为保证小数相加减出现精度溢出的问题
			 * @param {Object} num1
			 * @param {Object} num2 
			 */
			calcMinus(num1, num2) {
				let baseNum, baseNum1, baseNum2;
				try {
					baseNum1 = num1.toString().split('.')[1].length;
				} catch (e) {
					baseNum1 = 0;
				}
				try {
					baseNum2 = num2.toString().split('.')[1].length;
				} catch (e) {
					baseNum2 = 0;
				}
				baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
				let precision = baseNum1 >= baseNum2 ? baseNum1 : baseNum2;
				return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
			},
			calcPlus(num1, num2) {
				let baseNum, baseNum1, baseNum2;
				try {
					baseNum1 = num1.toString().split('.')[1].length;
				} catch (e) {
					baseNum1 = 0;
				}
				try {
					baseNum2 = num2.toString().split('.')[1].length;
				} catch (e) {
					baseNum2 = 0;
				}
				baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
				let precision = baseNum1 >= baseNum2 ? baseNum1 : baseNum2; //精度
				return ((num1 * baseNum + num2 * baseNum) / baseNum).toFixed(precision);
			},
			handleChange(value, type) {
				if(this.disabled) return;
				// 发出input时间，修改v-model绑定的值，达到双向绑定的效果
				this.changeFromInner = true
				this.$emit("input", Number(value))
				this.$emit(type, Number(value))
			},
			/**
			 * 处理用户手动输入的情况
			 * @param {Object} event
			 */
			onBlur(event) {
				let val = 0;
				let value = event.detail.value;
				// 如果为非0-9数字组成或第一位数值为0，直接让其值等于minimum值
				// 这里不直接判断是否正整数，是因为用户传递的props min值可能为0
				if(!/(^\d+$)/.test(value) || value[0] == 0) {
					val = this.minimum
				}
				val = +value
				if(val > this.maximum) {
					val = this.maximum
				} else if(val < this.minimum) {
					val = this.minimum
				}
				this.$nextTick(() => {
					this.inputValue = val
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cgc-stepper{
		&__input{
			border-radius: 28rpx;
		}
		.hover{
			background: rgba(0,0,0,0.05);
		}
	}
</style>
