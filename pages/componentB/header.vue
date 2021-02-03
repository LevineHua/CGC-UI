<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">导航栏</block>
		</cgc-header>
		<view class="cgc-p-30">
			<view class="cgc-black cgc-m-b-30">基础用法</view>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentB/headers/solidBg')" image="" title="纯色背景"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentB/headers/gradualBg')" image="" title="渐变背景"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentB/headers/button')" image="" title="带操作按钮"></cgc-model-list-item>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">高级用法</view>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentB/headers/scrollPage')" image="" title="页面滚动改变header背景"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentB/headers/complex')" image="" title="复杂示例"></cgc-model-list-item>
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
