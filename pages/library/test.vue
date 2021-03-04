<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">数据校验</block>
		</cgc-header>
		<view class="cgc-p-30">
			<cgc-form>
				<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg">
					<cgc-form-item>
						<cgc-input v-model="value" textareaLabel="校验数据" placeholder="请输入需要校验的数据" inputType="textarea"></cgc-input>
					</cgc-form-item>
				</view>
			</cgc-form>
			<view class="cgc-black cgc-m-b-30">校验格式</view>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-radio-group className="cgc-flex cgc-flex-wrap cgc-m-minus-b-20" v-model="rule">
					<view class="cgc-flex cgc-m-r-30 cgc-m-b-20" v-for="item in rules" :key="item.name">
						<cgc-radio :label="item.name" type="button">
							{{item.title}}
						</cgc-radio>
					</view>
				</cgc-radio-group>
			</cgc-item-body>
			<cgc-button @click="test">校验</cgc-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				rules: [
					{
						title: '邮箱',
						name: 'email'
					},
					{
						title: '手机号码',
						name: 'mobile'
					},
					{
						title: '网址',
						name: 'url'
					},
					{
						title: '日期',
						name: 'date'
					},
					{
						title: 'ISO类型的日期格式',
						name: 'dateISO'
					},
					{
						title: '十进制数字',
						name: 'number'
					},
					{
						title: '整数',
						name: 'digits'
					},
					{
						title: '身份证',
						name: 'idCard'
					},
					{
						title: '车牌号',
						name: 'carNo'
					},
					{
						title: '金额',
						name: 'amount'
					},
					{
						title: '中文',
						name: 'chinese'
					},
					{
						title: '纯字母',
						name: 'letter'
					},
					{
						title: '字母或者数字',
						name: 'enOrNum'
					},
					{
						title: '是否包含某个值',
						name: 'contains'
					},
					{
						title: '值范围',
						name: 'range'
					},
					{
						title: '长度范围',
						name: 'rangeLength'
					},
					{
						title: '固定电话',
						name: 'landline'
					},
					{
						title: '是否为空',
						name: 'empty'
					},
					{
						title: 'json字符串',
						name: 'jsonString'
					},
					{
						title: '数组',
						name: 'array'
					},
					{
						title: '对象',
						name: 'object'
					},
				],
				rule: 'email'
			}
		},
		methods: {
			test() {
				if(this.$cgc.test[this.rule](this.value)) {
					uni.showToast({
						title:'校验成功'
					})
				} else {
					uni.showToast({
						title:'校验失败',
						icon:'none'
					})
				}
			}
		}
	}
</script>

<style>

</style>
