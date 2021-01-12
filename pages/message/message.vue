<template>
	<view style="width: 100%;height: 100%;display: flex;">
		<!-- 头部背景 -->
		<view class="headWarp">
			<view class="headItem">
				<!-- 头部名字 -->
				<view class="fullName">
					<view class="NameWarp">
						<view style="font-size: 36upx;">姓名：何先生(男命)</view>
						<view>公历：1979 年 3 月 23 日 0 时 0 分 </view>
						<view>农历：一九七九年二月廿五日子时</view>
					</view>
				</view>
				<!-- 头部名字 -->

				<!-- 表格测算 -->
				<view class="logicWarp">
					<view class="classU bigText">{{U}}</view> <!-- U -->
					<view class="classAA midText">{{AA}}</view> <!-- AA -->
					<view class="classBB midText">{{BB}}</view> <!-- BB -->
					<view class="classCC midText">{{CC}}</view> <!-- CC -->
					<view class="classDD midText">{{DD}}</view> <!-- DD -->
					<view class="classE smallText">{{E}}</view> <!-- E -->
					<view class="classF smallText">{{F}}</view> <!-- F -->
					<view class="classG smallText">{{G}}</view> <!-- G -->
					<view class="classH smallText">{{H}}</view> <!-- H -->
					<view class="classI smallText">{{I}}</view> <!-- I -->
					<view class="classJ smallText">{{J}}</view> <!-- J -->
					<view class="classV bigText">{{V}}</view> <!-- V -->
					<view class="classK bigText">{{K}}</view> <!-- K -->
					<view class="classW bigText">{{W}}</view> <!-- W -->
					<view class="classL smallText">{{L}}</view> <!-- L -->
					<view class="classM smallText">{{M}}</view> <!-- M -->
					<view class="classQ midText">{{Q}}</view> <!-- Q -->
					<view class="classP midText">{{P}}</view> <!-- P -->
					<view class="classO midText">{{O}}</view> <!-- O -->
					<view class="classR midText">{{R}}</view> <!-- R -->
					<view class="classS midText">{{S}}</view> <!-- S -->
					<view class="classT midText">{{T}}</view> <!-- T -->
					<view class="classN bigText">{{N}}</view> <!-- N -->
				</view>
				<!-- 表格测算 -->
			</view>

			<!-- 五行健康 -->
			<view class="fiveElementsWarp">
				<view class="fiveText">五行健康</view>
				<table style="width: 606upx;height: 152upx;text-align: center;border-collapse:collapse;margin: 0 auto;">
					<tr>
						<td>自身五行</td>
						<td>财富子女</td>
						<td>事业伴侣</td>
						<td>官鬼疾病</td>
						<td>贵人父母</td>
					</tr>
					<tr>
						<td>{{zswx}}</td>
						<td>{{cfzn}}</td>
						<td>{{sybl}}</td>
						<td>{{ggjb}}</td>
						<td>{{grfm}}</td>
					</tr>
					<tr>
						<td>{{zswxNumber}}</td>
						<td>{{cfznNumber}}</td>
						<td>{{syblNumber}}</td>
						<td>{{ggjbNumber}}</td>
						<td>{{grfmNumber}}</td>
					</tr>
					<tr>
						<td>{{zswxNumber == 4 ? '平衡' : zswxNumber > 4 ? '过旺' : zswxNumber < 4 ? '弱' :'极端不平衡'}}</td>
						<td>{{cfznNumber == 3 ? '平衡' : cfznNumber > 3 ? '过旺' : cfznNumber < 3 ? '弱' :'极端不平衡'}}</td>
						<td>{{syblNumber == 3 ? '平衡' : syblNumber > 3 ? '过旺' : syblNumber < 3 ? '弱' :'极端不平衡'}}</td>
						<td>{{ggjbNumber == 3 ? '平衡' : ggjbNumber > 3 ? '过旺' : ggjbNumber < 3 ? '弱' :'极端不平衡'}}</td>
						<td>{{grfmNumber == 3 ? '平衡' : grfmNumber > 3 ? '过旺' : grfmNumber < 3 ? '弱' :'极端不平衡'}}</td>
					</tr>
				</table>
			</view>
			<!-- 五行健康 -->


		</view>
		<!-- 头部背景 -->

		<!-- 中间背景 -->
		<view class="middleWarp"></view>
		<!-- 中间背景 -->

		<!-- 底部背景 -->
		<view class="bottomWarp"></view>
		<!-- 底部背景 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				yearMouthDay: [], //存放年月日数组
				U: 0,
				E: 0,
				F: 0,
				G: 0,
				H: 0,
				I: 0,
				J: 0,
				V: 0,
				K: 0,
				W: 0,
				L: 0,
				M: 0,
				Q: 0,
				P: 0,
				O: 0,
				R: 0,
				S: 0,
				T: 0,
				N: 0,
				AA: 0,
				BB: 0,
				CC: 0,
				DD: 0,
				zswx: '',
				cfzn: '',
				sybl: '',
				ggjb: '',
				grfm: '',
				zswxNumber: 0,
				cfznNumber: 0,
				syblNumber: 0,
				ggjbNumber: 0,
				grfmNumber: 0,
				gold: 0, //金
				wood: 0, //木
				water: 0, //水
				fire: 0, //火
				soil: 0, //土
				zxj:0,//主性格IJK
				fxjy:0,//父系基因EFI
				mxjy:0,//母系基因GHJ
				qysmm:0,//潜意识密码(E+H+K)
				smxx:0,//生命信息IKM
				nxmm:0,//内心密码(I+J+K)
				wxmm:0,//外心密码Q+N+T
				dnsmxx:0 ,//对内生命信息IKM
				dysmxx:0 ,//对外生命信息JKL
				hsxg:0 ,//孩时性格 K
				shzy:0 ,//适合职业 K
				wxjk:0 ,//（在IJKLM 5个数中，1和6为金，2和7为水，3和8为火，4和9为木，5为土，五行中两个以上包括两个为多，缺的为缺，各1个的为正常） 注意！！！！
				dxpygk:0 ,//当下朋友或顾客（20--40岁）OPQ
				dxpygkysOne:0 ,//当下朋友或顾客的延伸一 EIO
				dxpygkysTwo:0 ,//当下朋友或顾客的延伸二 FIP
				enxs:0 ,//儿女和下属（40--60岁）LMN
				wlwn:0 ,//未来或晚年（60岁以后）RST
				wlwnOne:0 ,//未来或晚年的延伸一GJR
				wlwnTwo:0 ,//未来或晚年的延伸二HJS
				jtmm:0,//家庭密码：2000年以后出生者只一个：F+G 2000年以前出生者有两个：F+G;F+G+1  以上两个数字或三个数相加后所得变的是什么数） 注意！！！！ 判断this.CC 是否大于20 
				aqtz:0 ,//爱情特征 K
				shdx:0 ,//适合对象：本命K数+对象K数
				liunian:0 //流年IJK
			}
		},
		onLoad: function(option) {
			console.log(option.id);
			this.splitMethod(parseInt(option.id))
		},
		methods: {
			//拆分年月日
			splitMethod(number) {
				// var number = 12354987,
				var sNumber = number.toString();
				for (var i = 0, len = sNumber.length; i < len; i += 1) {
					this.yearMouthDay.push(+sNumber.charAt(i));
				}
				console.log(this.yearMouthDay);
				this.AA = this.yearMouthDay[6] + '' + this.yearMouthDay[7] //AA
				this.BB = this.yearMouthDay[4] + '' + this.yearMouthDay[5] //BB
				this.CC = this.yearMouthDay[0] + '' + this.yearMouthDay[1] //CC
				this.DD = this.yearMouthDay[2] + '' + this.yearMouthDay[3] //DD
				this.benxin()
			},
			//两数相加 大于10 则两数相加 小于10 则 返回
			twoNumberAdd(a, b) {
				var c = a + b
				var dayS = []
				if (c >= 10) {
					var d = c.toString()
					for (var i = 0, len = d.length; i < len; i += 1) {
						dayS.push(+d.charAt(i));
					}
					var e = dayS[0] + dayS[1]
					return e
				} else {
					return c
				}
			},
			//三数相加 大于10 则两数相加 小于10 则 返回
			threeNumberAdd(a, b, c) {
				var d = a + b + c
				var dayS = []
				if (d >= 10) {
					var e = d.toString()
					for (var i = 0, len = e.length; i < len; i += 1) {
						dayS.push(+e.charAt(i));
					}
					var f = dayS[0] + dayS[1]
					var newDays = []
					if (f >= 10) {
						var newD = f.toString()
						for (var j = 0, len = newD.length; j < len; j += 1) {
							newDays.push(+newD.charAt(j));
						}
						var newE = newDays[0] + newDays[1]
						return newE
					} else {
						return f
					}
				} else {
					return d
				}
			},
			//算法
			//this.yearMouthDay[0] --A
			//this.yearMouthDay[1] --A
			//this.yearMouthDay[2] --B
			//this.yearMouthDay[3] --B
			//this.yearMouthDay[4] --C
			//this.yearMouthDay[5] --C
			//this.yearMouthDay[6] --D
			//this.yearMouthDay[7] --D
			benxin() {
				this.E = this.twoNumberAdd(this.yearMouthDay[6], this.yearMouthDay[7]) //AA
				this.F = this.twoNumberAdd(this.yearMouthDay[4], this.yearMouthDay[5]) //BB
				this.G = this.twoNumberAdd(this.yearMouthDay[0], this.yearMouthDay[1]) //CC
				this.H = this.twoNumberAdd(this.yearMouthDay[2], this.yearMouthDay[3]) //DD
				this.I = this.twoNumberAdd(this.E, this.F)
				this.J = this.twoNumberAdd(this.G, this.H)
				this.K = this.twoNumberAdd(this.I, this.J)
				this.L = this.twoNumberAdd(this.J, this.K)
				this.M = this.twoNumberAdd(this.I, this.K)
				this.N = this.twoNumberAdd(this.L, this.M)
				this.O = this.twoNumberAdd(this.E, this.I)
				this.P = this.twoNumberAdd(this.F, this.I)
				this.Q = this.twoNumberAdd(this.O, this.P)
				this.R = this.twoNumberAdd(this.G, this.J)
				this.S = this.twoNumberAdd(this.H, this.J)
				this.T = this.twoNumberAdd(this.R, this.S)
				this.U = this.threeNumberAdd(this.E, this.H, this.K)
				this.V = this.threeNumberAdd(this.Q, this.N, this.T)
				this.W = this.threeNumberAdd(this.I, this.J, this.K)
				this.JudgeTheFive(this.K)
				this.yearMouthDay = []
			},
			//判断五行
			JudgeTheFive(K) {
				this.computeFiveNumber()
				switch (K) {
					case 1:
						this.zswx = '金'
						this.zswxNumber = this.gold
						this.cfzn = '水'
						this.cfznNumber = this.water
						this.sybl = '木'
						this.syblNumber = this.wood
						this.ggjb = '火'
						this.ggjbNumber = this.fire
						this.grfm = '土'
						this.grfmNumber = this.soil
						break;
					case 6:
						this.zswx = '金'
						this.zswxNumber = this.gold
						this.cfzn = '水'
						this.cfznNumber = this.water
						this.sybl = '木'
						this.syblNumber = this.wood
						this.ggjb = '火'
						this.ggjbNumber = this.fire
						this.grfm = '土'
						this.grfmNumber = this.soil
						break;
					case 2:
						this.zswx = '水'
						this.zswxNumber = this.water
						this.cfzn = '木'
						this.cfznNumber = this.wood
						this.sybl = '火'
						this.syblNumber = this.fire
						this.ggjb = '土'
						this.ggjbNumber = this.soil
						this.grfm = '金'
						this.grfmNumber = this.gold
						break;
					case 7:
						this.zswx = '水'
						this.zswxNumber = this.water
						this.cfzn = '木'
						this.cfznNumber = this.wood
						this.sybl = '火'
						this.syblNumber = this.fire
						this.ggjb = '土'
						this.ggjbNumber = this.soil
						this.grfm = '金'
						this.grfmNumber = this.gold
						break;
					case 3:
						this.zswx = '火'
						this.zswxNumber = this.fire
						this.cfzn = '土'
						this.cfznNumber = this.soil
						this.sybl = '金'
						this.syblNumber = this.gold
						this.ggjb = '水'
						this.ggjbNumber = this.water
						this.grfm = '木'
						this.grfmNumber = this.wood
						break;
					case 8:
						this.zswx = '火'
						this.zswxNumber = this.fire
						this.cfzn = '土'
						this.cfznNumber = this.soil
						this.sybl = '金'
						this.syblNumber = this.gold
						this.ggjb = '水'
						this.ggjbNumber = this.water
						this.grfm = '木'
						this.grfmNumber = this.wood
						break;
					case 4:
						this.zswx = '木'
						this.zswxNumber = this.wood
						this.cfzn = '火'
						this.cfznNumber = this.fire
						this.sybl = '土'
						this.syblNumber = this.soil
						this.ggjb = '金'
						this.ggjbNumber = this.gold
						this.grfm = '水'
						this.grfmNumber = this.water
						break;
					case 9:
						this.zswx = '木'
						this.zswxNumber = this.wood
						this.cfzn = '火'
						this.cfznNumber = this.fire
						this.sybl = '土'
						this.syblNumber = this.soil
						this.ggjb = '金'
						this.ggjbNumber = this.gold
						this.grfm = '水'
						this.grfmNumber = this.water
						break;
					default:
						this.zswx = '土'
						this.zswxNumber = this.soil
						this.cfzn = '金'
						this.cfznNumber = this.gold
						this.sybl = '水'
						this.syblNumber = this.water
						this.ggjb = '木'
						this.ggjbNumber = this.wood
						this.grfm = '火'
						this.grfmNumber = this.fire
				}
			},
			//计算五行数量
			computeFiveNumber() {
				var arr = [this.E, this.F, this.G, this.H, this.I, this.J, this.K, this.L, this.M, this.N, this.O, this.P, this.Q,
					this.R, this.S, this.T
				]
				for (var j = 0, len = arr.length; j < len; j++) {
					switch (arr[j]) {
						case 1:
							this.gold++
							break;
						case 6:
							this.gold++
							break;
						case 2:
							this.water++
							break;
						case 7:
							this.water++
							break;
						case 3:
							this.fire++
							break;
						case 8:
							this.fire++
							break;
						case 4:
							this.wood++
							break;
						case 9:
							this.wood++
							break;
						default:
							this.soil++
					}
				}
			}
		}
	}
