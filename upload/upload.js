// 公用的上传图片的模块

const multer = require('koa-multer');
let OSS = require('ali-oss');

let client = new OSS({
	region: 'oss-cn-hangzhou',
	// 自己的阿里云域名
	// endpoint: 'http://oss-cn-hangzhou.aliyuncs.com',
	//云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，部署在服务端使用RAM子账号或STS，部署在客户端使用STS
	accessKeyId: 'LTAI5t9yZ7EYpZ6fsgp3YRYf',
	accessKeySecret: 'VgBUzpQPfDExPpcAgx3KaSCnsJZLSZ',
	bucket: 'hebelove',
	// bucket: 'hebeiloveu'
	// cname: true
});

// 解析前端提交上来的file对象的图片
let storage = multer.diskStorage({
	// 图片存储路径
	destination: (req, file, callback) => {
		// 第二个参数字符串是指存储已解析了的前端上传的图片的路径
		callback(null, 'public/image')
	},
	// 防止同名文件产生
	filename: (req, file, callback) => {
		let fileFormat = (file.originalname).split('.')
		let updatefile = Date.now() + "." + fileFormat[fileFormat.length - 1]
		callback(null, updatefile)
	}
})

// 配置
let upload = multer({storage})

// OSS上传图片
// 基于nodejs对于阿里云的OSS对象存储的使用方式链接：https://help.aliyun.com/document_detail/32068.html?spm=a2c4g.11186623.6.1081.284d26fdCvuVab
let uploadimg = function(path){
	return new Promise((resolve, reject)=>{
		// 第一个参数：从OSS下载的object名称，即不包括Bucket名称在内的Object的完整路径
		// 第二个参数：下载到本地文件的完整路径
		client.put('novel-coronavirus/' + path, path)
		.then(res=>{
			resolve(res.url)
		})
		.catch(err=>{
			reject(err)
		})
	})
}

module.exports = { upload, uploadimg }
