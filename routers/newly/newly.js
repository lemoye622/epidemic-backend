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
const { NewlyIncreased, Richtext, Login } = require('../../config/check.js')
// 给键值对形式，以对象的形式
const ObjectForm = require('../../config/objectForm.js')
// 引入操作数据库的类
const { DatabaseAdd, DatabaseQuery } = require('../../config/publicApi.js')
// 上传富文本编辑器的图片
const { upload, uploadimg } = require('../../upload/upload.js')

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
	await new DatabaseQuery(ctx).databaseQuery(query, 'ip')
})

// 富文本编辑器上传图片
router.post('/articleimg', upload.single('file'), async ctx => {
	// 上传file对象
	// 涉及图片、视频等资源，前端需要通过 formdata 提交
	// 上传图片是在 ctx.req.file，其他值在 ctx.req.body
	// 给前端的图片的字段就是 file
	console.log(ctx.req.file)
	try{
		let articleimg = await uploadimg(ctx.req.file.path)
		console.log('上传图片路径', articleimg)
		new BodyRes(ctx, 'SUCCESS', articleimg).successRes()
	}catch(e){
		new BodyRes(ctx).errorRes('FAIL', 500)
	}
})

// 文章上传到集合
router.post('/article', upload.single('file'), async ctx=>{
	// 给前端的字段
	let {title, author, file, article} = ctx.req.body
	// 参数校验
	new Richtext(ctx, [title, author, article]).richtextFun()
	
	// 上传到集合：分两步，也就是列表页一个集合，文章页一个集合
	// 列表页：标题——封面图——作者
	// 详情页：标题——作者——时间——内容
	// 列表页和文章页的唯一标识id字段
	let articId = new Date().getTime()
		
	// 封面图上传到阿里云
	let ossimg = await uploadimg(ctx.req.file.path)
	// 1.列表页：提交到集合
	// 时间
	let time = JSON.stringify(datetime.format(new Date(), 'YYYY-MM-DD'))
	let listPage = `db.collection('newsListPage').add({
		data: {images:'${ossimg}', titles: '${title}', authors:'${author}', articIds: '${articId}'}
	})`
	await new DatabaseAdd(ctx).databaseAdd(listPage)
	// 2.文章页：提交到集合
	let querycontent = `db.collection('article').add({
		data:{titles:'${title}',authors:'${author}',times:${time},content:'${article}',articIds:'${articId}'}
	})`
	await new DatabaseAdd(ctx).databaseAdd(querycontent)
})

// 登录
router.post('/login', async ctx => {
	// 给前端的字段
	let {account, password} = ctx.request.body
	let arrpar = [account, password]
	// 参数校验
	new Login(ctx, arrpar).loginFun()
	// 查询云数据库的账号密码
	// 与用户输入的相比较，如果正确则做返回token存到本地
	let query = `db.collection('admin').where({account: '${account}', password: '${password}'}).get()`
	await new DatabaseQuery(ctx).databaseQuery(query, 'vp')
})

module.exports = router.routes()