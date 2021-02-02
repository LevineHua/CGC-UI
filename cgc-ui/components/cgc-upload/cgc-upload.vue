<template>
	<view class="cgc-upload" v-if="!disabled">
		<view 
			class="cgc-list-item cgc-flex cgc-row-center cgc-border-radius-small"
			v-if="showAddBtn"
			:style="{
				width: width + 'rpx',
				height: height + 'rpx',
				borderRadius: addBtnBorderRadius + 'rpx'
			}"
			@tap="chooseUploadType"
		>
			<slot name="addBtn"></slot>
			<image v-if="!$slots.addBtn" class="cgc-upload__icon" src="/static/cgc-ui/upload-icon.png"></image>
		</view>
		<slot name="file" :file="lists"></slot>
		<view
			class="cgc-list-item cgc-border-radius-small cgc-rela"
			:style="{
				width: width + 'rpx',
				height: height + 'rpx'
			}"
			v-for="(item, index) in lists"
			:key="index"
			v-if="showUploadList"
		>
			<image 
				src="/static/cgc-ui/delete-icon.png" 
				class="cgc-w-h-36 cgc-abso cgc-upload__remove"
				v-if="deletable"
				@tap.stop="deleteItem(index)"
			></image>
			<image 
				class="cgc-w-cover cgc-h-cover cgc-border-radius-small" 
				:src="item.url || item.path" 
				:mode="imageMode"
				v-if="!item.isImage"
				@tap.stop="doPreviewImage(item.url || item.path, index)"
			></image>
			<view @tap.stop="retry(index)" v-if="item.error" class="cgc-error-btn">点击重试</view>
			<!-- 进度条 -->
			<cgc-line-progress
				v-if="showProgress && item.progress > 0 && !item.error"
				class="cgc-line-progress" 
				:percent="item.progress"
			></cgc-line-progress>
		</view>
		<cgc-choose-upload-type ref="chooseUploadType" @selectFile="selecctFile"></cgc-choose-upload-type>
	</view>
</template>

