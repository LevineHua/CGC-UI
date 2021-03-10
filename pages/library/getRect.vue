<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">节点信息</block>
		</cgc-header>
		<view class="cgc-p-30">
			<view class="black rect1 cgc-white-bg cgc-m-t-30 cgc-m-b-30 cgc-p-30">
				{{JSON.stringify(result)}}
			</view>
			<view class="black rect2 cgc-white-bg cgc-m-t-30 cgc-p-30 cgc-h-300">
				{{JSON.stringify(result1)}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result: {},
				result1: {}
			}
		},
		onLoad() {
			this.rectInfo(0)
			this.rectInfo(1)
		},
		methods: {
			async rectInfo(index) {
				let el = index == 0 ? '.rect1' : '.rect2';
				let result = await this.$cgc.getRect(el);
				if(index == 0) {
					this.result = result
				}
				if(index == 1) {
					this.result1 = result
				}
			},
		}
	}
</script>

<style>
	.black{
		word-break: break-word;
		line-height: 1.5;
	}
</style>
