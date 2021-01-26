<template>
	<view class="cgc-flex" @click="switchEvent">
		<view 
			v-if="showValue"
			class="cgc-m-r-20 cgc-font-md"
			:class="[value?'cgc-black':'cgc-black-dark']"
		>
			{{value ? openText: closeText}}
		</view>
		<view 
			class="cgc-switch" 
			:class="{active: value}"
			:style="[{
				background: value?activeColor:inactiveColor
			}]"
		>
			<view class="switch-btn"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			value: {
				type: Boolean,
				default() {
					return false
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
			 * 是否显示开关值
			 */
			showValue: {
				type: Boolean,
				default() {
					return true
				}
			},
			/**
			 * 开启文案
			 */
			openText: {
				type: String,
				default() {
					return '开启'
				}
			},
			/**
			 * 关闭文案
			 */
			closeText: {
				type: String,
				default() {
					return '关闭'
				}
			},
			/**
			 * 打开时的背景颜色
			 */
			activeColor: {
				type: String,
				default() {
					return 'linear-gradient(89deg, #FFE8A3, #FFC752)'
				}
			},
			/**
			 * 关闭时的背景颜色
			 */
			inactiveColor: {
				type: String,
				default() {
					return '#E9E9E9'
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			switchEvent() {
				if(!this.disabled) {
					this.$emit('input', !this.value)
				}
			}
		}
	}
</script>

<style lang="scss">
	.cgc-switch{
		width: 72rpx;
		height: 36rpx;
		background: #E9E9E9;
		border-radius: 18rpx;
		position: relative;
		padding: 0 6rpx;
		.switch-btn{
			width: 26rpx;
			height: 26rpx;
			background: #FFFFFF;
			border-radius: 13rpx;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			transition: all 0.3s;
			margin-left: 0;
		}
	}
	.cgc-switch.active{
		background: linear-gradient(89deg, #FFE8A3, #FFC752);
		.switch-btn{
			margin-left: calc(72rpx - 12rpx - 26rpx);
		}
	}
</style>
