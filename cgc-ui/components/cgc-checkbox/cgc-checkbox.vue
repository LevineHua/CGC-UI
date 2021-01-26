<template>
	<view class="cgc-w-h-36">
		<image :src="isChecked?activeIcon:inactiveIcon" @click="change" class="cgc-w-h-36"></image>
	</view>
</template>

<script>
	/**
	 * 需和cgc-checkbox-group配合使用
	 */
	export default {
		name:'cgcCheckbox',
		componentName: 'cgcCheckbox',
		props:{
			value: {
				type: [String, Number, Boolean]
			},
			label: {
				type: [String, Number, Boolean]
			},
			/**
			 * 选中时的图标
			 */
			activeIcon: {
				type: String,
				default: '/static/cgc-ui/checkbox-ed.png'
			},
			/**
			 * 未选中时的图标
			 */
			inactiveIcon: {
				type: String,
				default: '/static/cgc-ui/checkbox.png'
			},
			/**
			 * 是否禁用
			 */
			disabled: {
				type: Boolean,
				default: false
			},
			/**
			 * 当前是否勾选
			 */
			checked: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				parent: '',
				groupValue: '',	// groupValue为父组件传递的值
			}
		},
		created() {
			// 递归查询cgc-checkbox组件的父组件cgc-checkbox-group，有可能不存在
			this.parent = this.$cgc.$parent.call(this, 'cgcCheckboxGroup');
			// 监听cgc-checkbox-group的值是否改变，如果改变，则修改cgc-checkbox状态
			this.$on("checkboxChange", (value) => {
				this.groupValue = JSON.parse(value)
			})
		},
		computed:{
			isChecked() {
				// 如果存在cgc-radio-group父组件，则判断父组件的value是否与子组件的label匹配
				if(this.groupValue) {
					if(this.groupValue.includes(this.label)) {
						return true
					} else {
						return false
					}
				} else {	// 反之直接判断子组件的value和label是否匹配
					if(this.value == this.label || this.checked) {
						return true
					} else {
						return false
					}
				}
			}
		},
		methods:{
			change() {
				if(!this.disabled) {
					if(this.parent) {
						this.dispatch('cgcCheckboxGroup', 'handleChange', this.label)
					} else {
						if(this.label == this.value) {
							this.$emit('input', '')
						} else {
							this.$emit('input', this.label)
						}
					}
				}
			}
		}
	}
</script>

<style>
</style>
