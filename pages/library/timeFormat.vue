<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">时间格式化</block>
		</cgc-header>
		<view class="cgc-p-30">
			<view class="cgc-black cgc-m-b-30">{{time}}</view>
			<cgc-item-body className="cgc-m-b-30 upload-demo">
				<view class="cgc-black cgc-p-10 cgc-font-md">
					{{time | date}}
				</view>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30 upload-demo">
				<view class="cgc-black cgc-p-10 cgc-font-md">
					{{time | date('Y年m月d日 H时i分s秒')}}
				</view>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">{{time2}}</view>
			<cgc-item-body className="cgc-m-b-30 upload-demo">
				<view class="cgc-black cgc-p-10 cgc-font-md">
					{{time2 | date}}
				</view>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30 upload-demo">
				<view class="cgc-black cgc-p-10 cgc-font-md">
					{{time2 | date('Y年m月d日 H时i分s秒')}}
				</view>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">{{time3}}</view>
			<cgc-item-body className="cgc-m-b-30 upload-demo">
				<view class="cgc-black cgc-p-10 cgc-font-md">
					{{time3 | date}}
				</view>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30 upload-demo">
				<view class="cgc-black cgc-p-10 cgc-font-md">
					{{time3 | date('Y年m月d日 H时i分s秒')}}
				</view>
			</cgc-item-body>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				time: 1614741744182,
				time2: 1614741744,
				time3: new Date()
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
