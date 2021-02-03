<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :back="false" :isFixed="false" bgColor="white">
			<block slot="content">组件</block>
		</cgc-header>
		<view class="cgc-p-30">
			<view class="cgc-black cgc-m-b-30">基础组件</view>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentA/color')" image="" title="Color 色彩"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentA/button')" image="" title="Button 按钮"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentA/image')" image="" title="Image 图片"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentA/badge')" image="" title="Badge 徽标数"></cgc-model-list-item>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">表单组件</view>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentD/form')" image="" title="Form 表单"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentD/input')" image="" title="Input 输入框"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentD/select')" image="" title="Select 选择框"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentD/switch')" image="" title="Switch 切换开关"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentD/stepper')" image="" title="Stepper 计步器"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentD/radio')" image="" title="Radio 单选框"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentD/checkbox')" image="" title="Checkbox 单选框"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentD/upload')" image="" title="Upload 上传"></cgc-model-list-item>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">导航组件</view>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentB/modelItem')" image="" title="ModelListItem 模块列表"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentB/header')" image="" title="Header 导航栏"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item image="" title="TopBar 顶部菜单栏"></cgc-model-list-item>
			</cgc-item-body>
			<view class="cgc-black cgc-m-b-30">反馈组件</view>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item @event="openPage('/pages/componentC/modal')" image="" title="Modal 模态框"></cgc-model-list-item>
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
