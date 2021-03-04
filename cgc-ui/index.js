import emitter from './libs/mixins/emitter.js'

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

const $cgc = {
	$parent,
	test,
	debounce,
	throttle,
	timeFormat,
	date: timeFormat,	// 别名
}

const install = Vue => {
	Vue.mixin(emitter)
	
	/**
	 * 全局过滤器
	 */
	Vue.filter('timeFormat', (timestamp, format='Y-m-d H:i') => {
		return timeFormat(format, timestamp)
	})
	Vue.filter('date', (timestamp, format='Y-m-d H:i') => {
		return timeFormat(format, timestamp)
	})
	
	Vue.prototype.$cgc = $cgc
	
	/**
	 * 获取header公共参数
	 */
	let system = uni.getSystemInfoSync()
	if (system.platform == 'android') {
		Vue.prototype.isAndroid = true;
	} else {
		Vue.prototype.isAndroid = false;
	};
	Vue.prototype.system = system
	console.log(system)
	// #ifndef MP
	Vue.prototype.StatusBar = system.statusBarHeight;
	if (system.platform == 'android') {
		Vue.prototype.CustomBar = system.statusBarHeight + 50;
	} else {
		Vue.prototype.CustomBar = system.statusBarHeight + 45;
	};
	// #endif
	
	// #ifdef MP-WEIXIN
	Vue.prototype.StatusBar = system.statusBarHeight;
	let custom = wx.getMenuButtonBoundingClientRect();
	Vue.prototype.Custom = custom;
	Vue.prototype.CustomBar = custom.bottom + custom.top - system.statusBarHeight;
	// #endif		
	
	// #ifdef MP-ALIPAY
	Vue.prototype.StatusBar = system.statusBarHeight;
	Vue.prototype.CustomBar = system.statusBarHeight + system.titleBarHeight;
	// #endif
	
	// #ifdef APP-PLUS
	Vue.prototype.systemName = plus.os.name
	// #endif
	
	let modelmes = system.model || '';
	if(modelmes.indexOf('iPhone X')>=0||modelmes.indexOf('iPhone XR')>=0||modelmes.indexOf('iPhone XS')>=0||modelmes.indexOf('iPhone 12')>=0||modelmes.indexOf('iPhone 11')>=0||modelmes.indexOf('iPhone11')>=0||modelmes.indexOf('iPhone12')>=0||modelmes.indexOf('iPhoneXR')>=0||modelmes.indexOf('iPhoneX')>=0){
		Vue.prototype.$is_bang = true
	}else{
		Vue.prototype.$is_bang = false
	}
}

export default {
	install
}