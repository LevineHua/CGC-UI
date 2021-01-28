<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">输入框</block>
		</cgc-header>
		<view class="cgc-p-30">
			<cgc-form>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item label="选项标题">
						<cgc-input v-model="value" placeholder="未填充文本暗提示" :clearable="true"></cgc-input>
					</cgc-form-item>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item label="选项标题">
						<cgc-input v-model="value" placeholder="未填充文本暗提示" :clearable="true"></cgc-input>
						<cgc-button slot="right" type="primary" size="superSmall">按钮</cgc-button>
					</cgc-form-item>
					<cgc-form-item label="选项标题" subTitle="辅助文字说明，可换行" subTip="辅助文字说明，可换行">
						<cgc-input v-model="value" placeholder="未填充文本暗提示"></cgc-input>
						<view slot="right" class="cgc-font-md cgc-black-dark cgc-m-t-6">单位</view>
					</cgc-form-item>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item label="选项标题" :showErrorIcon="true" subTitle="辅助文字说明，可换行" subTip="辅助文字说明，可换行">
						<cgc-input v-model="value" placeholder="未填充文本暗提示"></cgc-input>
					</cgc-form-item>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item>
						<cgc-input v-model="value" :clearShowTip="true" @clear="clear" textareaLabel="段落型输入" placeholder="请输入暗提示" inputType="textarea"></cgc-input>
					</cgc-form-item>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg login-demo">
					<cgc-form-item>
						<cgc-input v-model="phone" :clearable="false" type="number" :maxlength="11" placeholder="请输入手机号码"></cgc-input>
					</cgc-form-item>
					<cgc-form-item>
						<cgc-input v-model="code" :clearable="false" :maxlength="6" placeholder="请输入验证码"></cgc-input>
						<cgc-button slot="right" type="primary" size="auxiliary">按钮</cgc-button>
					</cgc-form-item>
				</view>
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
				value: '',
				phone: '',
				code: ''
			}
		},
		methods: {
			clear() {
				this.$nextTick(() => {
					this.$refs['clear'].open()
				})
			},
			clearContent() {
				this.value = ''
			},
		}
	}
</script>

<style lang="scss" scoped>
	.login-demo{
		/deep/ .cgc-form-item__main{
			height: 110rpx;
			align-items: center;
		}
	}
</style>
