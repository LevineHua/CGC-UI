<template>
	<view class="cgc-page-bg cgc-page">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">表单</block>
		</cgc-header>
		<view class="cgc-p-30">
			<cgc-form ref="cgcForm" errorTipType="message" :model="ruleForm" :rules="rules">
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item label="用户名" prop="username">
						<cgc-input v-model="ruleForm.username" placeholder="请输入用户名"></cgc-input>
					</cgc-form-item>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item label="密码" prop="password">
						<cgc-input v-model="ruleForm.password" placeholder="请输入密码"></cgc-input>
					</cgc-form-item>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item label="性别" prop="gender">
						<cgc-input v-model="ruleForm.gender" :disabled="true" placeholder="请选择性别" inputType="select" :clearable="false"></cgc-input>
					</cgc-form-item>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item>
						<cgc-input v-model="ruleForm.username" placeholder="请输入简介" inputType="textarea"></cgc-input>
					</cgc-form-item>
				</view>
				<cgc-button @click="submit('cgcForm')">提交</cgc-button>
				<!-- <view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item>
						<cgc-input v-model="value" placeholder="未填充文本暗提示" :clearable="true"></cgc-input>
					</cgc-form-item>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item>
						<cgc-input v-model="value" placeholder="未填充文本暗提示" :clearable="true"></cgc-input>
						<cgc-button slot="right" type="primary" size="superSmall">按钮</cgc-button>
					</cgc-form-item>
					<cgc-form-item subTitle="辅助文字说明，可换行" subTip="辅助文字说明，可换行">
						<cgc-input v-model="value" placeholder="未填充文本暗提示"></cgc-input>
						<view slot="right" class="cgc-font-md cgc-black-dark cgc-m-t-6">单位</view>
					</cgc-form-item>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item :showErrorIcon="true" subTitle="辅助文字说明，可换行" subTip="辅助文字说明，可换行">
						<cgc-input v-model="value" placeholder="未填充文本暗提示"></cgc-input>
						<view slot="right" class="cgc-font-md cgc-black-dark cgc-m-t-6">单位</view>
					</cgc-form-item>
				</view> -->
				
			</cgc-form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					username: '',
					password: '',
					gender: ''
				},
				rules: {
					username: [
						{ required: true, message: '请输入用户名'},
						{ min: 3, max: 5, message: '长度在 3 到 5 个字符'}
					],
					password: [
						{ required: true, message: '请输入密码'}
					],
					gender: [
						{ required: true, message: '请选择性别'}
					],
				}
			}
		},
		methods: {
			submit(formName) {
				this.$refs[formName].validate((valids) => {
					console.log(valids)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
