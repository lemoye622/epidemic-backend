// 引入路由
const router = require('koa-router')()
// 时间
const datetime = require('silly-datetime')
const { log } = console

// 引入 body 响应
const BodyRes = require('../../config/bodyRes.js')
// 引入 resultData 文件
const result = require('../../config/resultData.js')
// 引入字段表
const Parameter = require('../../config/parameter.js')
// 参数校验
const { NewlyIncreased } = require('../../config/check.js')
// 给键值对形式，以对象的形式
const ObjectForm = require('../../config/objectForm.js')
// 引入操作数据库的类
const { DatabaseAdd } = require('../../config/publicApi.js')

// 新增确诊
router.post('/diagnosis', async ctx => {
	// post接收数据： ctx.request.body
	// console.log(ctx.request.body)
	// 提供给前端的字段
	let arrPar = new Parameter(ctx.request.body).diagnosisPar()
	// log(arrPar)
	// 参数校验
	new NewlyIncreased(ctx, arrPar).increasedFun('确诊')
	// 给键值对形式，以对象的形式
	let objData = new ObjectForm(arrPar).objDiagnosis()
	// log(objData)
	// 时间
	let time = JSON.stringify(datetime.format(new Date(), 'YYYY-MM-DD HH:mm:ss'))
	// log(time)
	
	// return false
	
	// 返回对象 响应给前端
	// ctx.body = {
	// 	msg: '成功',
	// 	data: ctx.request.body.name
	// }
	// ctx.status = 200
	
	// let name = ctx.request.body.name
	// new bodyRes(ctx, 'SUCCESS', name, 200).successRes()
	
	// 提交到集合
	let query = `db.collection('diagnosis').add({
		// data 字段表示需新增的 JSON 数据
		data: { diagnosisData: ${objData}, time: ${time}}
	})`
	
	await new DatabaseAdd(ctx).databaseAdd(query)
})

module.exports = router.routes()