<template>
	<view class="cgc-image" :class="className" @tap="onClick" :style="[wrapStyle, backgroundStyle]">
		<image 
			class="cgc-image__image"
			:src="src"
			:mode="mode"
			:lazy-load="lazyLoad"
			:webp="webp"
			:show-menu-by-longpress="showMenuByLongpress"
			@error="onErrorHandler"
			@load="onLoadHandler"
		></image>
		<image :src="loadingImage" v-if="loading" class="cgc-image__loading"></image>
		<image :src="errorImage" v-if="isError" class="cgc-image__error"></image>
	</view>
</template>

<script>
	export default {
		props:{
			/**
			 * 类名
			 * h5和app端支持直接使用class
			 * 小程序端需使用className
			 */
			className: {
				default: ''
			},
			/**
			 * 宽度
			 */
			width: {
				type: String,
				default: '100%'
			},
			/**
			 * 高度
			 */
			height: {
				type: String,
				default: 'auto'
			},
			/**
			 * 过渡时间，单位ms
			 */
			duration: {
				type: [String, Number],
				default: 500
			},
			/**
			 * 是否需要淡入效果
			 */
			fade: {
				default: () => {
					return true
				}
			},
			/**
			 * 加载中图片
			 */
			loadingImage: {
				default: () => {
					return '/static/cgc-ui/default-img.png'
				}
			},
			/**
			 * 加载失败图片
			 */
			errorImage: {
				default: () => {
					return '/static/cgc-ui/default-img.png'
				}
			},
			// 以下属性参考官网image组件属性
			src: {
				default: () => {
					return ''
				}
			},
			mode: {
				default: () => {
					return 'aspectFill'
				}
			},
			lazyLoad: {
				default: () => {
					return true
				}
			},
			webp: {
				default: () => {
					return false
				}
			},
			showMenuByLongpress: {
				default: () => {
					return false
				}
			}
		},
		data() {
			return {
				// 图片是否加载错误，如果是，则显示错误占位图
				isError: false,
				// 初始化组件时，默认为加载中状态
				loading: true,
				// 不透明度，为了实现淡入淡出的效果
				opacity: 1,
				// 过渡时间，因为props的值无法修改，故需要一个中间值
				durationTime: this.duration,
				// 图片加载完成时，去掉背景颜色，因为如果是png图片，就会显示灰色的背景
				backgroundStyle: {}
			}
		},
		computed: {
			wrapStyle() {
				let style = {};
				style.width = this.width;
				style.height = this.height;
				if (this.fade) {
					style.opacity = this.opacity;
					style.transition = `opacity ${Number(this.durationTime) / 1000}s ease-in-out`;
				}
				return style;
			}
		},
		methods:{
			// 点击图片
			onClick() {
				this.$emit('click');
			},
			// 图片加载失败
			onErrorHandler() {
				this.loading = false;
				this.isError = true;
				this.$emit('error');
			},
			// 图片加载完成，标记loading结束
			onLoadHandler() {
				this.loading = false;
				this.isError = false;
				this.$emit('load');
				// 如果不需要动画效果，就不执行下方代码，同时移除加载时的背景颜色
				// 否则无需fade效果时，png图片依然能看到下方的背景色
				if (!this.fade) return this.removeBgColor();
				// 原来opacity为1(不透明，是为了显示占位图)，改成0(透明，意味着该元素显示的是背景颜色，默认的灰色)，再改成1，是为了获得过渡效果
				this.opacity = 0;
				// 这里设置为0，是为了图片展示到背景全透明这个过程时间为0，延时之后延时之后重新设置为duration，是为了获得背景透明(灰色)
				// 到图片展示的过程中的淡入效果
				this.durationTime = 0;
				// 延时50ms，否则在浏览器H5，过渡效果无效
				setTimeout(() => {
					this.durationTime = this.duration;
					this.opacity = 1;
					setTimeout(() => {
						this.removeBgColor();
					}, this.durationTime);
				}, 50);
			},
			// 移除图片的背景色
			removeBgColor() {
				// 淡入动画过渡完成后，将背景设置为透明色，否则png图片会看到灰色的背景
				this.backgroundStyle = {
					backgroundColor: 'transparent'
				};
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cgc-image{
		position: relative;
		transition: opacity 0.5s ease-in-out;
		overflow: hidden;
		&__image{
			width: 100%;
			height: 100%;
		}
		&__loading,
		&__error {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>
