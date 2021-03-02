<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">复选框</block>
		</cgc-header>
		<view class="cgc-p-30">
			<view class="cgc-black cgc-m-b-30">input型复选框</view>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-checkbox-group className="cgc-flex cgc-flex-wrap" v-model="fruits" @change="radioGroupChange">
					<view class="cgc-flex cgc-m-r-30" v-for="item in radioList" :key="item">
						<cgc-checkbox :label="item">
							<view class="cgc-m-l-20 cgc-font-md">{{item}}</view>
						</cgc-checkbox>
					</view>
				</cgc-checkbox-group>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">标签型复选框</view>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-checkbox-group className="cgc-flex cgc-flex-wrap cgc-m-minus-b-20" v-model="like" @change="radioGroupChange">
					<view class="cgc-flex cgc-m-r-30 cgc-m-b-20" v-for="item in likes" :key="item">
						<cgc-checkbox :label="item" type="button">
							<view class="cgc-m-l-20">{{item}}</view>
						</cgc-checkbox>
					</view>
				</cgc-checkbox-group>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">标签型复选框（等分）</view>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-checkbox-group className="cgc-flex cgc-flex-wrap cgc-m-minus-b-20 cgc-m-minus-r-30" v-model="skill" @change="radioGroupChange">
					<cgc-checkbox :label="item" v-for="item in skills" :key="item" type="button" buttonInactiveStyle="gray" :style="style" buttonStyle="width:100%" class="cgc-m-b-20 cgc-m-r-20"></cgc-checkbox>
				</cgc-checkbox-group>
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
				fruits: [
					'苹果'
				],
				likes: [
					"吃",
					"喝",
					"嫖",
					"前端",
					"刷微博"
				],
				like: [],
				skills: [
					'JavaScript',
					'css',
					'html',
					'vue',
					'flutter',
					'node'
				],
				skill: []
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
