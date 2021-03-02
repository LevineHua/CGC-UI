<template>
	<view :class="className">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:'cgcRadioGroup',
		componentName: 'cgcRadioGroup',
		props:{
			/**
			 * 类名
			 * h5和app端支持直接使用class
			 * 小程序端需使用className
			 */
			className: {
				default: ''
			},
			value: {
				type: [Boolean, String, Number]
			}
		},
		created() {
			this.$nextTick(() => {
				this.broadcast('cgcRadio', 'valueChange', this.value)
			})
			this.$on("handleChange", (value) => {
				this.$emit('input', value)
				this.broadcast('cgcRadio', 'valueChange', value)
				this.$nextTick(() => {
					this.$emit('change', value)
				})
			})
		},
		methods:{
			toJSON() {},
		}
	}
</script>

<style>
</style>
