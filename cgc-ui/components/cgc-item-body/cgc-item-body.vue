<template>
	<view class="cgc-row-between cgc-p-30 cgc-white-bg cgc-border-radius-middle" @click="click" :class="className">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props:{
			/**
			 * 类名
			 * h5和app端支持直接使用class
			 * 小程序端需使用className
			 */
			className: {
				default: ''
			}
		},
		methods:{
			click() {
				this.$emit("click")
			}
		}
	}
</script>

<style>
</style>
