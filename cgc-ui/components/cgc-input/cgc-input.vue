<template>
	<view class="cgc-input cgc-flex">
		<template v-if="inputType==='textarea'">
			<textarea 
				class="cgc-black cgc-title-lg cgc-flex-1"
				:value="value" 
				:placeholder="placeholder" 
				:placeholder-class="placeholderClass"
				:placeholder-style="inputPlaceholderStyle"
				:disabled="disabled"
				:maxlength="maxlength"
				:focus="focus"
				:confirm-type="confirmType"
				:auto-height="autoHeight"
				:fixed="fixed"
				:cursor-spacing="cursorSpacing"
				:cursor="cursor"
				:show-confirm-bar="showConfirmBar"
				:selection-start="selectionStart"
				:selection-end="selectionEnd"
				:adjust-position="adjustPosition"
				:hold-keyboard="holdKeyboard"
				:disable-default-padding="disableDefaultPadding"
				:auto-blur="autoBlur"
				v-bind="$attrs"
				:style="inputStyle"
				@input="input"
				@linechange="linechange"
				@focus="focusEvent"
				@blur="blur"
				@confirm="confirm"
				@keyboardheightchange="keyboardheightchange"
			/>
		</template>
		<template v-else>
			<input
				class="cgc-black cgc-title-lg cgc-flex-1"
				:value="value"
				:type="type" 
				:password="password"
				:placeholder="placeholder"
				:placeholder-class="placeholderClass"
				:placeholder-style="inputPlaceholderStyle"
				:disabled="disabled || inputType==='select'"
				:maxlength="maxlength"
				:cursor-spacing="cursorSpacing"
				:focus="focus"
				:confirm-type="confirmType"
				:confirm-hold="confirmHold"
				:cursor="cursor"
				:selection-start="selectionStart"
				:selection-end="selectionEnd"
				:adjust-position="adjustPosition"
				:hold-keyboard="holdKeyboard"
				:auto-blur="autoBlur"
				v-bind="$attrs"
				:style="inputStyle"
				@input="input"
				@focus="focusEvent"
				@blur="blur"
				@confirm="confirm"
				@keyboardheightchange="keyboardheightchange"
			/>
			<view :style="[{padding: paddingStyle}]">
				<template v-if="inputType==='select'">
					<image src="/static/cgc-ui/light-more-36.png" v-if="disabled" class="cgc-w-h-36"></image>
					<image src="/static/cgc-ui/more-36.png" v-else class="cgc-w-h-36"></image>
				</template>
				<template v-else>
					<template v-if="showClear">
						<image src="/static/cgc-ui/close-modal-icon.png" @click="clear" class="cgc-w-h-36"></image>
					</template>
				</template>
			</view>
		</template>
	</view>
</template>

<script>
	export default{
		// 设置禁用继承特性
		inheritAttrs: false,
		inject:['formItem'],
		props:{
			/**
			 * 是否可清除
			 */
			clearable: {
				type: Boolean,
				default() {
					return true
				}
			},
			/**
			 * 输入框类型
			 *  - input：输入框
			 *  - textarea：文本框
			 *  - select：选择框
			 */
			inputType: {
				type: String,
				default() {
					return 'input'
				}
			},
			// 以下属性参考uniapp官方文档
			value: {
				type: [String, Number],
				default() {
					return ''
				}
			},
			type: {
				type: String,
				default() {
					return 'text'
				}
			},
			password: {
				type: Boolean,
				default() {
					return false
				}
			},
			placeholder: {
				type: String,
				default() {
					return ''
				}
			},
			placeholderStyle: {
				type: String,
				default() {
					return ''
				}
			},
			placeholderClass: {
				type: String,
				default() {
					return 'cgc-black-dark'
				}
			},
			disabled: {
				type: Boolean,
				default() {
					return false
				}
			},
			maxlength: {
				type: Number,
				default() {
					return 140
				}
			},
			cursorSpacing: {
				type: Number,
				default() {
					return 0
				}
			},
			focus: {
				type: Boolean,
				default() {
					return false
				}
			},
			confirmType: {
				type: String,
				default() {
					return 'done'
				}
			},
			autoHeight: {
				type: Boolean,
				default() {
					return false
				}
			},
			fixed: {
				type: Boolean,
				default() {
					return false
				}
			},
			confirmHold: {
				type: Boolean,
				default() {
					return false
				}
			},
			cursor: {
				type: Number,
				default() {
					return 0
				}
			},
			showConfirmBar: {
				type: Boolean,
				default() {
					return true
				}
			},
			selectionStart: {
				type: Number,
				default() {
					return -1
				}
			},
			selectionEnd: {
				type: Number,
				default() {
					return -1
				}
			},
			adjustPosition: {
				type: Boolean,
				default() {
					return true
				}
			},
			holdKeyboard: {
				type: Boolean,
				default() {
					return false
				}
			},
			disableDefaultPadding: {
				type: Boolean,
				default() {
					return false
				}
			},
			autoBlur: {
				type: Boolean,
				default() {
					return false
				}
			},
		},
		data() {
			return {
				// 是否获得焦点
				focused: false,
				// 是否异常
				error: false,
			}
		},
		computed:{
			paddingStyle() {
				if(this.clearable || this.inputType=='select') {
					return '0 16rpx'
				} else {
					return '0 30rpx 0 0'
				}
			},
			/**
			 * 是否显示清除按钮
			 */
			showClear() {
				return this.clearable && this.value && this.focused
			},
			/**
			 * 输入框输入了内容时的样式
			 */
			inputStyle() {
				if(this.error && !this.focused) {
					return 'color: #FD664C'
				} else {
					return 'color: #202123'
				}
			},
			/**
			 * 输入框无输入内容时的样式
			 */
			inputPlaceholderStyle() {
				if(this.disabled) {
					return 'color:#E1E7ED;'+this.placeholderStyle
				} else {
					return this.placeholderStyle
				}
			}
		},
		watch:{
			// 监听异常
			"formItem.error"(val) {
				console.log(val)
				if(val) {
					this.error = true
				} else {
					this.error = false
				}
			}
		},
		methods:{
			/**
			 * 清空数据
			 */
			clear() {
				this.$emit('input', '')
			},
			linechange(e) {
				this.$emit('linechange', e)
			},
			input(e) {
				this.$emit("input", e.detail.value)
			},
			focusEvent(e) {
				this.focused = true
				this.$emit("focus", e)
			},
			blur(e) {
				setTimeout(() => {
					this.focused = false
				})
				this.$emit("blur", e)
				this.dispatch('cgcFormItem', 'cgc.form.blur', [this.value])
			},
			confirm(e) {
				this.$emit("confirm", e)
			},
			keyboardheightchange(e) {
				this.$emit("keyboardheightchange", e)
			}
		}
	}
</script>

<style>
</style>
