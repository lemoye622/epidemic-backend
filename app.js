const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
// 引入操作post提交接收数据的模块
const bodyParser = require('koa-bodyparser')
// () 实例化路由
const router = require('koa-router')()
// 解决跨域
const cors = require('koa-cors')
// 全局异常处理中间件
const abnormal = require('./config/abnormal.js')

app.use(json())
app.use(bodyParser())
app.use(abnormal)
app.use(cors())

// 引入newly文件
const newlydata = require('./routers/newly/newly.js')

// 配置接口
router.use('/api/newly', newlydata)
//启动路由
app.use(router.routes()).use(router.allowedMethods())

// 端口
app.listen(8000, () => {
	console.log('服务已经启动，8000端口监听中...');
})