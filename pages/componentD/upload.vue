<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">上传</block>
		</cgc-header>
		<view class="cgc-p-30">
			<cgc-item-body class="cgc-m-b-30 upload-demo">
				<view class="cgc-black cgc-p-10 cgc-font-md">照片上传（默认196*196）</view>
				<cgc-upload></cgc-upload>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30 upload-demo">
				<view class="cgc-black cgc-p-10 cgc-font-md">照片上传（143*143）</view>
				<cgc-upload width="143" height="143"></cgc-upload>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30 upload-demo">
				<view class="cgc-black cgc-p-10 cgc-font-md">照片上传（305*196）</view>
				<cgc-upload width="305" height="196"></cgc-upload>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30 upload-demo cgc-flex">
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
					@on-choose-complete="onChooseComplete"
				>
					<cgc-image slot="file" @click="doPreviewImage" class="cgc-w-h-100 cgc-border-radius-circular" :loadingImage="photo"></cgc-image>
				</cgc-upload>
			</cgc-item-body>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				photo: '/static/cgc-ui/default-img.png'
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
