<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">模态框</block>
		</cgc-header>
		<view class="cgc-p-30">
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openModal('modal1')" title="系统对话框(双按钮/背景)"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openModal('modal2')" title="系统对话框(单按钮)"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openModal('modal3')" title="系统对话框(双按钮)"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openModal('modal4')" title="自定义对话框(单按钮)"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openModal('modal5')" title="自定义对话框(纯标题/长按钮)"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openModal('modal6')" title="大图对话框"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openModal('modal7')" title="输入对话框"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body className="cgc-m-b-30">
				<cgc-model-list-item @event="openModal('modal8')" title="禁用点击遮罩层关闭弹框"></cgc-model-list-item>
			</cgc-item-body>
		</view>
		
		<!-- 系统对话框 -->
		<cgc-modal 
			ref="modal1" 
			icon="/static/popup-tip.png" 
			title="温馨提示对话框" 
			subtitle="可选内容说明"
			modalBg="/static/cgc-ui/location-popup-bg.png"
		></cgc-modal>
		<cgc-modal
			ref="modal2" 
			icon="/static/popup-tip.png" 
			title="温馨提示对话框" 
			subtitle="可选内容说明"
			cancelBtn='我知道了'
			:confirmBtn='false'
		></cgc-modal>
		<!-- 自定义对话框 -->
		<cgc-modal
			ref="modal3" 
			type="self" 
			icon="https://jdc.jd.com/img/200"
			cancelBtn="标准按钮" 
			confirmBtn="强调按钮"
			confirmBtnTheme="main"
			title="大标题"
		>
			<text slot="subtitle" style="line-height: 1.5;">说明当前状态、提示用户解决方案，<br/>最好不要超过两行。</text>
		</cgc-modal>
		<cgc-modal
			ref="modal4" 
			type="self" 
			icon="https://jdc.jd.com/img/200"
			:cancelBtn="false" 
			confirmBtn="强调按钮"
			confirmBtnTheme="main"
			title="大标题"
		>
			<text slot="subtitle" style="line-height: 1.5;">说明当前状态、提示用户解决方案，<br/>最好不要超过两行。</text>
		</cgc-modal>
		<cgc-modal
			ref="modal5" 
			type="self" 
			icon="https://jdc.jd.com/img/200"
			:cancelBtn="false" 
			confirmBtn="强调按钮"
			confirmBtnTheme="main"
			title="纯标题"
			isLongBtn="true"
		>
		</cgc-modal>
		<!-- 大图对话框 -->
		<cgc-modal
			ref="modal6" 
			type="big" 
			icon="https://jdc.jd.com/img/320" 
			title="大标题"
			cancelBtn="标准按钮"
			confirmBtn="强调按钮"
			confirmBtnTheme="main"
			iconClass="cgc-border-radius-large"
			:showClose="true"
		>
			<text slot="subtitle" class="cgc-line-height cgc-m-t-20" style="display: block;">说明当前状态、提示用户解决方案，<br/>最好不要超过两行。</text>
		</cgc-modal>
		<!-- 输入对话框 -->
		<cgc-modal
			ref="modal7" 
			type="input" 
			title="大标题"
			subtitle="可选内容说明"
		>
		</cgc-modal>
		
		<cgc-modal
			ref="modal8" 
			icon="/static/popup-tip.png" 
			title="温馨提示对话框" 
			subtitle="可选内容说明"
			modalBg="/static/cgc-ui/location-popup-bg.png"
			:maskClick="false"
		></cgc-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {
			openModal(ref) {
				this.$nextTick(() => {
					this.$refs[ref].open()
				})
			}
		}
	}
</script>

<style>

</style>
