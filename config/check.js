// 参数检验

// 空校验
// 数字类型校验
// undefined校验
// 空格校验
// 手机号码
// 密码
// 图片未上传校验
const result = require('./resultData.js')

class Check {
	constructor(ctx, body) {
		this.ctx = ctx
		this.obj = body
	}
	
	// 检验前端开发者参数错误，为underfind
	Errunder() {
		let bvc = this.obj.indexOf(undefined)
		if(bvc != -1){
			throw new result('参数填写错误', 400)
		}
	}
	
	// 校验用户填写为空
	Parameter(list) {
		let bvc = this.obj.indexOf('')
		if(bvc != -1){
			throw new result(list[bvc], 202)
		}
	}
	
	// 校验空格符号
	Blank(list) {
		let vbn = this.obj.filter(item=>{
			return item.split(" ").join("").length === 0
		})
		let bvc = this.obj.indexOf(vbn[0])
		if(bvc != -1){
			throw new result(list[bvc], 202)
		}
	}
	
	// 校验图片未上传
	Checimg() {
		if(this.ctx.req.file === undefined){
			throw new result('请上传图片', 202)
		}
	}
	
	// 校验参数为数字类型
	Checnumber(list) {
		var numbering = this.obj
		let vbn = numbering.filter(item=>{
			return isNaN(item)
		})
		let bvc = numbering.indexOf(vbn[0])
		if(bvc != -1){
			throw new result(list[bvc], 202)
		}
	}
	
	// 校验手机号码
	Phone(mobile) {
		let phone = /^1[3456789]\d{9}$/
		if(!phone.test(this.obj[0])){
			throw new result(mobile, 202)
		}
	}
	
	// 密码验证：6-20位数字和字母的组合
	Password(pass) {
		let reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/
		if(!reg.test(this.obj[1])){
			throw new result(pass, 202)
		}
	}
	
}

// 确诊 || 治愈 || 死亡
class NewlyIncreased extends Check {
	increasedFun(type){
		// 为空
		let arr = `["请填写境外${type}人数","请填写广州${type}人数",
				  "请填写韶关${type}人数","请填写深圳${type}人数",
				  "请填写珠海${type}人数","请填写汕头${type}人数",
				  "请填写佛山${type}人数","请填写江门${type}人数",
				  "请填写湛江${type}人数","请填写茂名${type}人数",
				  "请填写肇庆${type}人数","请填写惠州${type}人数",
				  "请填写梅州${type}人数","请填写汕尾${type}人数",
				  "请填写河源${type}人数","请填写阳江${type}人数",
				  "请填写清远${type}人数","请填写东莞${type}人数",
				  "请填写中山${type}人数","请填写东沙群岛${type}人数",
				  "请填写潮州${type}人数","请填写揭阳${type}人数",
				  "请填写云浮${type}人数"
				  ]`
		let af = JSON.parse(arr)	
		//数字 
		let nums = `["境外${type}人数必须填写数字","广州${type}人数必须填写数字",
				  "韶关${type}人数必须填写数字","深圳${type}人数必须填写数字",
				  "珠海${type}人必须填写数字","汕头${type}人数必须填写数字",
				  "佛山${type}人数必须填写数字","江门${type}人数必须填写数字",
				  "湛江${type}人数必须填写数字","茂名${type}人数必须填写数字",
				  "肇庆${type}人数必须填写数字","惠州${type}人数必须填写数字",
				  "梅州${type}人数必须填写数字","汕尾${type}人数必须填写数字",
				  "河源${type}人数必须填写数字","阳江${type}人数必须填写数字",
				  "清远${type}人数必须填写数字","东莞${type}人数必须填写数字",
				  "中山${type}人数必须填写数字","东沙群岛${type}人数必须填写数字",
				  "潮州${type}人数必须填写数字","揭阳${type}人数必须填写数字",
				  "云浮${type}人数必须填写数字"
				  ]`
		let ae = JSON.parse(nums)
		super.Errunder()
		super.Parameter(af)
		super.Blank(af)
		super.Checnumber(ae)
	}
}

// 文章的校验
class Richtext extends Check {
	richtextFun(){
		let arr = ['请填写标题','请填写作者名字','请填写正文']
		super.Errunder()
		super.Parameter(arr)
		super.Blank(arr)
		super.Checimg()
	}
}

// 登录校验
class Login extends Check {
	loginFun(){
		let arr = ['请填写账号（手机号码）', '请填写密码']
		super.Errunder()
		super.Parameter(arr)
		super.Blank(arr)
		super.Phone('手机号码格式不正确')
	}
}


module.exports = { NewlyIncreased, Richtext, Login }