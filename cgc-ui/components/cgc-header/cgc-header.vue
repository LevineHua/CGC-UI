<template>
	<view>
		<view class="cu-custom"  @click="clickContent" :class="{customFixed:isFixed}" :style="headerHeight">
			<view class="cu-bar fixed" :style="barHeight">
				<template v-if="showNav">
					<!-- #ifndef MP-WEIXIN -->
					<view class="action" v-if="back" @tap.stop="BackPage">
						<image src="/static/cgc-ui/white-back-icon.png" v-if="fontColor=='white'" class="back-icon"></image>
						<image src="/static/cgc-ui/back-icon.png" v-else class="back-icon"></image>
						<slot name="backText"></slot>
					</view>
					<!-- #endif -->
					<!-- #ifdef MP-WEIXIN -->
					<view class="menu-button" :style="menuButtonStyle" v-if="back">
						<view class="menu-button-item" v-if="currentPage>1" @tap.stop="BackPage">
							<image src="/static/cgc-ui/mp-back-icon.png" class="cgc-w-h-36"></image>
						</view>
						<view class="menu-button-hr" v-if="currentPage>1"></view>
						<view class="menu-button-item" :style="[
							{width: currentPage>1?'':'100%'}
						]" @tap.stop="tohome">
							<image src="/static/cgc-ui/mp-home-icon.png" class="cgc-w-h-36"></image>
						</view>
					</view>
					<!-- #endif -->
					<view v-else>
						<slot name="left"></slot>
					</view>
					<view class="content" :style="[{top:StatusBar + 'px'},{color:fontColor},{width:contentWidth},{'margin-left':contentLeft}]">
						<slot name="content"></slot>
					</view>
					<slot name="right"></slot>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.$cgc.StatusBar,
				CustomBar: this.$cgc.CustomBar
			};
		},
		name: 'cgc-header',
		computed: {
			style() {
				var StatusBar= this.$cgc.StatusBar;
				var CustomBar= this.$cgc.CustomBar;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				return style
			},
			headerHeight() {
				// [{height:(showNav?CustomBar:StatusBar) + 'px'}]
				var StatusBar= this.$cgc.StatusBar;
				var CustomBar= this.$cgc.CustomBar;
				if(this.showNav) {
					return `height:calc(${CustomBar}px + ${this.extraHeight}px);`;
				} else {
					return `height:${StatusBar}px;`;
				}
			},
			barHeight() {
				// [{height:(showNav?CustomBar:StatusBar) + 'px'},{'padding-top':StatusBar + 'px'},{'background':bgColor}]
				var StatusBar= this.$cgc.StatusBar;
				var CustomBar= this.$cgc.CustomBar;
				if(this.showNav) {
					return `height:calc(${CustomBar}px + ${this.extraHeight}px);padding-top: ${StatusBar}px;background:${this.bgColor};`;
				} else {
					return `height:${StatusBar}px;padding-top: ${StatusBar}px;background:${this.bgColor};`;
				}
			},
			currentPage() {
				return getCurrentPages().length
			},
			menuButtonStyle() {
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				let currentPage = getCurrentPages().length
				return `
					height: ${menuButtonInfo.height}px;
					width: ${currentPage > 1 ? menuButtonInfo.width : menuButtonInfo.height}px;
					top: ${menuButtonInfo.top}px;
					left: ${menuButtonInfo.left}px;
				`
			}
		},
		props: {
			back: {
				default: true,
				type: Boolean
			},
			isFixed: {
				default: true,
				type: Boolean
			},
			bgColor: {
				type: String,
				default: ''
			},
			fontColor: {
				type: String,
				default: '#000'
			},
			showNav:{
				default:true
			},
			contentWidth:{
				default:''
			},
			contentLeft:{
				default:'auto'
			},
			/**
			 * 是否允许返回页面
			 */
			isCanBack: {
				default:true
			},
			/**
			 * 额外的高度
			 */
			extraHeight: {
				default: () => {
					return 0
				}
			}
		},
		methods: {
			BackPage() {
				if(this.isCanBack) {
					uni.navigateBack({
						delta: 1
					});
				} else {
					this.$emit("cantBack")
				}
				
			},
			tohome() {
				// this.$Router.replaceAll({
				// 	name: 'index'
				// })
				uni.switchTab({
					url:'/pages/example/components'
				})
			},
			clickContent() {
				this.$emit("clickContent")
			}
		}
	}
