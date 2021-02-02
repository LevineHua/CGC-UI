<template>
	<view class="cgc-progress cgc-h-16">
		<view class="cgc-progress__active" 
			:style="[progressStyle]"
		></view>
	</view>
</template>

<script>
	export default{
		props:{
			percent: {
				type: Number,
				default() {
					return 0
				}
			}
		},
		computed: {
			progressStyle() {
				let style = {};
				style.width = this.percent + '%';
				return style;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.cgc-progress{
		overflow: hidden;
		display: inline-flex;
		align-items: center;
		width: 100%;
		background: #ececec;
		&__active{
			width: 0;
			height: 100%;
			align-items: center;
			display: flex;
			justify-items: flex-end;
			justify-content: space-around;
			font-size: 20rpx;
			color: #ffffff;
			transition: all 0.4s ease;
			background: #19be6b;
		}
	}
</style>
