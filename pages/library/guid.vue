<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">数据校验</block>
		</cgc-header>
		<view class="cgc-p-30">
			<view class="cgc-border-radius-middle cgc-m-b-30 cgc-white-bg cgc-text-center cgc-p-30">
				{{guid}}
			</view>
			<view class="cgc-black cgc-m-b-30">长度</view>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-radio-group className="cgc-flex cgc-flex-wrap cgc-m-minus-b-20" @change="change" v-model="lengthVal">
					<view class="cgc-flex cgc-m-r-30 cgc-m-b-20" v-for="item in lengths" :key="item.name">
						<cgc-radio :label="item.name" type="button">
							{{item.title}}
						</cgc-radio>
					</view>
				</cgc-radio-group>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">首字符为"u"</view>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-radio-group className="cgc-flex cgc-flex-wrap cgc-m-minus-b-20" @change="change2" v-model="isU">
					<view class="cgc-flex cgc-m-r-30 cgc-m-b-20" v-for="item in isUs" :key="item.name">
						<cgc-radio :label="item.name" type="button">
							{{item.title}}
						</cgc-radio>
					</view>
				</cgc-radio-group>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">取值基数(进制)</view>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-radio-group className="cgc-flex cgc-flex-wrap cgc-m-minus-b-20" @change="change3" v-model="base">
					<view class="cgc-flex cgc-m-r-30 cgc-m-b-20" v-for="item in bases" :key="item.name">
						<cgc-radio :label="item.name" type="button">
							{{item.title}}
						</cgc-radio>
					</view>
				</cgc-radio-group>
			</cgc-item-body>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				guid: '',
				lengths: [
					{
						title: '10',
						name: 10
					},
					{
						title: '16',
						name: 16
					},
					{
						title: '32',
						name: 32
					},
					{
						title: 'rfc4122标准',
						name: 0
					},
				],
				lengthVal: '10',
				isUs: [
					{
						title: '是',
						name: true
					},
					{
						title: '否',
						name: false
					}
				],
				isU: true,
				bases: [
					{
						title: '二',
						name: 2
					},
					{
						title: '八',
						name: 8
					},
					{
						title: '十',
						name: 10
					},
					{
						title: '六十二',
						name: 62
					}
				],
				base: 2,
			}
		},
		onLoad() {
			this.getGuid()
		},
		methods: {
			change(e) {
				this.lengthVal = e
				this.getGuid();
			},
			change2(e) {
				this.isU = e
				this.getGuid();
			},
			change3(e) {
				this.base = e
				this.getGuid();
			},
			getGuid() {
				this.guid = this.$cgc.guid(this.lengthVal, this.isU, this.base)
			}
		}
	}
</script>

<style>

</style>