<script>
	export default{
		name:'cgc-upload',
		props:{
			/**
			 * 显示上传按钮
			 */
			showAddBtn: {
				type: Boolean,
				default: true
			},
			//是否显示组件自带的图片预览功能
			showUploadList: {
				type: Boolean,
				default: true
			},
			// 后端地址
			action: {
				type: String,
				default: ''
			},
			// 预览上传的图片时的裁剪模式，和image组件mode属性一致
			imageMode: {
				type: String,
				default: 'aspectFill'
			},
			//  是否显示进度条
			showProgress: {
				type: Boolean,
				default: true
			},
			// 是否启用
			disabled: {
				type: Boolean,
				default: false
			},
			// 内部预览图片区域和选择图片按钮的区域宽度
			width: {
				type: [String, Number],
				default: 196
			},
			// 内部预览图片区域和选择图片按钮的区域高度
			height: {
				type: [String, Number],
				default: 196
			},
			/**
			 * 上传按钮圆角
			 */
			addBtnBorderRadius: {
				type: [String, Number],
				default: 10
			},
			// 图片来源
			sourceType: {
				type: Array,
				default() {
					return ['album', 'camera']
				}
			},
			// 头部信息
			header: {
				type: Object,
				default() {
					return {};
				}
			},
			// 额外携带的参数
			formData: {
				type: Object,
				default() {
					return {};
				}
			},
			// 上传的文件字段名
			name: {
				type: String,
				default: 'file'
			},
			// 所选的图片的尺寸, 可选值为original compressed
			sizeType: {
				type: Array,
				default() {
					return ['original', 'compressed'];
				}
			},
			// 最大上传数量
			maxCount: {
				type: [String, Number],
				default: 52
			},
			// 是否在点击预览图后展示全屏图片预览
			previewFullImage: {
				type: Boolean,
				default: true
			},
			// 是否开启图片多选，部分安卓机型不支持
			multiple: {
				type: Boolean,
				default: true
			},
			// 是否展示删除按钮
			deletable: {
				type: Boolean,
				default: true
			},
			// 文件大小限制，单位为byte
			maxSize: {
				type: [String, Number],
				default: Number.MAX_VALUE
			},
			// 显示已上传的文件列表
			fileList: {
				type: Array,
				default() {
					return [];
				}
			},
			// 允许上传的图片后缀
			limitType:{
				type: Array,
				default() {
					return ['png', 'jpg', 'jpeg', 'webp', 'gif'];
				}
			},
			// 是否自动上传
			autoUpload: {
				type: Boolean,
				default: false
			},
			// 上传前的钩子，每个文件上传前都会执行
			beforeUpload: {
				type: Function,
				default: null
			},
			/**
			 * 是否覆盖已上传的图片（适用于头像上传）
			 */
			coverImage: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				lists: [],
				uploading: false
			}
		},
		watch: {
			fileList: {
				immediate: true,
				handler(val) {
					val.map(value => {
						// 首先检查内部是否已经添加过这张图片，因为外部绑定了一个对象给fileList的话(对象引用)，进行修改外部fileList
						// 时，会触发watch，导致重新把原来的图片再次添加到this.lists
						// 数组的some方法意思是，只要数组元素有任意一个元素条件符合，就返回true，而另一个数组的every方法的意思是数组所有元素都符合条件才返回true
						let tmp = this.lists.some(val => {
							return val.url == value.url;
						})
						// 如果内部没有这个图片(tmp为false)，则添加到内部
						!tmp && this.lists.push({ url: value.url, error: false, progress: 100 });
					});
				}
			},
			// 监听lists的变化，发出事件
			lists(n) {
				this.$emit('on-list-change', n);
			}
		},
		methods:{
			/**
			 * 先选择图片来源
			 */
			chooseUploadType() {
				if(this.sourceType.length==0 || this.disabled) return
				if(this.sourceType.length==2) {
					this.$nextTick(() => {
						this.$refs.chooseUploadType.open()
					})
				} else {
					this.selecctFile(this.sourceType)
				}
			},
			/**
			 * 选择图片
			 * @param {Object} sourceType
			 */
			selecctFile(sourceType) {
				const { name = '', maxCount, multiple, maxSize, sizeType, lists } = this;
				let chooseFile = null
				const newMaxCount = maxCount - lists.length;
				// 设置为只选择图片的时候使用chooseImage来实现
				chooseFile = new Promise((resolve, reject) => {
					uni.chooseImage({
						count: multiple ? (newMaxCount > 9 ? 9 : newMaxCount) : 1,
						sourceType: sourceType,
						sizeType,
						success: resolve,
						fail: reject
					})
				})
				chooseFile.then(res => {
					let file = null;
					let listOldLength = this.lists.length;
					res.tempFiles.map((val, index) => {
						// 检查文件后缀是否允许，如果不在this.limitType内，就会返回false
						if(!this.checkFileExt(val)) return;
						// 如果是非多选，index大于等于1或者超出最大限制数量时，不处理
						if(!multiple && index >= 1) return;
						if(val.size > maxSize) {
							this.$emit('on-oversize', val, this.lists);
							uni.showToast({
								title:'超出允许的文件大小',
								icon:'none'
							})
						} else {
							if(maxCount <= lists.length && !this.coverImage) {
								this.$emit('on-exceed', val, this.lists);
								uni.showToast({
									title:'超出最大允许的文件个数',
									icon:'none'
								})
								return;
							}
							if(this.coverImage) {
								this.lists = [{
									url: val.path,
									progress: 0,
									error: false
								}]
							} else {
								lists.push({
									url: val.path,
									progress: 0,
									error: false
								})
							}
						}
					})
					// 每次图片选择完，抛出一个事件，并将当前内部选择的图片数组抛出去
					this.$emit('on-choose-complete', this.lists);
					if (this.autoUpload) this.uploadFile(listOldLength);
				}).catch((error) => {
					
				})
			},
			/**
			 * 该方法供用户通过ref调用，手动上传
			 */
			upload() {
				this.uploadFile();
			},
			/**
			 * 对失败的图片重新上传
			 * @param {Object} index
			 */
			retry(index) {
				this.lists[index].progress = 0;
				this.lists[index].error = false;
				this.lists[index].response = null;
				uni.showLoading({
					title: '重新上传'
				})
				this.uploadFile(index);
			},
			/**
			 * 上传图片
			 */
			async uploadFile(index = 0) {
				if(this.disabled || this.uploading) return
				// 全部上传完成
				if(index >= this.lists.length) {
					this.$emit('on-uploaded', this.lists);
					return;
				}
				// 检查上传地址
				if(!this.action) {
					uni.showToast({
						title:'请配置上传地址',
						icon:'none'
					})
					return
				}
				// 检查是否时已上传或者正在上传中
				if(this.lists[index].progress == 100) {
					if(this.autoUpload == false) {
						this.uploadFile(index + 1);
					}
					return
				}
				// 执行before-upload钩子
				if(this.beforeUpload && typeof(this.beforeUpload) === 'function') {
					// 执行回调，同时传入索引和文件列表当作参数
					let beforeResponse = this.beforeUpload(index, this.lists);
					// 判断是否返回了promise
					if(!!beforeResponse && typeof beforeResponse.then === 'function') {
						await beforeResponse.then(res => {
							// promise返回成功，不进行动作，继续上传
						}).catch(err => {
							// 进入catch回调的话，继续下一张
							return this.uploadFile(index + 1)
						})
					} else if(beforeResponse === false) {
						// 如果返回false， 继续下一张图片的上传
						return this.uploadFile(index + 1)
					}
				}
				this.lists[index].error = false;
				this.uploading = true;
				// 创建上传对象（以下代码按需使用）
				const task = uni.uploadFile({
					url: this.action,
					filePath: this.lists[index].url,
					name: this.name,
					formData: this.formData,
					header: this.header,
					success: res => {
						// // 判断是否json字符串，将其转为json格式
						// let data = this.toJson && this.$u.test.jsonString(res.data) ? JSON.parse(res.data) : res.data;
						let data = res.data
						if (![200, 201].includes(res.statusCode)) {
							this.uploadError(index, data);
						} else {
							// 上传成功
							this.lists[index].response = data;
							this.lists[index].progress = 100;
							this.lists[index].error = false;
							this.$emit('on-success', data, index, this.lists);
						}
					},
					fail: e => {
						this.uploadError(index, e);
					},
					complete: res => {
						uni.hideLoading();
						this.uploading = false;
						this.uploadFile(index + 1);
						this.$emit('on-change', res, index, this.lists);
					}
				})
				task.onProgressUpdate(res => {
					if(res.progress > 0) {
						this.lists[index].progress = res.progress;
						this.$emit("on-progress", res, index, this.lists)
					}
				})
			},
			/**
			 * 上传失败
			 * @param {Object} index
			 * @param {Object} err
			 */
			uploadError(index, err) {
				this.lists[index].progress = 0;
				this.lists[index].error = true;
				this.lists[index].response = null;
				this.$emit('on-error', err, index, this.lists);
				uni.showToast({
					title:'上传失败，请重试',
					icon:'none'
				})
			},
			/**
			 * 删除一个图片
			 * @param {Object} index
			 */
			deleteItem(index) {
				if (this.lists[index].process < 100 && this.lists[index].process > 0) {
					typeof this.lists[index].uploadTask != 'undefined' && this.lists[index].uploadTask.abort();
				}
				this.lists.splice(index, 1);
				this.$forceUpdate();
				this.$emit('on-remove', index, this.lists);
			},
			/**
			 * 预览图片
			 * @param {Object} url
			 * @param {Object} index
			 */
			doPreviewImage(url, index) {
				if(!this.previewFullImage) return;
				const images = this.lists.map(item => item.url || item.path);
				uni.previewImage({
					urls: images,
					current: url,
					success: () => {
						this.$emit('on-preview', url, this.lists);
					},
					fail: () => {
						uni.showToast({
							title: '预览图片失败',
							icon: 'none'
						})
					}
				})
			},
			/**
			 * 判断文件后缀是否允许
			 * @param {Object} file
			 */
			checkFileExt(file) {
				// 检查是否在允许的后缀中
				let noArrowExt = false;
				// 获取后缀名
				let fileExt = '';
				const reg = /.+\./;
				// 如果是h5，需要从name中判断
				// #ifdef H5
				fileExt = file.name.replace(reg, "").toLowerCase();
				// #endif
				// 非h5时，需要从path中读取后缀
				// #ifndef H5
				fileExt = file.path.replace(reg, "").toLowerCase();
				// #endif
				// 使用数组的some方法，只要符合limitType中的一个，就返回true
				noArrowExt = this.limitType.some(ext => {
					// 转为小写
					return ext.toLowerCase() === fileExt;
				})
				if(!noArrowExt) {
					uni.showToast({
						title:`不允许选择${fileExt}格式的文件`,
						icon:'none'
					})
				}
				return noArrowExt
			},
			progressStyle(percent) {
				let style = {};
				style.width = percent + '%';
				return style;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cgc-upload{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		&__icon{
			width: 56rpx;
			height: 56rpx;
		}
		&__remove{
			top: 0;
			right: 0;
			transform: translate(50%, -50%);
			z-index: 2;
		}
		.cgc-list-item{
			width: 196rpx;
			height: 196rpx;
			background: #fff;
			border: 0.5px solid #DEDEDE;
			margin: 10rpx;
		}
		.cgc-error-btn{
			color: #ffffff;
			background-color: #FF5B4C;
			font-size: 20rpx;
			padding: 4px 0;
			text-align: center;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 9;
		}
	}
	.cgc-line-progress{
		position: absolute;
		bottom: 10rpx;
		left: 8rpx;
		right: 8rpx;
		z-index: 9;
		width: auto;
	}
</style>
