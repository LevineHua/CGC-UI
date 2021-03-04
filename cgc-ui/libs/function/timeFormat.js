/**
 * 格式化时间戳 Y-m-d H:i:s
 * @param {String} format Y-m-d H:i:s
 * @param {Number} timestamp 时间戳   
 * @return {String}
 */
export default function timeFormat(format, timeStamp) {
	// 其他更多是格式化有如下:
	// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
	timeStamp = parseInt(timeStamp);
	// 如果为null,则格式化当前时间
	if (!timeStamp) timeStamp = Number(new Date());
	// 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
	if (timeStamp.toString().length == 10) timeStamp *= 1000;
	let _date = new Date(timeStamp),
		Y = _date.getFullYear(),
		m = _date.getMonth() + 1,
		d = _date.getDate(),
		H = _date.getHours(),
		i = _date.getMinutes(),
		s = _date.getSeconds();
	
	m = m < 10 ? '0' + m : m;
	d = d < 10 ? '0' + d : d;
	H = H < 10 ? '0' + H : H;
	i = i < 10 ? '0' + i : i;
	s = s < 10 ? '0' + s : s;

	return format.replace(/[YmdHis]/g, key=>{
		return {Y,m,d,H,i,s}[key];
	});
}