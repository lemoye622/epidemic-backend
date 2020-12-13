// 封装给前端的 body 响应
class BodyRes {
	constructor(ctx, msg='SUCCESS', data=[], code=200) {
	    this.ctx = ctx
		this.msg = msg
		this.data = data
		this.code = code;
	}
	
	// 以2开头的响应
	successRes() {
		this.ctx.body = {
			msg: this.msg,
			data: this.data
		}
		this.ctx.status = this.code
	}
	
	// 错误的响应
	errorRes(errorMsg, codes) {
		this.ctx.body = {
			msg: this.errorMsg
		}
		this.ctx.status = codes
	}
}

module.exports = BodyRes