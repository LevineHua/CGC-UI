<template>
	<view class="cgc-page cgc-page-bg">
		<cgc-header :isFixed="false" bgColor="white">
			<block slot="content">模块列表</block>
		</cgc-header>
		<view class="cgc-p-30">
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item image="" title="短标题" tipTitle="辅助文字24px"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item image="" title="短标题" subtitle="辅助文字段落24px" tipTitle=""></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item tipTitle="" title="短标题"></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item image="https://jdc.jd.com/img/88" imageClass="cgc-border-radius-small cgc-w-h-88" title="短标题" subtitle="辅助文字段落24px" tipTitle=""></cgc-model-list-item>
			</cgc-item-body>
			<cgc-item-body class="cgc-m-b-30">
				<cgc-model-list-item image="https://jdc.jd.com/img/144" imageClass="cgc-border-radius-small cgc-w-h-144" title="短标题" subtitle="辅助文字段落24px" tipTitle=""></cgc-model-list-item>
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
			
		}
	}
</script>

<style>

</style>
