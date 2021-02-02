<template>
	<button 
		class="cgc-button cgc-border-radius-large"
		:class="[
			'cgc-type--'+type,
			type !== 'icon' ? ('cgc-size--'+size) : '',
			disabled ? `cgc-type--${type}--disabled` : ''
		]"
		:disabled="disabled"
		:form-type="formType"
		:open-type="openType"
		:app-parameter="appParameter"
		:hover-stop-propagation="hoverStopPropagation"
		:send-message-title="sendMessageTitle"
		send-message-path="sendMessagePath"
		:lang="lang"
		:data-name="dataName"
		:session-from="sessionFrom"
		:send-message-img="sendMessageImg"
		:show-message-card="showMessageCard"
		@getphonenumber="getphonenumber"
		@getuserinfo="getuserinfo"
		@error="error"
		@opensetting="opensetting"
		@launchapp="launchapp"
		:style="[customStyle]"
		@tap.stop="click($event)"
	>	
		<template v-if="type=='icon'">
			<image :src="icon" mode="aspectFill"></image>
		</template>
		<template v-else>
			<view class="cgc-flex">
				<image v-if="icon" :src="icon" mode="aspectFill"></image>
				<slot></slot>
			</view>
		</template>
		<view class="cgc-m-t-10 cgc-title-xs" v-if="subText">{{subText}}</view>
	</button>
</template>

