<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">常用系统参数</block>
		</cgc-header>
		<view class="cgc-p-30">
			<cgc-item-body className="cgc-m-b-30">
				是否是安卓：{{isAndroid}}
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				导航栏高度：{{CustomBar}}px
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				状态栏高度：{{StatusBar}}px
			</cgc-item-body>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			isAndroid() {
				return this.$cgc.isAndroid
			},
			CustomBar() {
				return this.$cgc.CustomBar
			},
			StatusBar() {
				return this.$cgc.StatusBar
			}
		},
		methods: {
			openPage(page) {
				uni.navigateTo({
					url:page
				})
			}
		}
	}
</script>

<style>

</style>
