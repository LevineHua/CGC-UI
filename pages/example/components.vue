<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :back="false" :isFixed="false" bgColor="white">
			<block slot="content">组件</block>
		</cgc-header>
		<view class="cgc-p-30">
			<view class="cgc-black cgc-m-b-30">基础组件</view>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentA/color')" title="Color 色彩"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentA/button')" title="Button 按钮"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentA/image')" title="Image 图片"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentA/badge')" title="Badge 徽标数"></cgc-model-list-item>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">表单组件</view>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentD/form')" title="Form 表单"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentD/input')" title="Input 输入框"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentD/select')" title="Select 选择框"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentD/switch')" title="Switch 切换开关"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentD/stepper')" title="Stepper 计步器"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentD/radio')" title="Radio 单选框"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentD/checkbox')" title="Checkbox 单选框"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentD/upload')" title="Upload 上传"></cgc-model-list-item>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">导航组件</view>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentB/modelItem')" title="ModelListItem 模块列表"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentB/header')" title="Header 导航栏"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item title="TopBar 顶部菜单栏"></cgc-model-list-item>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">反馈组件</view>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentC/modal')" title="Modal 模态框"></cgc-model-list-item>
			</cgc-item-body>
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
			openPage(page) {
				uni.navigateTo({
					url:page
				})
			}
		}
	}
</script>

<style>

</style>
