<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">图片</block>
		</cgc-header>
		<view class="cgc-p-30">
			<view class="cgc-black cgc-m-b-30">加载成功</view>
			<cgc-image class="cgc-w-h-200 cgc-border-radius-small" src="https://cdn666.cgc999.com/202012031637371714.jpeg?imageMogr2/auto-orient/thumbnail/!40p/strip/quality/70"></cgc-image>
			<view class="cgc-black cgc-m-b-30 cgc-m-t-30">加载中</view>
			<cgc-image class="cgc-w-h-200" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201506%2F27%2F210825xqajmjs1zr5kn323.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613890491&t=6a3b92e31235424c29dce8e1340843c5"></cgc-image>
			<view class="cgc-black cgc-m-b-30 cgc-m-t-30">加载失败</view>
			<cgc-image class="cgc-w-h-200" src="http://192.168.150.84:8080/static/null/default-img.png"></cgc-image>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
