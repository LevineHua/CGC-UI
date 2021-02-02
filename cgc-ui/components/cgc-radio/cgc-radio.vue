<template>
	<view>
		<template v-if="type=='button'">
			<cgc-button size="mini" @click="change" :type="isChecked?buttonActiveStyle:buttonInactiveStyle" :style="buttonStyle">{{label}}</cgc-button>
		</template>
		<template v-else>
			<view class="cgc-flex" @click="change">
				<image :src="isChecked?activeIcon:inactiveIcon" class="cgc-w-h-36"></image>
				<slot></slot>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		name:'cgcRadio',
		componentName: 'cgcRadio',
		props:{
			value: {
				type: [String, Number, Boolean]
			},
			label: {
				type: [String, Number, Boolean]
			},
			/**
			 * 选中时的图标
			 */
			activeIcon: {
				type: String,
				default: '/static/cgc-ui/radio-ed.png'
			},
			/**
			 * 未选中时的图标
			 */
			inactiveIcon: {
				type: String,
				default: '/static/cgc-ui/radio.png'
			},
			/**
			 * 是否禁用
			 */
			disabled: {
				type: Boolean,
				default: false
			},
			/**
			 * 单选框类型
			 *  - button：按钮形
			 *  - default: 常规型
			 */
			type: {
				type: String,
				default: 'default'
			},
			/**
			 * 按钮型选中样式
			 */
			buttonActiveStyle: {
				type: String,
				default: 'judge'
			},
			/**
			 * 按钮型未选中样式
			 */
			buttonInactiveStyle: {
				type: String,
				default: 'primary'
			},
			/**
			 * 按钮样式
			 */
			buttonStyle: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				parent: '',
				groupValue: '',	// groupValue为父组件传递的值
			}
		},
		created() {
			// 递归查询cgc-radio组件的父组件cgc-radio-group，有可能不存在
			this.parent = this.$cgc.$parent.call(this, 'cgcRadioGroup');
			// 监听cgc-radio-group的值是否改变，如果改变，则修改cgc-radio状态
			this.$on("valueChange", (value) => {
				this.groupValue = value
			})
		},
		computed:{
			isChecked() {
				// 如果存在cgc-radio-group父组件，则判断父组件的value是否与子组件的label匹配
				if(this.groupValue) {
					if(this.groupValue == this.label) {
						return true
					} else {
						return false
					}
				} else {	// 反之直接判断子组件的value和label是否匹配
					if(this.value == this.label) {
						return true
					} else {
						return false
					}
				}
			}
		},
		methods:{
			change() {
				if(!this.disabled) {
					this.$emit('input', this.label)
					if(this.parent) {
						this.dispatch('cgcRadioGroup', 'handleChange', this.label)
					}
				}
			}
		}
	}
</script>

<style>
</style>
