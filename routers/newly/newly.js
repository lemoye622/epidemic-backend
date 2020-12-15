// 引入路由
const router = require('koa-router')()

// 引入 body 响应
const BodyRes = require('../../config/bodyRes.js')
// 引入 resultData 文件
const result = require('../../config/resultData.js')
// 引入操作数据库的类
const { DatabaseAdd } = require('../../config/publicApi.js')

// 新增确诊
router.post('/diagnosis', async ctx => {
	// post接收数据： ctx.request.body
	console.log(ctx.request.body)
	// 返回对象 响应给前端
	// ctx.body = {
	// 	msg: '成功',
	// 	data: ctx.request.body.name
	// }
	// ctx.status = 200
	
	// let name = ctx.request.body.name
	// new bodyRes(ctx, 'SUCCESS', name, 200).successRes()
		
	let base = `db.collection('list_data').add({
		// data 字段表示需新增的 JSON 数据
		data: { 
			name: 'vae',
			age: 34
		}
	})`
	
	await new DatabaseAdd(ctx).databaseAdd(base)
})

module.exports = router.routes()