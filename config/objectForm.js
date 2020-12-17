// 给键值对形式，以对象的形式
class ObjectForm {
	constructor(obj) {
	    this.obj = obj
	}
	
	// 新增确诊
	objDiagnosis() {
		let data = {
			Abroaddig: Number(this.obj[0]),
			Guangzhoudig: Number(this.obj[1]),
			Shaoguandig: Number(this.obj[2]),
			Shenzhendig: Number(this.obj[3]),
			Zhuhaidig: Number(this.obj[4]),
			Shantoudig: Number(this.obj[5]),
			Foshandig: Number(this.obj[6]),
			Jiangmendig: Number(this.obj[7]),
			Zhanjiangdig: Number(this.obj[8]),
			Maomingdig: Number(this.obj[9]),
			Zhaoqingdig: Number(this.obj[10]),
			Huizhoudig: Number(this.obj[11]),
			Meizhoudig: Number(this.obj[12]),
			Shanweidig: Number(this.obj[13]),
			Heyuandig: Number(this.obj[14]),
			Yangjiangdig: Number(this.obj[15]),
			Qingyuandig: Number(this.obj[16]),
			Dongwandig: Number(this.obj[17]),
			Zhongshandig: Number(this.obj[18]),
			Dongshaqundaodig: Number(this.obj[19]),
			Chaozhoudig: Number(this.obj[20]),
			Jieyangdig: Number(this.obj[21]),
			Yunfudig: Number(this.obj[22])
		}
		// 将对象转换成字符串
		return JSON.stringify(data)
	}
	
	// 新增治愈
	objCure() {
		let data = {
			Abroadcure: Number(this.obj[0]),
			Guangzhoucure: Number(this.obj[1]),
			Shaoguancure: Number(this.obj[2]),
			Shenzhencure: Number(this.obj[3]),
			Zhuhaicure: Number(this.obj[4]),
			Shantoucure: Number(this.obj[5]),
			Foshancure: Number(this.obj[6]),
			Jiangmencure: Number(this.obj[7]),
			Zhanjiangcure: Number(this.obj[8]),
			Maomingcure: Number(this.obj[9]),
			Zhaoqingcure: Number(this.obj[10]),
			Huizhoucure: Number(this.obj[11]),
			Meizhoucure: Number(this.obj[12]),
			Shanweicure: Number(this.obj[13]),
			Heyuancure: Number(this.obj[14]),
			Yangjiangcure: Number(this.obj[15]),
			Qingyuancure: Number(this.obj[16]),
			Dongwancure: Number(this.obj[17]),
			Zhongshancure: Number(this.obj[18]),
			Dongshaqundaocure: Number(this.obj[19]),
			Chaozhoucure: Number(this.obj[20]),
			Jieyangcure: Number(this.obj[21]),
			Yunfucure: Number(this.obj[22])
		}
		return JSON.stringify(data)
	}
	
	// 新增死亡
	objDeath() {
		let data = {
			Abroaddie: Number(this.obj[0]),
			Guangzhoudie: Number(this.obj[1]),
			Shaoguandie: Number(this.obj[2]),
			Shenzhendie: Number(this.obj[3]),
			Zhuhaidie: Number(this.obj[4]),
			Shantoudie: Number(this.obj[5]),
			Foshandie: Number(this.obj[6]),
			Jiangmendie: Number(this.obj[7]),
			Zhanjiangdie: Number(this.obj[8]),
			Maomingdie: Number(this.obj[9]),
			Zhaoqingdie: Number(this.obj[10]),
			Huizhoudie: Number(this.obj[11]),
			Meizhoudie: Number(this.obj[12]),
			Shanweidie: Number(this.obj[13]),
			Heyuandie: Number(this.obj[14]),
			Yangjiangdie: Number(this.obj[15]),
			Qingyuandie: Number(this.obj[16]),
			Dongwandie: Number(this.obj[17]),
			Zhongshandie: Number(this.obj[18]),
			Dongshaqundaodie: Number(this.obj[19]),
			Chaozhoudie: Number(this.obj[20]),
			Jieyangdie: Number(this.obj[21]),
			Yunfudie: Number(this.obj[22])
		}
		return JSON.stringify(data)
	}
}

module.exports = ObjectForm