<template>
	<view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:'cgcRadioGroup',
		componentName: 'cgcRadioGroup',
		props:{
			value: {
				type: [Boolean, String, Number]
			}
		},
		created() {
			this.$on("handleChange", (value) => {
				this.$emit('input', value)
				this.broadcast('cgcRadio', 'valueChange', value)
				this.$nextTick(() => {
					this.$emit('change', value)
				})
			})
		}
	}
</script>

<style>
</style>
