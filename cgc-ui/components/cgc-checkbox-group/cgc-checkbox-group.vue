<template>
	<view>
		<slot></slot>
	</view>
</template>

<script>
	export default{
		name: 'cgcCheckboxGroup',
		componentName: 'cgcCheckboxGroup',
		props:{
			value: {
				type: Array
			}
		},
		created() {
			this.$nextTick(() => {
				this.broadcast('cgcCheckbox', 'checkboxChange', JSON.stringify(this.value))
			})
			this.$on("handleChange", (value) => {
				let newValue = this.value
				let index = this.value.indexOf(value)
				if(index !==-1 ){	// 如果存在该value，则删除
					newValue.splice(index, 1)
				} else {
					newValue.push(value)
				}
				// console.log(newValue)
				this.$emit("input", newValue)
				this.broadcast('cgcCheckbox', 'checkboxChange', JSON.stringify(newValue))
				this.$emit("change", newValue)
			})
		}
	}
</script>

<style>
</style>
