const request = require('request')
const qs = require('querystring') 

// body响应
const BodyRes = require('./bodyRes.js');
// 引入 resultData 文件
const result = require('./resultData.js')

// 拼接URL地址
const param = qs.stringify({
	grant_type: 'client_credential',
	appid: 'wx5dd2122592408a54',
	secret: '88b35676e6ac856d6359c5f84f6a53bf'
})

// 获取 token 地址
let url = 'https://api.weixin.qq.com/cgi-bin/token?' + param

// 云环境 id
let env = 'epidemic-7guqm06ef9b46335'

// 数据库插入记录的URL
let addUrl = 'https://api.weixin.qq.com/tcb/databaseadd?access_token='
// 数据库查询记录URL
let queryUrl = 'https://api.weixin.qq.com/tcb/databasequery?access_token='


class GetToken {
	constructor(ctx) {
	    this.ctx = ctx
	}
	
	// 获取 token
	getToken() {
		return new Promise((resolve, reject) => {
			request(url, (error, response, body) => {
				if (!error && response.statusCode == 200) {
					resolve(JSON.parse(body).access_token)
				} else {
					reject(error)
				}
			})
		})
	}
	
	// 公用的promise  post请求
	pullDatabase(url, data) {
		return new Promise((resolve, reject) => {
			request({
				url: url,
				method: 'POST',
				json: true,
				header: {
					"content-type": "application/json"
				},
				body: data
			}, (error, res, body) => {
				if (!error && res.statusCode ==200) {
					if (body.errmsg == 'ok') {
						resolve(res.body)
					} else {
						reject(body)
					}
				} else {
					reject(error)
				}
			})
		})
	}
}


// 插入记录
class DatabaseAdd extends GetToken {
	constructor(ctx) {
		super(ctx)
	}
	
	async databaseAdd(query) {
		try{
			let token = await this.getToken()
			// console.log(token)
			var url = addUrl + token
		}catch(e){
			throw new result('获取token出现错误', 500)
		}
		
		let data = {
			env,
			"query": query
		}
		try{
			let vbn = await this.pullDatabase(url, data)
			// console.log(vbn)
			new BodyRes(this.ctx).successRes()
		}catch(e){
			new BodyRes(this.ctx).errorRes('请求失败!', 500)
		}
	}
}

// 查询数据库
class DatabaseQuery extends GetToken {
	constructor(ctx) {
		super(ctx)
	}
	
	async databaseQuery(query, type) {
		try{
			let token = await this.getToken()
			var url = queryUrl + token
		}catch(e){
			throw new result('获取token出现错误', 500)
		}
		
		let data = {
			env,
			"query": query
		}
		try{
			let queryvp = await this.pullDatabase(url, data)
			console.log(queryvp.data) // 打印出来是 [' { } '] ，里面字符串需要解析成对象
			let querydata = queryvp.data.map((item) => {
				return JSON.parse(item)
			})
			// console.log(querydata)
			// 登录
			if (type == 'vp') {
				console.log('登录')
				console.log(querydata)
				if (querydata.length === 0) {
					new BodyRes(this.ctx).errorRes('账号或密码错误!', 202)
				} else {
					new BodyRes(this.ctx, 'SUCCESS', querydata[0].token).successRes()
				}
			} else {
				new BodyRes(this.ctx, 'SUCCESS', querydata).successRes()
			}
		}catch(e){
			new BodyRes(this.ctx).errorRes('请求失败!', 500)
		}
	}
}

module.exports = { DatabaseAdd, DatabaseQuery }