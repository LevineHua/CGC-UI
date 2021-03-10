import emitter from './libs/mixins/emitter.js'
import mixin from './libs/mixins/mixin.js'
// function
// 获取父组件
import $parent from './libs/function/$parent.js'
// 校验
import test from './libs/function/test.js'
// 防抖
import debounce from './libs/function/debounce.js'
// 节流
import throttle from './libs/function/throttle.js'
// 时间格式化
import timeFormat from './libs/function/timeFormat.js'
// 全局唯一标识符
import guid from './libs/function/guid.js'
// 全局唯一标识符
import toast from './libs/function/toast.js'

const $cgc = {
	$parent,
	test,
	debounce,
	throttle,
	timeFormat,
	date: timeFormat,	// 别名
	guid,
	toast,
}

const install = Vue => {
	Vue.mixin(emitter)
	Vue.mixin(mixin)
	
	/**
	 * 全局过滤器
	 */
	Vue.filter('timeFormat', (timestamp, format='Y-m-d H:i') => {
		return timeFormat(format, timestamp)
	})
	Vue.filter('date', (timestamp, format='Y-m-d H:i') => {
		return timeFormat(format, timestamp)
	})
	
	/**
	 * 获取header公共参数
	 */
	let system = uni.getSystemInfoSync()
	let isAndroid, CustomBar, StatusBar;
	if (system.platform == 'android') {
		isAndroid = true;
	} else {
		isAndroid = false;
	};
	// console.log(system)
	// #ifndef MP
	StatusBar = system.statusBarHeight;
	if (system.platform == 'android') {
		CustomBar = system.statusBarHeight + 50;
	} else {
		CustomBar = system.statusBarHeight + 45;
	};
	// #endif
	
	// #ifdef MP-WEIXIN
	StatusBar = system.statusBarHeight;
	let custom = wx.getMenuButtonBoundingClientRect();
	CustomBar = custom.bottom + custom.top - system.statusBarHeight;
	// #endif		
	
	// #ifdef MP-ALIPAY
	StatusBar = system.statusBarHeight;
	CustomBar = system.statusBarHeight + system.titleBarHeight;
	// #endif
	
	$cgc['isAndroid'] = isAndroid
	$cgc['CustomBar'] = CustomBar
	$cgc['StatusBar'] = StatusBar
	$cgc['system'] = system
	
	Vue.prototype.$cgc = $cgc
}

export default {
	install
}