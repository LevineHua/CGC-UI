<template>
	<view>
		<cgc-popup ref="showpopup" type="center">
			<view class="cgc-w-630 cgc-p-l-30 cgc-p-r-30 cgc-white-bg cgc-border-radius-middle">
				<view @click="select(['album'])" class="cgc-flex cgc-black cgc-title-xl cgc-p-t-30 cgc-p-b-30" style="border-bottom: 0.5px solid #E9E9E9;">
					<image src="/static/cgc-ui/album-icon.png" class="cgc-w-h-56 cgc-m-r-20"></image>
					从相册选择
				</view>
				<view @click="select(['camera'])" class="cgc-flex cgc-black cgc-title-xl cgc-p-t-30 cgc-p-b-30">
					<image src="/static/cgc-ui/camera-icon.png" class="cgc-w-h-56 cgc-m-r-20"></image>
					拍照
				</view>
			</view>
		</cgc-popup>
	</view>
</template>

<script>
	export default {
		methods:{
			open() {
				this.$nextTick(() => {
					this.$refs['showpopup'].open()
				})
			},
			/**
			 * 选择上传图片类型
			 * @param {Object} type
			 */
			select(type) {
				this.$emit("selectFile", type)
				this.$refs['showpopup'].close()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-popup{
		z-index: 999;
	}
</style>