<script>
	export default {
		props:{
			/**
			 * 按钮类型
			 *  - 主按钮-强：main
			 *  - 次按钮-中：primary
			 * 	- 判断按钮：judge
			 *  - 文字按钮-弱：text
			 *  - 图标按钮：icon
			 *  - 灰色按钮：gray
			 */
			type: {
				default: () => {
					return 'primary'
				}
			},
			/**
			 * 按钮尺寸
			 *  - 标签：tag（40）
			 *  - 超小型：superSmall（48）
			 * 	- 小型： mini（56）
			 *  - 辅助：auxiliary（64）
			 *  - 中型：medium（72）
			 *  - 标准：default（80）
			 *  - 大型：big（100）
			 */
			size: {
				default: () => {
					return 'default'
				}
			},
			/**
			 * 辅助文字
			 */
			subText: {
				default: () => {
					return ''
				}
			},
			/**
			 * 是否禁用
			 */
			disabled: {
				default: () => {
					return false
				}
			},
			/**
			 * 图标路径
			 */
			icon: {
				default: () => {
					return ''
				}
			},
			// 开放能力，具体请看uniapp稳定关于button组件部分说明
			// https://uniapp.dcloud.io/component/button
			openType: {
				type: String,
				default: ''
			},
			// 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
			// 取值为submit（提交表单），reset（重置表单）
			formType: {
				type: String,
				default: ''
			},
			// 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
			// 只微信小程序、QQ小程序有效
			appParameter: {
				type: String,
				default: ''
			},
			// 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
			hoverStopPropagation: {
				type: Boolean,
				default: false
			},
			// 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效
			lang: {
				type: String,
				default: 'en'
			},
			// 会话来源，open-type="contact"时有效。只微信小程序有效
			sessionFrom: {
				type: String,
				default: ''
			},
			// 会话内消息卡片标题，open-type="contact"时有效
			// 默认当前标题，只微信小程序有效
			sendMessageTitle: {
				type: String,
				default: ''
			},
			// 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
			// 默认当前分享路径，只微信小程序有效
			sendMessagePath: {
				type: String,
				default: ''
			},
			// 会话内消息卡片图片，open-type="contact"时有效
			// 默认当前页面截图，只微信小程序有效
			sendMessageImg: {
				type: String,
				default: ''
			},
			// 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
			// 用户点击后可以快速发送小程序消息，open-type="contact"时有效
			showMessageCard: {
				type: Boolean,
				default: false
			},
			// 自定义样式，对象形式
			customStyle: {
				type: Object,
				default() {
					return {};
				}
			},
			// 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
			dataName: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				
			}
		},
		methods:{
			/**
			 * 按钮单击
			 * @param {Object} e
			 */
			click(e) {
				this.$emit('click', e);
			},
			// 下面为对接uniapp官方按钮开放能力事件回调的对接
			getphonenumber(res) {
				this.$emit('getphonenumber', res);
			},
			getuserinfo(res) {
				this.$emit('getuserinfo', res);
			},
			error(res) {
				this.$emit('error', res);
			},
			opensetting(res) {
				this.$emit('opensetting', res);
			},
			launchapp(res) {
				this.$emit('launchapp', res);
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../theme.scss';
	.cgc-button{
		border: none;
		position: relative;
		border: 0;
		display: inline-block;
		overflow: hidden;
		line-height: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		z-index: 1;
		box-sizing: border-box;
		transition: all 0.15s;
		margin: 0;
		padding: 0;
		&::after{
			display: none;
		}
	}
	.cgc-type{
		&--main {
			background: $cgc-linear-gradient-yellow!important;
			color: #A35900!important;
		}
		&--primary {
			background: $cgc-white!important;
			color: $cgc-black!important;
			border: solid 0.5px $cgc-border-color!important;
		}
		&--judge {
			background: $cgc-primary-light!important;
			color: #FFB172!important;
			border: solid 0.5px #FFB172!important;
		}
		&--text {
			color: #636D8F!important;
			background: none!important;
		}
		&--icon {
			background: $cgc-white!important;
			width: 64rpx;
			height: 64rpx;
			border: solid 0.5px $cgc-border-color!important;
			image{
				width: 100%;
				height: 100%;
			}
		}
		&--gray {
			color: $cgc-black!important;
			background: $cgc-default-bg!important;
			border: solid 0.5px $cgc-border-color;
		}
		&--main--disabled {
			&::before{
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: rgba(255,255,255,0.6);
			}
		}
		&--primary--disabled {
			background: $cgc-border-color!important;
			color: $cgc-white!important;
		}
		&--text--disabled {
			color: #E1E7ED!important;
		}
	}
	/**
	 * 按钮尺寸
	 *  - 标签：tag
	 *  - 超小型：superSmall
	 * 	- 小型： mini
	 *  - 辅助：auxiliary
	 *  - 中型：medium
	 *  - 标准：default
	 *  - 大型：big
	 */
	.cgc-size {
		font-weight: 500;
		&--tag{
			height: 40rpx;
			font-size: 22rpx;
			padding: 0 20rpx;
			min-width: 84rpx;
			image{
				width: 24rpx;
				height: 24rpx;
				margin-right: 10rpx;
			}
		}
		&--superSmall{
			height: 48rpx;
			font-size: 24rpx;
			padding: 0 20rpx;
			min-width: 88rpx;
			image{
				width: 36rpx;
				height: 36rpx;
				margin-right: 10rpx;
			}
		}
		&--mini{
			height: 56rpx;
			font-size: 26rpx;
			padding: 0 20rpx;
			min-width: 92rpx;
			image{
				width: 36rpx;
				height: 36rpx;
				margin-right: 10rpx;
			}
		}
		&--auxiliary{
			height: 64rpx;
			font-size: 28rpx;
			padding: 0 30rpx;
			min-width: 172rpx;
			image{
				width: 36rpx;
				height: 36rpx;
				margin-right: 10rpx;
			}
		}
		&--medium{
			height: 72rpx;
			font-size: 30rpx;
			padding: 0 30rpx;
			min-width: 275rpx;
			image{
				width: 48rpx;
				height: 48rpx;
				margin-right: 20rpx;
			}
		}
		&--default{
			height: 80rpx;
			font-size: 32rpx;
			padding: 0 30rpx;
			min-width: 275rpx;
			image{
				width: 48rpx;
				height: 48rpx;
				margin-right: 20rpx;
			}
		}
		&--big{
			height: 100rpx;
			font-size: 36rpx;
			width: 100%;
			padding: 0 30rpx;
			min-width: 560rpx;
			image{
				width: 48rpx;
				height: 48rpx;
				margin-right: 20rpx;
			}
		}
	}
</style>
