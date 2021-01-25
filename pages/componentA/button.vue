<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">按钮</block>
		</cgc-header>
		<view class="cgc-p-30">
			<view class="cgc-black cgc-m-b-30">图标按钮</view>
			<view class="button-demo cgc-flex cgc-row-left cgc-m-b-30 cgc-flex-wrap">
				<cgc-button class="button-item" type="icon" icon="/static/message-icon.png" size="default">标准按钮</cgc-button>
			</view>
			<view class="cgc-black cgc-m-b-30">基础组件（不可点击状态）</view>
			<view class="button-demo cgc-flex cgc-row-left cgc-m-b-30 cgc-flex-wrap">
				<cgc-button class="button-item" :disabled="true" type="main" size="tag">标签型</cgc-button>
				<cgc-button class="button-item" :disabled="true" type="primary" size="tag">标签型</cgc-button>
				<cgc-button class="button-item" type="judge" size="tag">文字标签</cgc-button>
				<cgc-button class="button-item" :disabled="true" type="text" size="tag">文字标签</cgc-button>
				<cgc-button class="button-item" icon="/static/message-icon.png" type="primary" size="tag">标签型</cgc-button>
			</view>
			<view class="cgc-black cgc-m-b-30">超小型按钮</view>
			<view class="button-demo cgc-flex cgc-row-left cgc-m-b-30 cgc-flex-wrap">
				<cgc-button class="button-item" type="main" size="superSmall">超小型</cgc-button>
				<cgc-button class="button-item" type="primary" size="superSmall">超小型</cgc-button>
				<cgc-button class="button-item" type="judge" size="superSmall">超小型</cgc-button>
				<cgc-button class="button-item" type="text" size="superSmall">文字按钮</cgc-button>
				<cgc-button class="button-item" icon="/static/message-icon.png" type="primary" size="superSmall">超小型</cgc-button>
			</view>
			<view class="cgc-black cgc-m-b-30">小型按钮</view>
			<view class="button-demo cgc-flex cgc-row-left cgc-m-b-30 cgc-flex-wrap">
				<cgc-button class="button-item" type="main" size="mini">小型按钮</cgc-button>
				<cgc-button class="button-item" type="primary" size="mini">小型按钮</cgc-button>
				<cgc-button class="button-item" type="judge" size="mini">小型按钮</cgc-button>
				<cgc-button class="button-item" type="text" size="mini">文字按钮</cgc-button>
				<cgc-button class="button-item" icon="/static/message-icon.png" type="primary" size="mini">小型按钮</cgc-button>
			</view>
			<view class="cgc-black cgc-m-b-30">辅助按钮</view>
			<view class="button-demo cgc-flex cgc-row-left cgc-m-b-30 cgc-flex-wrap">
				<cgc-button class="button-item" type="main" size="auxiliary">辅助按钮</cgc-button>
				<cgc-button class="button-item" type="primary" size="auxiliary">辅助按钮</cgc-button>
				<cgc-button class="button-item" type="judge" size="auxiliary">辅助按钮</cgc-button>
				<cgc-button class="button-item" type="text" size="auxiliary">文字按钮</cgc-button>
				<cgc-button class="button-item" icon="/static/message-icon.png" type="primary" size="auxiliary">辅助按钮</cgc-button>
			</view>
			<view class="cgc-black cgc-m-b-30">中型按钮</view>
			<view class="button-demo cgc-flex cgc-row-left cgc-m-b-30 cgc-flex-wrap">
				<cgc-button class="button-item" type="main" size="medium">中型按钮</cgc-button>
				<cgc-button class="button-item" type="primary" size="medium">中型按钮</cgc-button>
				<cgc-button class="button-item" type="judge" size="medium">中型按钮</cgc-button>
				<cgc-button class="button-item" type="text" size="medium">文字按钮</cgc-button>
				<cgc-button class="button-item" icon="/static/message-icon.png" type="primary" size="medium">中型按钮</cgc-button>
			</view>
			<view class="cgc-black cgc-m-b-30">标准按钮</view>
			<view class="button-demo cgc-flex cgc-row-left cgc-m-b-30 cgc-flex-wrap">
				<cgc-button class="button-item" type="main" size="default">标准按钮</cgc-button>
				<cgc-button class="button-item" type="primary" size="default">标准按钮</cgc-button>
				<cgc-button class="button-item" type="judge" size="default">标准按钮</cgc-button>
				<cgc-button class="button-item" type="text" size="default">文字按钮</cgc-button>
				<cgc-button class="button-item" icon="/static/message-icon.png" type="primary" size="default">标准按钮</cgc-button>
			</view>
			<view class="cgc-black cgc-m-b-30">大型按钮</view>
			<view class="cgc-m-b-30">
				<cgc-button type="main" size="big">大型按钮</cgc-button>
			</view>
			<view class="cgc-m-b-30">
				<cgc-button type="main" size="big" subText="辅助文字">主标题</cgc-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.button-demo{
		align-items: flex-start;
		.button-item{
			margin-right: 20rpx;
			margin-bottom: 30rpx;
		}
	}
</style>
