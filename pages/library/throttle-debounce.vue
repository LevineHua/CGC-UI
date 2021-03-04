<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">防抖|节流</block>
		</cgc-header>
		<view class="cgc-p-30">
			<view class="cgc-black cgc-m-b-30">延时 ms</view>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-radio-group className="cgc-flex cgc-flex-wrap cgc-m-minus-b-20 cgc-m-minus-r-30" v-model="delay">
					<cgc-radio :label="item" v-for="item in delaya" :key="item" type="button" :style="style" buttonStyle="width:100%" class="cgc-m-b-20 cgc-m-r-20"></cgc-radio>
				</cgc-radio-group>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">防抖 debounce</view>
			<cgc-item-body className="cgc-m-b-30 upload-demo" @click="debounce">
				<view class="cgc-black cgc-p-10 cgc-font-md">连续点击:{{number1}}</view>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">节流 throttle</view>
			<cgc-item-body className="cgc-m-b-30 upload-demo" @click="throttle">
				<view class="cgc-black cgc-p-10 cgc-font-md">连续点击:{{number2}}</view>
			</cgc-item-body>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				number1: 1,
				number2: 1,
				delaya: [
					500,
					1000,
					2000
				],
				delay: 500
			}
		},
		methods: {
			debounce() {
				this.$cgc.debounce(() => {
					this.number1++
				}, this.delay)
			},
			throttle() {
				this.$cgc.throttle(() => {
					this.number2++
				}, this.delay)
			}
		}
	}
</script>

<style>

</style>
