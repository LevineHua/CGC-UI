<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">上传</block>
		</cgc-header>
		<view class="cgc-p-30">
			<cgc-item-body className="cgc-m-b-30 upload-demo">
				<view class="cgc-black cgc-p-10 cgc-font-md">照片上传（默认196*196）</view>
				<cgc-upload></cgc-upload>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30 upload-demo">
				<view class="cgc-black cgc-p-10 cgc-font-md">照片上传（143*143）</view>
				<cgc-upload width="143" height="143"></cgc-upload>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30 upload-demo">
				<view class="cgc-black cgc-p-10 cgc-font-md">照片上传（305*196）</view>
				<cgc-upload width="305" height="196"></cgc-upload>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30 upload-demo cgc-flex">
				<view class="cgc-black cgc-p-10 cgc-font-md cgc-flex-1" @click="chooseUploadType">上传头像</view>
				<cgc-upload 
					ref="upload"
					width="143" 
					height="143" 
					addBtnBorderRadius="100" 
					:showProgress="false" 
					:deletable="false"
					:showUploadList="false"
					:showAddBtn="false"
					:multiple="false"
					:maxCount="1"
					:coverImage="true"
					:previewFullImage="false"
					@on-choose-complete="onChooseComplete"
				>
					<cgc-image slot="file" @click="doPreviewImage" width="100rpx" height="100rpx" className="cgc-border-radius-circular" :loadingImage="photo"></cgc-image>
				</cgc-upload>
			</cgc-item-body>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				photo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-3582ba1cef38f8d7dee72321fdb80b6f_hd.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617241214&t=19bd545646f76d0b4050bb50e69b2927'
			}
		},
		onLoad() {
			
		},
		methods: {
			chooseUploadType() {
				this.$refs['upload'].chooseUploadType()
			},
			onChooseComplete(e) {
				console.log(e)
				this.photo = e[0].url
			},
			doPreviewImage() {
				this.$refs['upload'].doPreviewImage(this.photo, 0)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.upload-demo{
		padding: 20rpx;
	}
</style>
