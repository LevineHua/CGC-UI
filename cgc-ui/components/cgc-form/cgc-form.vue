<template>
	<view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:'cgcForm',
		componentName: 'cgcForm',
		// 如果为false则在父组件中设置的attribute则不生效
		inheritAttrs:false,
		provide() {
			return {
				form: this
			}
		},
		props:{
			/**
			 * 表单数据对象
			 */
			model: {
				required: true,
				type: Object,
				default() {
					return ''
				}
			},
			/**
			 * 校验规则
			 */
			rules: {
				type: Object
			},
			/**
			 * 异常提示方式
			 *  - toast：消息提示框
			 *  - message：文本提示
			 */
			errorTipType: {
				type: String,
				default() {
					return 'message'
				}
			}
		},
		data() {
			return {
				fields: []
			}
		},
		created() {
			// 监听注册的form-item组件
			this.$on('cgc.form.addField', (field) => {
				if (field) {
				  this.fields.push(field);
				}
			});
		},
		methods:{
			/**
			 * 校验所有数据
			 * @param {Object} callback
			 */
			validate(callback) {
				if(!this.model) {
					console.error('cgc-form的model为必传参数，否则无法校验')
					return
				}
				if(this.fields.length === 0 && callback) {
					callback(true)
					return
				}
				let fields = this.fields.map(val => val.validate())
				Promise.all(fields).then(res => {
					// console.log(res)
					let message = res.filter(val => val != true)
					if(message.length>0) {
						if(this.errorTipType=='toast') {
							uni.showToast({
								title:message[0],
								icon:'none'
							})
						}
						callback(false)
					} else {
						callback(true)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .cgc-form-item{
		&:last-child {
			.cgc-form-item__main{
				&::after{
					display: none;
				}
			}
		}
	}
</style>
