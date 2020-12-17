// 提供给前端的字段
class Parameter {
	constructor(body) {
	    this.body = body
	}
	
	// 新增确诊
	diagnosisPar() {
		let {
			Abroaddig,
			Guangzhoudig,
			Shaoguandig,
			Shenzhendig,
			Zhuhaidig,
			Shantoudig,
			Foshandig,
			Jiangmendig,
			Zhanjiangdig,
			Maomingdig,
			Zhaoqingdig,
			Huizhoudig,
			Meizhoudig,
			Shanweidig,
			Heyuandig,
			Yangjiangdig,
			Qingyuandig,
			Dongwandig,
			Zhongshandig,
			Dongshaqundaodig,
			Chaozhoudig,
			Jieyangdig,
			Yunfudig
		} = this.body
		let arrPar = [
			Abroaddig,
			Guangzhoudig,
			Shaoguandig,
			Shenzhendig,
			Zhuhaidig,
			Shantoudig,
			Foshandig,
			Jiangmendig,
			Zhanjiangdig,
			Maomingdig,
			Zhaoqingdig,
			Huizhoudig,
			Meizhoudig,
			Shanweidig,
			Heyuandig,
			Yangjiangdig,
			Qingyuandig,
			Dongwandig,
			Zhongshandig,
			Dongshaqundaodig,
			Chaozhoudig,
			Jieyangdig,
			Yunfudig
		]
		return arrPar
	}
	
	// 新增治愈
	curePar() {
		let {
			Abroadcure,
			Guangzhoucure,
			Shaoguancure,
			Shenzhencure,
			Zhuhaicure,
			Shantoucure,
			Foshancure,
			Jiangmencure,
			Zhanjiangcure,
			Maomingcure,
			Zhaoqingcure,
			Huizhoucure,
			Meizhoucure,
			Shanweicure,
			Heyuancure,
			Yangjiangcure,
			Qingyuancure,
			Dongwancure,
			Zhongshancure,
			Dongshaqundaocure,
			Chaozhoucure,
			Jieyangcure,
			Yunfucure
		} = this.body
		let arrPar = [
			Abroadcure,
			Guangzhoucure,
			Shaoguancure,
			Shenzhencure,
			Zhuhaicure,
			Shantoucure,
			Foshancure,
			Jiangmencure,
			Zhanjiangcure,
			Maomingcure,
			Zhaoqingcure,
			Huizhoucure,
			Meizhoucure,
			Shanweicure,
			Heyuancure,
			Yangjiangcure,
			Qingyuancure,
			Dongwancure,
			Zhongshancure,
			Dongshaqundaocure,
			Chaozhoucure,
			Jieyangcure,
			Yunfucure
		]
		return arrPar
	}
}

module.exports = Parameter