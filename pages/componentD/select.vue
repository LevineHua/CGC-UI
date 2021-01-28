<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">输入框</block>
		</cgc-header>
		<view class="cgc-p-30">
			<cgc-form>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item label="选项标题">
						<cgc-input v-model="value" placeholder="未填充文本暗提示" inputType="select" :clearable="true"></cgc-input>
					</cgc-form-item>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item label="选项标题">
						<cgc-input v-model="value" disabled placeholder="不可选择" inputType="select" :clearable="true"></cgc-input>
					</cgc-form-item>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item label="选项标题">
						<cgc-input v-model="value" placeholder="未填充文本暗提示" inputType="select" :clearable="true"></cgc-input>
						<cgc-button slot="right" type="primary" size="superSmall">按钮</cgc-button>
					</cgc-form-item>
					<cgc-form-item label="选项标题" subTitle="辅助文字说明，可换行" inputType="select" subTip="辅助文字说明，可换行">
						<cgc-input v-model="value" placeholder="未填充文本暗提示"></cgc-input>
					</cgc-form-item>
				</view>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item label="选项标题" :showErrorIcon="true" inputType="select" subTitle="辅助文字说明，可换行" subTip="辅助文字说明，可换行">
						<cgc-input v-model="value" placeholder="未填充文本暗提示"></cgc-input>
					</cgc-form-item>
				</view>
			</cgc-form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
</style>
