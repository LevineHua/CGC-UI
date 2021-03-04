let _debounceTimeout = null
/**
 * 防抖
 * @param {Function} 执行函数
 * @param {Number} delay 延时ms   
 */
export default function debounce(fn, delay=500) {
	clearTimeout(_debounceTimeout);
	_debounceTimeout = setTimeout(() => {
		fn();
	}, delay);
}