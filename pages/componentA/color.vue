<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">色彩</block>
		</cgc-header>
		<view class="cgc-p-30">
			<view v-for="(item, index) in list" :key="index">
				<view class="cgc-black cgc-m-b-20">{{item.type}}</view>
				<view class="cgc-flex cgc-flex-wrap">
					<view v-for="(citem,cindex) in item.list" :key="cindex" :class="citem.className" class="cgc-border-radius-middle cgc-white cgc-m-b-30 cgc-m-r-30 cgc-w-200 cgc-h-100 cgc-flex-col cgc-row-center cgc-p-l-20 cgc-title-lg">
						<view>{{citem.name}}</view>
						<view class="cgc-m-t-10">{{citem.color}}</view>
					</view>
				</view>
			</view>
			<view v-for="(item, index) in longList" :key="'long'+index">
				<view class="cgc-black cgc-m-b-20">{{item.type}}</view>
				<view class="cgc-flex cgc-flex-wrap">
					<view v-for="(citem,cindex) in item.list" :key="'clong'+cindex" :class="citem.className" class="cgc-border-radius-middle cgc-white cgc-m-b-30 cgc-w-710 cgc-h-100 cgc-flex-col cgc-row-center cgc-p-l-20 cgc-title-lg">
						<view>{{citem.name}}</view>
						<view class="cgc-m-t-10">{{citem.color}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						type: '纯色',
						list: [
							{
								name: '主色调',
								color: '#FF6A00',
								className: 'cgc-primary-bg'
							},
							{
								name: '主色调-中',
								color: '#FDD3A1',
								className: 'cgc-primary-dark-bg'
							},
							{
								name: '主色调-浅',
								color: '#FFFBF4',
								className: 'cgc-primary-light-bg'
							},
							{
								name: '蓝色',
								color: '#4A545F',
								className: 'cgc-blue-bg'
							},
							{
								name: '蓝色-中',
								color: '#ABBBFF',
								className: 'cgc-blue-dark-bg'
							},
							{
								name: '蓝色-浅',
								color: '#EEF1FF',
								className: 'cgc-blue-light-bg'
							},
							{
								name: '绿色',
								color: '#00C657',
								className: 'cgc-green-bg'
							},
							{
								name: '绿色-中',
								color: '#9BE6BC',
								className: 'cgc-green-dark-bg'
							},
							{
								name: '绿色-浅',
								color: '#E6F5EA',
								className: 'cgc-green-light-bg'
							},
							{
								name: '红色',
								color: '#FF5B4C',
								className: 'cgc-red-bg'
							},
							{
								name: '红色-中',
								color: '#FFB6AA',
								className: 'cgc-red-dark-bg'
							},
							{
								name: '红色-浅',
								color: '#FFF1EF',
								className: 'cgc-red-light-bg'
							},
							{
								name: '黑色',
								color: '#202123',
								className: 'cgc-black-bg'
							},
							{
								name: '黑色-中',
								color: '#9EA6B1',
								className: 'cgc-black-dark-bg'
							},
							{
								name: '黑色-浅',
								color: '#E1E7ED',
								className: 'cgc-black-light-bg'
							},
							{
								name: '黑色-暖',
								color: '#432F1E',
								className: 'cgc-black-warm-bg'
							},
							{
								name: '黑色-暖-中',
								color: '#A35900',
								className: 'cgc-black-dark-warm-bg'
							},
							{
								name: '黑色-暖-浅',
								color: '#FFFBF4',
								className: 'cgc-black-light-warm-bg'
							}
						]
					}
				],
				longList: [
					{
						type: '渐变色',
						list: [
							{
								name: '辉黄色渐变',
								color: '#FFE8A3-#FF6A00',
								className: 'cgc-linear-gradient-yellow'
							},
							{
								name: '赤橙色渐变',
								color: '#FFA951-#FFC752',
								className: 'cgc-linear-gradient-orange'
							},
							{
								name: '樱红色渐变',
								color: '#FE5B4F-#FF9D74',
								className: 'cgc-linear-gradient-red'
							},
							{
								name: '标签颜色',
								color: '#F7A5A3-#DF6F6A',
								className: 'cgc-linear-gradient-pink'
							},
							{
								name: '亮银色渐变',
								color: '#DCE9ED-#BDCCD1',
								className: 'cgc-linear-gradient-silvery'
							},
							{
								name: '蔚蓝色渐变',
								color: '#3C6EFF-#6DCDFF',
								className: 'cgc-linear-gradient-blue'
							},
							{
								name: '普蓝色渐变',
								color: '#94B9FF-#4B8EFF',
								className: 'cgc-linear-gradient-blue-dark'
							}
						]
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
