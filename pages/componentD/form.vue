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
					<cgc-form-item prop="content">
						<cgc-input v-model="ruleForm.content" :clearShowTip="true" @clear="clear" textareaLabel="简介" placeholder="请输入简介" inputType="textarea"></cgc-input>
					</cgc-form-item>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item label="设为默认">
						<cgc-switch slot="right" v-model="ruleForm.isDefault"></cgc-switch>
					</cgc-form-item>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item label="选中">
						<cgc-radio slot="right" v-model="ruleForm.radio" label="1"></cgc-radio>
					</cgc-form-item>
					<cgc-form-item label="未选中">
						<cgc-radio slot="right" v-model="ruleForm.radio" label="2"></cgc-radio>
					</cgc-form-item>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-radio-group v-model="ruleForm.fruits" @change="radioGroupChange">
						<cgc-form-item :label="item" v-for="item in radioList" :key="item">
							<cgc-radio slot="right" :label="item"></cgc-radio>
						</cgc-form-item>
					</cgc-radio-group>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item label="选中">
						<cgc-checkbox slot="right" v-model="ruleForm.checked1" label="1"></cgc-checkbox>
					</cgc-form-item>
					<cgc-form-item label="未选中">
						<cgc-checkbox slot="right" v-model="ruleForm.checked2" label="2"></cgc-checkbox>
					</cgc-form-item>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-checkbox-group v-model="ruleForm.likes" @change="checkGroupChange">
						<cgc-form-item :label="item" v-for="item in radioList" :key="item">
							<cgc-checkbox slot="right" :label="item"></cgc-checkbox>
						</cgc-form-item>
					</cgc-checkbox-group>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item label="计步器" prop="stepper">
						<cgc-stepper v-model="ruleForm.stepper"></cgc-stepper>
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
		<cgc-modal
			ref="clear" 
			icon="/static/popup-tip.png" 
			title="是否清空当前输入内容" 
			subtitle="清空后无法恢复"
			@confirm="clearContent"
		></cgc-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					username: '',
					password: '',
					gender: '',
					content: '',
					isDefault: false,
					radio: 1,
					fruits: '',
					checked: 1,
					checked1: '',
					checked2: '',
					likes: [],
					stepper: 1
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
						{ required: false, message: '请选择性别'}
					],
					content: [
						{ required: true, message: '请输入简介'}
					],
				},
				radioList: [
					"苹果",
					"西瓜",
					"草莓",
					"菠萝",
					"橘子",
				]
			}
		},
		methods: {
			submit(formName) {
				this.$refs[formName].validate((valids) => {
					console.log(valids)
					if(valids) {
						console.log(this.ruleForm)
					}
				})
			},
			clear() {
				this.$nextTick(() => {
					this.$refs['clear'].open()
				})
			},
			clearContent() {
				this.ruleForm.content = ''
			},
			radioGroupChange(e) {
				console.log(e)
			},
			checkGroupChange(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
