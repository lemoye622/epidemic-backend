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
}

module.exports = ObjectForm