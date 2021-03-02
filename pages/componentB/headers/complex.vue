<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :back="false" :bgColor="headerColor" :isFixed="false" :contentLeft="contentLeft+'rpx'" :contentWidth="contentWidth+'rpx'">
			<block slot="left">
				<view class="header-left" :style="{paddingRight: selectedCity?'10rpx':'21rpx'}">
					<image src="/static/address-icon.png" v-if="selectedCity" class="address-icon"></image>
					<image src="/static/focus-icon.png" v-else class="address-icon focus-icon"></image>
					<view class="address-value">{{selectedCity}}</view>
					<image src="/static/down-icon.png" v-if="selectedCity" class="select-icon"></image>
				</view>
			</block>
			<view class="header-center" slot="content" :style="{background: scrollFinally?'rgba(244, 244, 246, 0.5)':'rgba(255, 255, 255, 0.5)'}">
				搜索门店名称
				<image src="/static/search-icon.png"></image>
			</view>
			<!-- #ifndef MP -->
			<block slot="right">
				<view class="header-right" :style="{borderColor: scrollFinally?'#E9E9E9':'transparent'}">
					<view class="message-num">2</view>
					<image src="/static/message-icon.png"></image>
				</view>
			</block>
			<!-- #endif -->
		</cgc-header>
		<view class="cgc-p-30">
			<cgc-item-body className="cgc-m-b-30" v-for="(item, index) in 20" :key="index">
				占位内容
			</cgc-item-body>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mixinsScrollTop: 0,
				defaultHeaderBg: '255,255,255',
				defaultHeaderBg2: '255,255,255',
				defaultHeaderFont: '255, 255, 255',
				mixinsOpcity: 0,
				scrollFinally: false,
				selectedCity: '深圳'
			}
		},
		onPageScroll(e) {
			this.mixinsScrollTop = e.scrollTop
			this.mixinsOpcity = this.mixinsScrollTop / 100
			if(this.mixinsOpcity >= 1) {
				this.scrollFinally = true
			} else {
				this.scrollFinally = false
			}
		},
		computed: {
			/**
			 * 导航栏高度
			 */
			headerHeight() {
				let CustomBar = this.CustomBar
				return CustomBar;
			},
			/**
			 * 改变顶部导航栏背景颜色
			 */
			headerBg() {
				// return `rgba(${this.defaultHeaderBg},${this.mixinsScrollTop / 100})`;
				return `linear-gradient(89deg, rgba(${this.defaultHeaderBg},${this.mixinsScrollTop / 100}), rgba(${this.defaultHeaderBg2},${this.mixinsScrollTop / 100}))`
			},
			/**
			 * 改变顶部导航栏背景颜色
			 * 起始透明
			 */
			headerColor() {
				return `rgba(${this.defaultHeaderFont},${0 + (this.mixinsScrollTop / 100)})`;
			},
			fontColor() {
				let color = 255 / 100
				let endColor = 255 - (this.mixinsScrollTop * color)
				return `rgb(${endColor},${endColor},${endColor})`;
			},
			contentWidth() {
				let city = this.selectedCity
				let strCity = ''
				// #ifndef MP
				if(!city){
					strCity = '定位中'
					return 540 - 47 - 18 - 40 - 3 + 57 - 26
				}
				if(strCity.length<=2) {
					return 570 - 47 - 18 - 40
				} else if(strCity.length<=3) {
					return 540 - 47 - 18 - 40 - 3
				} else {
					return 520 - 47 - 80 + 4
				}
				// #endif
				// #ifdef MP
				return ''
				// #endif
			},
			contentLeft() {
				let city = this.selectedCity
				let strCity = ''
				if(!city){
					strCity = '定位中'
					return 180 + 47 - 18 + 3 - 57 + 26
				}
				
				if(strCity.length<=2) {
					return 150 + 47 - 18
				} else if(strCity.length<=3) {
					return 180 + 47 - 18 + 3
				} else {
					return 200 + 47
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header-left{
		// width:180rpx;
		width: auto;
		height:72rpx;
		padding-right: 10rpx;
		// background:rgba(255,255,255,1);
		// border:1px solid rgba(233,233,233,1);
		border-radius:36rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		.address-icon{
			width: 38rpx;
			height: 38rpx;
			margin-right: 9rpx;
		}
		.focus-icon{
			animation: ease-in-out breath 800ms infinite alternate;
		}
		.address-value{
			font-size:32rpx;
			/* font-weight:bold; */
			color:#432F1E;
			overflow: hidden;
			text-overflow: ellipsis;
			// font-family: PingFang SC;
			white-space: nowrap;
			max-width: 4em;
		}
		.select-icon{
			width: 36rpx;
			height: 36rpx;
			margin-left: 4rpx;
		}
	}
	@keyframes breath {
		0% {
			opacity: .2;
		}
		100% {
			opacity: 1;
		}
	}
	.header-center{
		width:100%;
		height:64rpx;
		background:rgba(255, 255, 255, 0.5);
		border-radius:32rpx;
		font-size:26rpx;
		/* font-weight:bold; */
		color:rgba(32, 33, 35, 0.5);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
		// font-family: PingFang SC;
		padding-right: 10rpx;
		transition: all 0.3s;
		image{
			width: 56rpx;
			height: 56rpx;
		}
	}
	.header-right{
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		border: 1px solid transparent;
		border-radius: 32rpx;
		transition: all 0.3s;
		.message-num{
			min-width: 32rpx;
			height: 32rpx;
			background: #FF5B4C;
			border: 2rpx solid #FFFFFF;
			border-radius: 16rpx;
			padding: 0 8rpx;
			font-size: 20rpx;
			// font-family: PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
			position: absolute;
			top: 0;
			right: -2rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 1;
		}
		image{
			width: 64rpx;
			height: 64rpx;
		}
	}
</style>
