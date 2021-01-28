<template>
	<view class="cgc-page cgc-white-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">计步器</block>
		</cgc-header>
		<view class="cgc-p-30">
			<view class="cgc-black cgc-m-b-30 cgc-m-t-30">常规</view>
			<cgc-stepper v-model="value"></cgc-stepper>
			<view class="cgc-black cgc-m-b-30 cgc-m-t-30">禁止点击和输入</view>
			<cgc-stepper disabled></cgc-stepper>
			<view class="cgc-black cgc-m-b-30 cgc-m-t-30">禁止输入</view>
			<cgc-stepper v-model="value" disabledInput></cgc-stepper>
			<view class="cgc-black cgc-m-b-30 cgc-m-t-30">设置递增递减值</view>
			<cgc-stepper v-model="value2" :step="2"></cgc-stepper>
			<view class="cgc-black cgc-m-b-30 cgc-m-t-30">禁用长按递增</view>
			<cgc-stepper v-model="value2" :longPress="false"></cgc-stepper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 1,
				value2: 1
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
