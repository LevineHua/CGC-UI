<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" :bgColor="headerBg" fontColor="black">
			<block slot="content">标题</block>
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
				defaultHeaderFont: '255,0,0',
				mixinsOpcity: 0,
				scrollFinally: false
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
			}
		}
	}
</script>

<style>
</style>
