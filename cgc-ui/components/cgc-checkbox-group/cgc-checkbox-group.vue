<template>
	<view :class="className">
		<slot></slot>
	</view>
</template>

<script>
	export default{
		name: 'cgcCheckboxGroup',
		componentName: 'cgcCheckboxGroup',
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
		},
		methods:{
			toJSON() {},
		}
	}
</script>

<style>
</style>
