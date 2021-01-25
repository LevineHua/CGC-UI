<template>
	<view 
		class="cgc-badge cgc-red-bg cgc-flex cgc-abso cgc-row-center" 
		:class="{'cgc-dot': !badgeValue}"
		:style="[
			{top: top+'rpx'},
			{right: right+'rpx'},
		]"
	>
		{{badgeValue}}
	</view>
</template>

<script>
	export default{
		props:{
			/**
			 * 徽标值
			 */
			value: {
				default: () => {
					return ''
				}
			},
			/**
			 * 距顶部距离
			 */
			top: {
				default: () => {
					return 0
				}
			},
			/**
			 * 距右边距离
			 */
			right: {
				default: () => {
					return 0
				}
			}
		},
		computed:{
			badgeValue() {
				if(this.value) {
					if(this.value>99) {
						return '99+'
					} else {
						return this.value
					}
				} else {
					return this.value
				}
			}
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cgc-badge{
		border: 2rpx solid #FFFFFF;
		border-radius: 20rpx;
		min-width: 40rpx;
		height: 40rpx;
		font-size: 22rpx;
		font-weight: 400;
		color: #FFFFFF;
		padding: 0 8rpx;
		z-index: 1;
	}
	.cgc-dot{
		width: 20rpx;
		height: 20rpx;
		min-width: auto;
		padding: 0;
	}
</style>
