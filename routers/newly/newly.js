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
const { DatabaseAdd, DatabaseQuery } = require('../../config/publicApi.js')

// 新增确诊
router.post('/diagnosis', async ctx => {
	// post接收数据： ctx.request.body
	// 提供给前端的字段
	let arrPar = new Parameter(ctx.request.body).diagnosisPar()
	// 参数校验
	new NewlyIncreased(ctx, arrPar).increasedFun('确诊')
	// 给键值对形式，以对象的形式
	let objData = new ObjectForm(arrPar).objDiagnosis()
	// 时间
	let time = JSON.stringify(datetime.format(new Date(), 'YYYY-MM-DD HH:mm:ss'))
	
	// 提交到集合
	let query = `db.collection('diagnosis').add({
		// data 字段表示需新增的 JSON 数据
		data: { data: ${objData}, time: ${time}}
	})`
	
	await new DatabaseAdd(ctx).databaseAdd(query)
})

// 新增治愈
router.post('/cure', async ctx => {
	let arrPar = new Parameter(ctx.request.body).curePar()
	new NewlyIncreased(ctx, arrPar).increasedFun('治愈')
	let objData = new ObjectForm(arrPar).objCure()
	let time = JSON.stringify(datetime.format(new Date(), 'YYYY-MM-DD HH:mm:ss'))
	let query = `db.collection('cure').add({
		data: { data: ${objData}, time: ${time}}
	})`
	
	await new DatabaseAdd(ctx).databaseAdd(query)
})

// 新增死亡
router.post('/death', async ctx => {
	let arrPar = new Parameter(ctx.request.body).deathPar()
	new NewlyIncreased(ctx, arrPar).increasedFun('死亡')
	let objData = new ObjectForm(arrPar).objDeath()
	let time = JSON.stringify(datetime.format(new Date(), 'YYYY-MM-DD HH:mm:ss'))
	let query = `db.collection('death').add({
		data: { data: ${objData}, time: ${time}}
	})`
	
	await new DatabaseAdd(ctx).databaseAdd(query)
})

// 获取健康上报信息数据
router.get('/healthInfo', async ctx => {
	console.log('10')
	// get请求集合所有数据
	let query = `db.collection('healthInfo').get()`
	await new DatabaseQuery(ctx).databaseQuery(query)
})

module.exports = router.routes()