// 自定义全局异常处理中间件
const result = require('./resultData.js')

let abnormal = async(ctx, next) => {
	try{
		await next()
	}catch(e){
		const isResult = e instanceof result
		if (isResult) {
			console.log('已知错误')
			ctx.body = {
				msg: e.msg
			}
			ctx.status = e.code
		} else {
			console.log('未知错误')
			console.log(e)
			ctx.body = {
				msg: '服务器发生错误'
			}
			ctx.status = 500
		}
	}
}

module.exports = abnormal