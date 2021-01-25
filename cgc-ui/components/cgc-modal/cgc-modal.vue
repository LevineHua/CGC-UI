<template>
	<view>
		<cgc-popup ref="showpopup" type="center">
			<view class="model-body cgc-w-630 cgc-border-radius-middle cgc-p-30 cgc-rela" :style="[{'background-image': `url(${modalBg})`}]" :class="type">
				<image src="/static/cgc-ui/close-modal-icon.png" v-if="showClose" class="close-modal-icon cgc-w-h-36 cgc-abso" @click="cancel()"></image>
				<view class="model-tip-logo cgc-abso" v-if="type!='input'">
					<image :src="icon" mode="aspectFill" :class="iconClass"></image>
				</view>
				<view class="cgc-font-weight-bold cgc-black"
					:class="type!='input'?'cgc-title-xxl cgc-text-center':'cgc-title-xl cgc-text-left'"
				>
					<template v-if="title">
						{{title}}
					</template>
					<template v-else>
						<slot name="title"></slot>
					</template>
				</view>
				<view v-if="type=='input'" class="cgc-flex cgc-col-center cgc-default-bg cgc-h-80 cgc-border-radius-large cgc-m-t-26">
					<input v-model="value" :placeholder="placeholder" placeholder-class="cgc-black-dark" class="cgc-title-lg cgc-text-center cgc-p-l-30 cgc-p-r-30 cgc-flex-1" />
				</view>
				<view class="cgc-title-sm cgc-black-dark cgc-m-t-20 cgc-text-center">
					<template v-if="subtitle">
						{{subtitle}}
					</template>
					<template v-else>
						<slot name="subtitle"></slot>
					</template>
				</view>
				<view class="model-btns cgc-row-between cgc-m-t-50" :class="[{isSingle: !cancelBtn || !confirmBtn}, {'cgc-flex': !isLongBtn}]">
					<cgc-button :type="cancelBtnTheme" :size="btnSize" @click="cancel" v-if="cancelBtn">{{cancelBtn}}</cgc-button>
					<cgc-button :type="confirmBtnTheme" :size="btnSize" @click="confirm" v-if="confirmBtn">{{confirmBtn}}</cgc-button>
				</view>
			</view>
		</cgc-popup>
	</view>
</template>

<script>
	export default {
		props:{
			/**
			 * 弹框类型
			 *  - alert系统对话框：168*168
			 *  - self自定义对话框：200*200
			 *  - big大图提示框：320*320
			 * 	- input输入提示框
			 */
			type: {
				default: () => {
					return 'alert'
				}
			},
			/**
			 * 图标路径
			 */
			icon: {
				default: () => {
					return ''
				}
			},
			/**
			 * 图标样式
			 */
			iconClass: {
				default: () => {
					return 'cgc-border-radius-circular'
				}
			},
			/**
			 * 大标题
			 */
			title: {
				default: () => {
					return ''
				}
			},
			/**
			 * 副标题
			 */
			subtitle: {
				default: () => {
					return ''
				}
			},
			/**
			 * 取消按钮文案
			 */
			cancelBtn: {
				default: () => {
					return '取消'
				}
			},
			/**
			 * 确认按钮文案
			 */
			confirmBtn: {
				default: () => {
					return '确定'
				}
			},
			/**
			 * 按钮类型
			 *  - 主按钮-强：main
			 *  - 次按钮-中：primary
			 * 	- 判断按钮：judge
			 *  - 文字按钮-弱：text
			 *  - 图标按钮：icon
			 */
			confirmBtnTheme: {
				default: () => {
					return 'judge'
				}
			},
			/**
			 * 取消按钮主题
			 */
			cancelBtnTheme: {
				default: () => {
					return 'primary'
				}
			},
			/**
			 * 按钮尺寸
			 *  - 标签：tag
			 *  - 超小型：superSmall
			 * 	- 小型： mini
			 *  - 辅助：auxiliary
			 *  - 中型：medium
			 *  - 标准：default
			 *  - 大型：big
			 */
			btnSize: {
				default: () => {
					return 'default'
				}
			},
			/**
			 * 是否是长按钮
			 */
			isLongBtn: {
				default: () => {
					return false
				}
			},
			/**
			 * 模态框背景
			 */
			modalBg: {
				default: () => {
					return ''
				}
			},
			/**
			 * 是否在右上角显示关闭按钮
			 */
			showClose: {
				default: () => {
					return false
				}
			},
			/**
			 * 占位文本（输入对话框才有效）
			 */
			placeholder: {
				default: () => {
					return '暗提示'
				}
			},
			/**
			 * 输入框内容（输入对话框才有效）
			 */
			inputValue: {
				default: () => {
					return ''
				}
			}
		},
		data() {
			return {
				value: this.inputValue
			};
		},
		methods:{
			open() {
				this.$nextTick(() => {
					this.$refs['showpopup'].open()
				})
			},
			cancel() {
				this.$refs['showpopup'].close()
				this.$emit('cancel')
			},
			confirm() {
				this.$refs['showpopup'].close()
				if(this.type=='input') {
					this.$emit('confirm')
				} else {
					this.$emit('confirm', this.value)
				}
			}
		}
	}
</script>

<style lang="scss">
	.uni-popup{
		z-index: 99999;
	}
	.model-body{
		background: #FEFEFE;
		padding-top: 120rpx;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		.close-modal-icon{
			top: 18rpx;
			right: 18rpx;
			z-index: 2;
		}
		.model-tip-logo{
			width: 168rpx;
			height: 168rpx;
			left: 50%;
			top: -70rpx;
			transform: translateX(-50%);
			image{
				width: 100%;
				height: 100%;
			}
		}
		.model-btns.isSingle{
			justify-content: center;
		}
	}
	.model-body.self{
		padding-top: 125rpx;
		.model-tip-logo{
			width: 200rpx;
			height: 200rpx;
			top: -95rpx;
		}
	}
	.model-body.big{
		padding-top: 30rpx;
		.model-tip-logo{
			width: 320rpx;
			height: 320rpx;
			position: static;
			transform: unset;
			margin: 0 auto 30rpx;
		}
	}
	.model-body.input{
		padding-top: 30rpx;
	}
</style>
