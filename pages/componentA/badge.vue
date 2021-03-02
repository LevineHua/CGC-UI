<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">徽标数</block>
		</cgc-header>
		<view class="cgc-p-30">
			<view class="badge-demo cgc-m-b-30 cgc-w-h-150 cgc-rela cgc-p-30 cgc-border-radius-middle">
				<cgc-badge></cgc-badge>
			</view>
			<view class="badge-demo cgc-m-b-30 cgc-w-h-150 cgc-rela cgc-p-30 cgc-border-radius-middle">
				<cgc-badge :value="2" :top="-10" :right="-10"></cgc-badge>
			</view>
			<view class="badge-demo cgc-m-b-30 cgc-w-h-150 cgc-rela cgc-p-30 cgc-border-radius-middle">
				<cgc-badge :value="10" :top="-10" :right="-10"></cgc-badge>
			</view>
			<view class="badge-demo cgc-m-b-30 cgc-w-h-150 cgc-rela cgc-p-30 cgc-border-radius-middle">
				<cgc-badge :value="999" :top="-10" :right="-10"></cgc-badge>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		options: {
			styleIsolation: 'shared'
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.badge-demo{
		background: #4A545F;
	}
</style>
