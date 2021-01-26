<template>
	<view class="cgc-flex">
		
	</view>
</template>

<script>
	export default{
		props:{
			value: {
				type: Number
			},
			/**
			 * 最小值
			 */
			minimum: {
				type: Number,
				default() {
					return 1
				}
			},
			/**
			 * 最大值
			 */
			maximum: {
				type: Number,
				default() {
					return 100
				}
			}
		}
	}
</script>

<style>
</style>
