import emitter from './libs/mixins/emitter.js'
const install = Vue => {
	Vue.mixin(emitter)
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
	
	let modelmes = system.model;
	if(modelmes.indexOf('iPhone X')>=0||modelmes.indexOf('iPhone XR')>=0||modelmes.indexOf('iPhone XS')>=0||modelmes.indexOf('iPhone 12')>=0||modelmes.indexOf('iPhone 11')>=0||modelmes.indexOf('iPhone11')>=0||modelmes.indexOf('iPhone12')>=0||modelmes.indexOf('iPhoneXR')>=0||modelmes.indexOf('iPhoneX')>=0){
		Vue.prototype.$is_bang = true
	}else{
		Vue.prototype.$is_bang = false
	}
}

export default {
	install
}