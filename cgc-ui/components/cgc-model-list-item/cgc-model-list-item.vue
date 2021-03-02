<template>
	<view class="cgc-flex cgc-row-between cgc-col-center" @click="event">
		<view class="cgc-flex cgc-col-center cgc-flex-8 cgc-min-w-0">
			<image :src="image" v-if="image" mode="aspectFill" class="cgc-border-color cgc-m-r-20 cgc-page-bg" :class="imageClass"></image>
			<view class="cgc-flex-1 cgc-col-center">
				<view class="cgc-single-line cgc-title-lg cgc-black-warm">
					{{title}}
				</view>
				<view v-if="subtitle" class="cgc-single-line cgc-title-xs cgc-black-dark cgc-m-t-16">
					{{subtitle}}
				</view>
			</view>
		</view>
		<view class="cgc-flex cgc-col-center cgc-flex-4 cgc-min-w-0 cgc-row-right">
			<view v-if="tipTitle" class="cgc-single-line cgc-flex-1 cgc-black-dark cgc-title-xs cgc-text-right">
				{{tipTitle}}
			</view>
			<image src="/static/cgc-ui/more-36.png" class="cgc-w-h-36 cgc-margin-left-30 cgc-margin-minus-right-15"></image>
		</view>
	</view>
</template>

<script>
	// 模块列表项
	export default {
		props:{
			/**
			 * 标题
			 */
			title: {
				type: String,
				default() {
					return ''
				}
			},
			/**
			 * 小标题
			 */
			subtitle: {
				type: String,
				default() {
					return ''
				}
			},
			/**
			 * 提示标题
			 */
			tipTitle: {
				type: String,
				default() {
					return ''
				}
			},
			/**
			 * 图标
			 */
			image: {
				type: String,
				default() {
					return ''
				}
			},
			/**
			 * 图标样式
			 */
			imageClass: {
				type: String,
				default() {
					return 'cgc-border-radius-large cgc-w-h-56'
				}
			}
		},
		data() {
			return {
				
			}
		},
		methods:{
			event() {
				this.$emit("event")
			}
		}
	}
</script>

<style>
</style>
