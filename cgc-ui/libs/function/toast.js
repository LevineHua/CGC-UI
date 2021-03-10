function toast(title = '', param={}) {
	setTimeout(function(){
		uni.showToast({
			title,
			duration: param.duration || 1500,
			mask: param.mask || false,
			icon: param.icon || 'none'
		})
	},10);
}

export default toast
