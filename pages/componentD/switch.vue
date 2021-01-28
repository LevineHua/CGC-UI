<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">切换开关</block>
		</cgc-header>
		<view class="cgc-p-30">
			<view class="cgc-black cgc-m-b-30 cgc-m-t-30">常规</view>
			<cgc-switch v-model="value"></cgc-switch>
			<view class="cgc-black cgc-m-b-30 cgc-m-t-30">禁用</view>
			<cgc-switch disabled v-model="value2"></cgc-switch>
			<view class="cgc-black cgc-m-b-30 cgc-m-t-30">不显示开关值</view>
			<cgc-switch :showValue="false" v-model="value"></cgc-switch>
			<view class="cgc-black cgc-m-b-30 cgc-m-t-30">设置开关值</view>
			<cgc-switch v-model="value" openText="是" closeText="否"></cgc-switch>
			<view class="cgc-black cgc-m-b-30 cgc-m-t-30">设置打开/关闭时的颜色</view>
			<cgc-switch v-model="value" activeColor="green" inactiveColor="gray"></cgc-switch>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: false,
				value2: false
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
