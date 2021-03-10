<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">单选框</block>
		</cgc-header>
		<view class="cgc-p-30">
			<view class="cgc-black cgc-m-b-30">input型单选框</view>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-radio-group className="cgc-flex cgc-flex-wrap" v-model="fruits" @change="radioGroupChange">
					<view class="cgc-flex cgc-m-r-30" v-for="item in radioList" :key="item">
						<cgc-radio :label="item">
							<view class="cgc-m-l-20 cgc-font-md">{{item}}</view>
						</cgc-radio>
					</view>
				</cgc-radio-group>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">禁用</view>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-radio-group className="cgc-flex cgc-flex-wrap" v-model="fruits" @change="radioGroupChange">
					<view class="cgc-flex cgc-m-r-30" v-for="item in radioList" :key="item">
						<cgc-radio :label="item" disabled>
							<view class="cgc-m-l-20 cgc-font-md">{{item}}</view>
						</cgc-radio>
					</view>
				</cgc-radio-group>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">标签型单选框</view>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-radio-group className="cgc-flex cgc-flex-wrap cgc-m-minus-b-20" v-model="like" @change="radioGroupChange">
					<view class="cgc-flex cgc-m-r-30 cgc-m-b-20" v-for="item in likes" :key="item">
						<cgc-radio :label="item" type="button">
							<view>{{item}}</view>
						</cgc-radio>
					</view>
				</cgc-radio-group>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">标签型单选框（等分）</view>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-radio-group className="cgc-flex cgc-flex-wrap cgc-m-minus-b-20 cgc-m-minus-r-30" v-model="like" @change="radioGroupChange">
					<cgc-radio :label="item" v-for="item in likes" :key="item" type="button" :style="style" buttonStyle="width:100%" class="cgc-m-b-20 cgc-m-r-20"></cgc-radio>
				</cgc-radio-group>
			</cgc-item-body>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radioList: [
					"苹果",
					"西瓜",
					"草莓",
					"菠萝"
				],
				fruits: '苹果',
				likes: [
					"吃",
					"喝",
					"漂",
					"前端",
					"刷微博"
				],
				like: ''
			}
		},
		computed:{
			style() {
				return `width:calc((100% - 90rpx) / 4)`
			}
		},
		methods: {
			radioGroupChange(e) {
				console.log(e)
			}
		}
	}
</script>

<style>

</style>
