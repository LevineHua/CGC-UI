<template>
	<view class="cgc-form-item cgc-p-l-30" :class="[(label || $slots.label || inputType!='textarea') ? '': 'cgc-p-r-30']">
		<view class="cgc-form-item__main cgc-flex cgc-col-top cgc-rela" :class="mainClass">
			<!-- prop和slot二选一，prop优先 -->
			<view 
				class="cgc-form-item__label cgc-flex cgc-font-md cgc-black cgc-m-t-8" 
				v-if="(label || $slots.label) && inputType!='textarea'" 
				:style="[{width: labelWidth}]"
			>
				<template v-if="label">
					{{label}}
				</template>
				<template v-else>
					<slot name="label"></slot>
				</template>
				<view class="cgc-m-l-10 cgc-flex cgc-w-h-28 cgc-rela" v-if="showErrorIcon">
					<image src="/static/cgc-ui/danger.png" @click="tip" class="cgc-w-h-24"></image>
					<template v-if="showTip">
						<view class="tip-popup cgc-max-w-425 cgc-abso cgc-font-md cgc-border-radius-middle">
							{{errorMessage}}
						</view>
						<view class="tip-popup-mask" @click="tip"></view>
					</template>
				</view>
			</view>
			<view class="cgc-form-item__body cgc-flex-1" :class="[((label || $slots.label) && inputType!='textarea') ? 'cgc-p-l-30': '']">
				<!-- <view class="cgc-flex cgc-row-right"> -->
				<slot></slot>
				<!-- </view> -->
				<transition name="fade">
					<view v-if="error" class="cgc-flex cgc-black-dark cgc-title-xs cgc-m-t-16">
						<image src="/static/cgc-ui/danger.png" class="cgc-w-h-24 cgc-m-r-6"></image>
						{{error}}
					</view>
					<view v-else-if="subTip" class="cgc-flex cgc-black-dark cgc-title-xs cgc-m-t-16">
						{{subTip}}
					</view>
				</transition>
			</view>
			<view class="cgc-form-item__right" :style="[{padding: rightStyle}]">
				<slot name="right"></slot>
			</view>
		</view>
		<view v-if="subTitle" class="cgc-form-item__sub cgc-rela cgc-black-dark cgc-title-xs cgc-p-t-25 cgc-p-b-25 cgc-double-line">
			{{subTitle}}
		</view>
	</view>
</template>

<script>
	import Schema from 'async-validator'
	export default {
		name: 'cgcFormItem',
		componentName: 'cgcFormItem',
		inject:['form'],
		provide() {
			return {
				formItem: this
			}
		},
		props:{
			prop: {
				type: String,
				default() {
					return ''
				}
			},
			/**
			 * 标签文本
			 */
			label: {
				type: String,
				default() {
					return ''
				}
			},
			/**
			 * 是否显示异常icon
			 */
			showErrorIcon: {
				type: Boolean,
				default() {
					return false
				}
			},
			/**
			 * 点击异常icon时显示的文本（需要显示异常icon才能生效）
			 */
			errorMessage: {
				type: String,
				default() {
					return '我是一条很长很长的文字说明我是一条很长很长的文字说明'
				}
			},
			/**
			 * 标签文本宽度
			 */
			labelWidth: {
				type: String,
				default() {
					return '170rpx'
				}
			},
			/**
			 * 多行辅助文字
			 */
			subTitle: {
				type: String,
				default() {
					return ''
				}
			},
			/**
			 * 单行辅助文字
			 */
			subTip: {
				type: String,
				default() {
					return ''
				}
			}
		},
		data() {
			return {
				// 是否显示提示
				showTip: false,
				// 错误信息
				error: '',
				inputType: ''
			}
		},
		computed:{
			rightStyle() {
				if(this.$slots.right) {
					return '0 30rpx 0 0'
				} else {
					return '0'
				}
			},
			mainClass() {
				// console.log(this.$slots.default)
				if(this.inputType==='textarea') {
					return 'cgc-p-t-30 cgc-p-b-30'
				} else {
					return 'cgc-p-t-40 cgc-p-b-40'
				}
			}
		},
		mounted() {
			if(this.prop) {
				this.dispatch('cgcForm', 'cgc.form.addField', [this]);
			}
		},
		created() {
			// 监听注册的cgc-input组件
			this.$on('cgc.form.blur', (value) => {
				this.validate()
			});
			this.$on('cgc.form.item.addField', (field) => {
				if(field) {
					this.inputType = field.inputType
				}
			})
		},
		methods:{
			/**
			 * 打开提示框
			 */
			tip() {
				this.showTip = !this.showTip
			},
			validate() {
				let form = this.form;
				// 校验的值
				let value = form.model[this.prop]
				// 校验规则（如果不需要校验则直接为true）
				if(!form.rules) {
					return true
				}
				let rules = form.rules[this.prop]
				let descriptor = {}
				descriptor[this.prop] = rules
				// 实例化async-validator
				const schema = new Schema(descriptor)
				let model = {}
				model[this.prop] = value
				return new Promise((resolve, reject) => {
					schema.validate(model, (errors, fields) => {
						// console.log(errors, fields)
						if(errors) {
							let error = errors[0].message
							if(form.errorTipType === 'message') {
								this.error = error
							}
							resolve(error)
						} else {
							this.error = ''
							resolve(true)
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cgc-form-item{
		min-height: 110rpx;
		&__main{
			&::after{
				content: '';
				position: absolute;
				left: 0;
				bottom: 0;
				width: calc(100% - 30rpx);
				height: 0.5px;
				background: #E9E9E9;
			}
		}
		&__label{
			
		}
		&__body{
			
		}
		&__right{
			
		}
		&__sub{
			&::after{
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				width: calc(100% - 30rpx);
				height: 0.5px;
				background: #E9E9E9;
			}
		}
	}
	
	.tip-popup{
		color: #FFFFFF;
		line-height: 1.5;
		background: rgba(0,0,0,0.5);
		bottom: -32rpx;
		left: -25rpx;
		z-index: 3;
		transform: translateY(100%);
		padding: 20rpx 30rpx;
		&::after{
			content: '';
			position: absolute;
			top: 0rpx;
			transform: translateY(-100%);
			left: 26rpx;
			width: 0;
			height: 0;
			border: 12rpx solid rgba(0,0,0,0.5);
			border-color: transparent transparent rgba(0,0,0,0.5) transparent;
		}
	}
	.tip-popup-mask{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 999;
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
</style>
