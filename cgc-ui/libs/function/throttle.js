let _throttleRunning = false
/**
 * 节流
 * @param {Function} 执行函数
 * @param {Number} delay 延时ms  
 */
export default function throttle(fn, delay=500) {
	if(_throttleRunning){
		return;
	}
	_throttleRunning = true;
	fn();
	setTimeout(() => {
	    _throttleRunning = false;
	}, delay);
}