</script>

<style>
	.bigText {
		font-size: 36upx;
		font-family: Source Han Serif SC;
		font-weight: bold;
		color: #232325;
	}

	.midText {
		font-size: 36upx;
		font-family: Source Han Serif SC;
		font-weight: bold;
		color: #664928;
	}

	.smallText {
		font-size: 36upx;
		font-family: Source Han Serif SC;
		font-weight: bold;
		color: #232325;
	}

	.classU {
		position: absolute;
		left: 234upx;
		top: 26upx;
	}

	.classAA {
		position: absolute;
		left: 62upx;
		top: 98upx;
	}

	.classBB {
		position: absolute;
		left: 132upx;
		top: 98upx;
	}

	.classCC {
		position: absolute;
		left: 312upx;
		top: 98upx;
	}

	.classDD {
		position: absolute;
		left: 380upx;
		top: 98upx;
	}

	.classE {
		position: absolute;
		left: 76upx;
		top: 160upx;
	}

	.classF {
		position: absolute;
		left: 140upx;
		top: 160upx;
	}

	.classG {
		position: absolute;
		left: 322upx;
		top: 160upx;
	}

	.classH {
		position: absolute;
		left: 386upx;
		top: 160upx;
	}

	.classI {
		position: absolute;
		left: 164upx;
		top: 222upx;
	}

	.classJ {
		position: absolute;
		left: 306upx;
		top: 222upx;
	}

	.classV {
		position: absolute;
		left: 34upx;
		top: 288upx;
	}

	.classK {
		position: absolute;
		left: 234upx;
		top: 288upx;
	}

	.classW {
		position: absolute;
		left: 432upx;
		top: 288upx;
	}

	.classL {
		position: absolute;
		left: 164upx;
		top: 360upx;
	}

	.classM {
		position: absolute;
		left: 306upx;
		top: 360upx;
	}

	.classQ {
		position: absolute;
		left: 28upx;
		bottom: 96upx;
	}

	.classP {
		position: absolute;
		left: 86upx;
		bottom: 96upx;
	}

	.classO {
		position: absolute;
		left: 146upx;
		bottom: 96upx;
	}

	.classT {
		position: absolute;
		right: 30upx;
		bottom: 96upx;
	}

	.classS {
		position: absolute;
		right: 88upx;
		bottom: 96upx;
	}

	.classR {
		position: absolute;
		right: 148upx;
		bottom: 96upx;
	}

	.classN {
		position: absolute;
		left: 234upx;
		bottom: 26upx;
	}

	.fiveText {

		font-size: 34upx;
		font-family: Source Han Serif SC;
		font-weight: bold;
		color: #331C01;
		text-align: center;
		margin-bottom: 16upx;
	}

	tr td {
		border: 1upx solid #331C01;
		font-family: Source Han Serif SC;
		font-weight: bold;
		color: #331C01;
		font-size: 24upx;
	}

	.headWarp {
		background-image: url(../../static/result/bgHead.png);
		background-size: 100% 100%;
		width: 750upx;
		height: 2144upx;
	}

	.headItem {
		background-image: url(../../static/result/itemBg.png);
		background-size: 100% 100%;
		width: 684upx;
		height: 920upx;
		margin: 0 auto;
		margin-top: 678upx;
		padding-top: 48upx;
	}

	.fullName {
		background-image: url(../../static/result/xingming.png);
		background-size: 100% 100%;
		width: 554upx;
		height: 184upx;
		margin: 0 auto;
	}

	.NameWarp {
		font-size: 28upx;
		font-family: Source Han Serif SC;
		font-weight: bold;
		color: #331C01;
		line-height: 53upx;
		padding-top: 18upx;
		margin-left: 38upx;
	}

	.logicWarp {
		background-image: url(../../static/result/head.png);
		background-size: 100% 100%;
		width: 488upx;
		height: 626upx;
		margin: 0 auto;
		margin-top: 49upx;
		position: relative;
	}

	.fiveElementsWarp {
		background-image: url(../../static/result/wuxingBg.png);
		background-size: 100% 100%;
		width: 664upx;
		height: 250upx;
		margin: 0 auto;
		margin-top: 44upx;
		padding-top: 21upx;
	}
</style>