</script>

<style scoped lang="scss">
	view{
		box-sizing: border-box;
	}
	.back-icon1{
		width: 32rpx;
		height: 32rpx;
	}
	.cu-custom {
		display: block;
		position: relative;
		width: 750rpx;
	}
	.cu-custom.customFixed{
		display: block;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 100;
	}
	
	.cu-custom .cu-bar .content {
		width: calc(100% - 400upx);
		color: #fff;
	}
	
	/* #ifdef MP-ALIPAY */
	.cu-custom .cu-bar .action .cuIcon-back {
		opacity: 0;
	}
	
	/* #endif */
	
	.cu-custom .cu-bar .content image {
		height: 60upx;
		width: 240upx;
	}
	
	.cu-custom .cu-bar {
		min-height: 0px;
		padding: 0 20rpx;
		/* #ifdef MP-WEIXIN */
		padding-right: 220upx;
		/* #endif */
		/* #ifdef MP-ALIPAY */
		padding-right: 150upx;
		/* #endif */
		box-shadow: 0upx 0upx 0upx;
		z-index: 100;
	}
	
	.cu-custom .cu-bar .border-custom {
		position: relative;
		background: rgba(0, 0, 0, 0.15);
		border-radius: 1000upx;
		height: 30px;
	}
	
	.cu-custom .cu-bar .border-custom::after {
		content: " ";
		width: 200%;
		height: 200%;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: inherit;
		transform: scale(0.5);
		transform-origin: 0 0;
		pointer-events: none;
		box-sizing: border-box;
		border: 1upx solid #ffffff;
		opacity: 0.5;
	}
	
	.cu-custom .cu-bar .border-custom::before {
		content: " ";
		width: 1upx;
		height: 110%;
		position: absolute;
		top: 22.5%;
		left: 0;
		right: 0;
		margin: auto;
		transform: scale(0.5);
		transform-origin: 0 0;
		pointer-events: none;
		box-sizing: border-box;
		opacity: 0.6;
		background-color: #ffffff;
	}
	
	.cu-custom .cu-bar .border-custom text {
		display: block;
		flex: 1;
		margin: auto !important;
		text-align: center;
		font-size: 34upx;
	}
	
	.cu-bar {
		display: flex;
		position: relative;
		align-items: center;
		min-height: 100upx;
		justify-content: space-between;
	}
	
	.cu-bar .action {
		display: flex;
		align-items: center;
		height: 100%;
		justify-content: center;
		max-width: 100%;
	}
	.back-icon{
		width: 64rpx;
		height: 64rpx;
	}
	.cu-bar .action:first-child {
		/* margin-left: 30upx; */
		font-size: 30upx;
	}
	
	.cu-bar .content {
		position: absolute;
		text-align: center;
		width: calc(100% - 340upx);
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		margin: auto;
		height: 60upx;
		font-size: 36upx;
		line-height: 60upx;
		cursor: none;
		/* pointer-events: none; */
		text-overflow: ellipsis;
		white-space: nowrap;
		/* overflow: hidden; */
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.cu-bar.fixed{
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 100;
		/* box-shadow: 0 1upx 6upx rgba(0, 0, 0, 0.1); */
	}
	
	.menu-button{
		background:#fff;
		border-radius: 30rpx;
		border: 0.5px solid #F4F4F4;
		display: flex;
		align-items: center;
		padding: 0 calc((5 / 144) * 50%);
		.menu-button-item{
			width: calc((100% - 0.5px) / 2);
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.menu-button-hr{
			width: 0.5px;
			height: 50%;
			background: #EBECF2;
		}
	}
</style>
