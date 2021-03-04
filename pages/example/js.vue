<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :back="false" :isFixed="false" bgColor="white">
			<block slot="content">工具</block>
		</cgc-header>
		<view class="cgc-p-30">
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/library/throttle-debounce')" title="Throttle | Debounce 防抖节流"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/library/timeFormat')" title="TimeFormat 时间格式化"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/library/test')" title="Test 数据校验"></cgc-model-list-item>
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
