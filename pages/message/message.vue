<template>
	<view style="width: 100%;height: 100%;display: flex;flex-direction: column;justify-content: space-between;align-items: center">
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
		<!-- 		<view class="middleWarp" v-for="i in 1" :key="i"> -->
		<view>
			<!-- 最长的加*号的 12个-->
			<view class="resultItemOneWarp" v-for="i in 13" :key="i">
				<view class="resultItemOneTitle" :style="{'width':(testText.length>6?'500upx':'340upx')}">
					{{testText}}
				</view>
				<view class="resultItemOneContent">
					<view style="margin-top: 27upx;">
						<view v-for="i in 5" :key="i" class="resultItemOneText1">
							*服务奉献，呼朋引伴
						</view>
					</view>
					<view class="resultItemOneText2">
						是一个很忙碌、情绪化和处于许多大压力之下的人，非常实际、但 有些固执，所以有时会很难与人相处。在某种程度上，并不喜欢自己的
						权威受到挑战，也不喜欢太先进的想法，太多的压力让自己无法集中精神与专心，小心会赶走贵人，因此，往往为了坚持己见而选择施压给身 边的人，让他们忠于自己的方式做事。所以，不论是观点、生活方式或
						是自己的外表，都确实与他人不同，会导致婚姻波折，离婚率高。
						是一个很忙碌、情绪化和处于许多大压力之下的人，非常实际、但 有些固执，所以有时会很难与人相处。在某种程度上，并不喜欢自己的
						权威受到挑战，也不喜欢太先进的想法，太多的压力让自己无法集中精神与专心，小心会赶走贵人，因此，往往为了坚持己见而选择施压给身 边的人，让他们忠于自己的方式做事。所以，不论是观点、生活方式或
						是自己的外表，都确实与他人不同，会导致婚姻波折，离婚率高。
					</view>
				</view>
			</view>

			<!-- 最短的3个 -->
			<view class="resultItemOneWarp" v-for="i in 3" :key="i">
				<view class="resultItemOneTitle" :style="{'width':(testText.length>6?'500upx':'340upx')}">
					{{testText}}
				</view>

				<view class="resultItemTwoContent">
					<view class="resultItemTwoText">
						内心密码3的人，积极表达的行为来自于他们敏感的情绪，做事急促并冲动，就象他们的敏感而丰富的情绪，但往往不能坚持到底，缺乏耐性与恒心。原因是因为情绪的快速转换
					</view>
				</view>
			</view>

			<!-- 长的不加*号的 -->
			<view class="resultItemOneWarp" v-for="i in 3" :key="i">
				<view class="resultItemOneTitle" :style="{'width':(testText.length>6?'500upx':'340upx')}">
					{{testText}}
				</view>

				<view class="resultItemTwoContent" style="background-image: url(../../static/result/itemBg.png);">
					<view class="resultItemTwoText">
						4号人在爱情里，寻求安全感，而爱情关系确实可以提供安全感，因此时数可以说是最需要爱情的一群人。他们太需要安全感，所以有时候并不仔细挑选对象。若在情感上或金钱上得到了安全感，他们便会与对方交往。时间一久，双方关系中的问题逐一显现，他们就开始觉得痛苦了。由于4号讨厌改变，于是他们会想办法至少让伴侣接受现状，承认问题，两人继续在一起，即使自己已经痛苦得不得了。如果他们挑选到的是适合自己的人，这会出现另外的问题：爱情需要变化，才能保新鲜趣味，但是4号的人偏好规律，让事情保持原状。对此，他们的伴侣常常抱怨，但是不会有用。渐渐的，不管是说出来的或是没有说出来的愤怒和厌烦感都会逐渐累积，使得双方的关系迅速冷却。除非努力改变，否则爱人最后会变成室友，爱意消失，但两人还在一起。4号一直要到无法再从伴侣身上获得信赖感或安全感的时候，两人的关系才会破裂，否则绝不轻言散伙。
					</view>
				</view>
			</view>



		</view>

		<!-- 		</view> -->
		<!-- 中间背景 -->

		<!-- 底部背景 -->
		<!-- <view class="bottomWarp">
			
		</view> -->
		<!-- 底部背景 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				yearMouthDay: [], //存放年月日数组
				testText: '家庭密码',
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
				zxj: "281", //主性格IJK
				fxjy: "393", //父系基因EFI
				mxjy: "775", //母系基因GHJ
				qysmm: "8", //潜意识密码(E+H+K)
				nxmm: "7", //内心密码(I+J+K)
				wxmm: "363", //外心密码Q+N+T  这里注意
				dnsmxx: "415", //对内生命信息IKM
				dwsmxx: "617", //对外生命信息JKL
				hsxg: "5", //孩时性格 K
				shzy: "9", //适合职业 K
				wxjk: ["缺土", "水多"], //（在IJKLM 5个数中，1和6为金，2和7为水，3和8为火，4和9为木，5为土，五行中两个以上包括两个为多，缺的为缺，各1个的为正常） 注意！！！！
				dxpygk: "393", //当下朋友或顾客（20--40岁）OPQ
				dxpygkysOne: "347", //当下朋友或顾客的延伸一 EIO
				dxpygkysTwo: "944", //当下朋友或顾客的延伸二 FIP
				enxs: "551", //儿女和下属（40--60岁）LMN
				wlwn: "363", //未来或晚年（60岁以后）RST 81条
				wlwnOne: "371", //未来或晚年的延伸一GJR
				wlwnTwo: "742", //未来或晚年的延伸二HJS
				jtmm: "5", //家庭密码：2000年以后出生者只一个：F+G 2000年以前出生者有两个：F+G;F+G+1  以上两个数字或三个数相加后所得变的是什么数） 注意！！！！ 判断this.CC 是否大于20 
				aqtz: "8", //爱情特征 K
				shdx: "9", //适合对象：本命K数+对象K数
				liunian: "562" //流年IJK
			}
		},
		onLoad: function(option) {
			console.log(option.id);
			this.splitMethod(parseInt(option.id))
			this._resulContent()
		},
		methods: {
			//获取断语
			_resulContent() {
				// if (this.registered.mobile === '') {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '请输入手机号'
				// 	});
				// 	return;
				// }
				uni.getNetworkType({
					success: (res) => {
						if (res.networkType == 'none') {
							uni.showToast({
								icon: 'none',
								title: '当前网络不可用'
							})
						}
					}
				})
				uni.showLoading({
					title: '加载中'
				});
				const orderId = '' //订单ID
				const aqtz = {
					"code": this.aqtz
				} //爱情特征
				const dnsmxx = {
					"code": this.dnsmxx
				} //对内的生命信息
				const dwsmxx = {
					"code": this.dwsmxx
				} //对外的生命信息
				const enxs = {
					"code": this.enxs
				} //儿女和下属
				const fxjy = {
					"code": this.fxjy
				} //父系基因
				const hsxgtz = {
					"code": this.hsxg
				} //孩时性格特征
				const jtmm = {
					"code": this.jtmm
				} //家庭密码
				const ln = {
					"code": this.liunian
				} //流年
				const mxjy = {
					"code": this.mxjy
				} //母系基因
				const nxmm = {
					"code": this.nxmm
				} //内心密码
				const pygk = {
					"code": this.dxpygk
				} //当下朋友或顾客
				const pygkExtra1 = {
					"code": this.dxpygkysOne
				} //当下朋友或顾客延伸1
				const pygkExtra2 = {
					"code": this.dxpygkysTwo
				} //当下朋友或顾客延伸2
				const qysmm = {
					"code": this.qysmm
				} //潜意识密码
				const shdx = {
					"code": this.shdx
				} //适合对象
				const sszy = {
					"code": this.shzy
				} // 适合职业
				const wlwn = {
					"code": this.wlwn
				} // 未来或晚年
				const wlwnExtra1 = {
					"code": this.wlwnOne
				} //未来或晚年的延伸一
				const wlwnExtra2 = {
					"code": this.wlwnTwo
				} //未来或晚年的延伸二
				const wxjkCodeList = this.wxjk //五行健康
				const wxmm = {
					"code": this.wxmm
				} //外心密码
				const zxgtz = {
					"code": this.zxj
				} //主性格特征
				let params = {
					orderId,
					aqtz,
					dnsmxx,
					dwsmxx,
					enxs,
					fxjy,
					hsxgtz,
					jtmm,
					ln,
					mxjy,
					nxmm,
					pygk,
					pygkExtra1,
					pygkExtra2,
					qysmm,
					shdx,
					sszy,
					wlwn,
					wlwnExtra1,
					wlwnExtra2,
					wxjkCodeList,
					wxmm,
					zxgtz
				}
				this.$ajax.post({
					url: this.$service.api_lists.resulContent,
					data: params
				}).then((res) => {
					if (res.data.code == 1) {
						//初始化信息
						// uni.showToast({
						// 	icon: 'none',
						// 	title: '发送成功'
						// })
					}
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
					// uni.showToast({
					// 	title: err,
					// 	duration: 2000
					// });
				})
			},
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
				this.zxj = this.I + "" + this.J + "" + this.K
				this.fxjy = this.E + "" + this.F + "" + this.I
				this.mxjy = this.G + "" + this.H + "" + this.J
				this.qysmm = this.U
				this.nxmm = this.W
				this.wxmm = this.Q + "" + this.N + "" + this.T
				this.dnsmxx = this.I + "" + this.K + "" + this.M
				this.dwsmxx = this.J + "" + this.K + "" + this.L
				this.hsxg = this.K
				this.shzy = this.K
				this.wxjk = this.computeWxJk()
				console.log(this.wxjk)
				this.dxpygk = this.O + "" + this.P + "" + this.Q
				this.dxpygkysOne = this.E + "" + this.I + "" + this.O
				this.dxpygkysTwo = this.F + "" + this.I + "" + this.P
				this.enxs = this.L + "" + this.M + "" + this.N
				this.wlwn = this.R + "" + this.S + "" + this.T
				this.wlwnOne = this.G + "" + this.J + "" + this.R
				this.wlwnTwo = this.H + "" + this.J + "" + this.S
				this.jtmm = this.computeJtMm() + ''
				this.aqtz = this.K
				this.shdx = this.K
				this.liunian = this.I + "" + this.J + "" + this.K
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
			},

			//判断家庭密码
			computeJtMm() {
				var year = parseInt(this.CC + this.DD)
				if (year >= 2000) {
					var c = this.F + this.G
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
				} else {
					var a = this.F + this.G
					var b = this.F + this.G + 1
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
				}
			},
			//判断五行健康
			computeWxJk() {
				var arr = [this.I, this.J, this.K, this.L, this.M]
				var gold = 0 //金
				var water = 0 //水
				var fire = 0 //火
				var wood = 0 //木
				var soil = 0 //土
				var wxjkArr = []
				for (var j = 0, len = arr.length; j < len; j++) {
					switch (arr[j]) {
						case 1:
							gold++
							break;
						case 6:
							gold++
							break;
						case 2:
							water++
							break;
						case 7:
							water++
							break;
						case 3:
							fire++
							break;
						case 8:
							fire++
							break;
						case 4:
							wood++
							break;
						case 9:
							wood++
							break;
						default:
							soil++
					}
				}
				if (gold == 0) {
					wxjkArr.push('缺金');
				} else if (gold > 1) {
					wxjkArr.push('多金');
				} else {}
				
				if (water == 0) {
					wxjkArr.push('缺水');
				} else if (water > 1) {
					wxjkArr.push('多水');
				} else {}
				
				if (fire == 0) {
					wxjkArr.push('缺火');
				} else if (fire > 1) {
					wxjkArr.push('多火');
				} else {}
				
				if (wood == 0) {
					wxjkArr.push('缺木');
				} else if (wood > 1) {
					wxjkArr.push('多木');
				} else {}
				
				if (soil == 0) {
					wxjkArr.push('缺土');
				} else if (soil > 1) {
					wxjkArr.push('多土');
				} else {}
				
				return wxjkArr
			}
		}
	}
</script>

<style>
	.resultItemTwoContent {
		background-image: url(../../static/result/smallkuan.png);
		background-size: 100% 100%;
		width: 670upx;
		min-height: 240upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.resultItemTwoText {
		text-indent: 2em;
		text-align: justify;
		font-size: 30upx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #331C01;
		width: 622upx;
		margin-bottom: 46upx;
		margin-top: 46upx;
	}

	.resultItemOneText1 {
		font-size: 30upx;
		font-family: Source Han Serif SC;
		font-weight: bold;
		color: #2D1800;
		margin-left: 28upx;
		margin-top: 6upx;
	}

	.resultItemOneText2 {
		font-size: 30upx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #331C01;
		text-indent: 2em;
		width: 622upx;
		text-align: justify;
		margin: 0 auto;
		margin-top: 46upx;
		margin-bottom: 46upx;
	}

	.bottomWarp {
		background-image: url(../../static/result/bgBottom.png);
		background-size: 100% 100%;
		width: 750upx;
		height: 1580upx;
	}

	.middleWarp {
		background-image: url(../../static/result/bgMid.png);
		background-size: 100% 100%;
		width: 750upx;
		height: 3276upx;
	}

	.resultItemOneWarp {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center
	}

	.resultItemOneTitle {
		background-image: url(../../static/result/biaoti.png);
		background-size: 100% 100%;
		/* max-width: 600upx; */
		height: 80upx;
		text-align: center;
		line-height: 76upx;
		font-size: 32upx;
		font-family: Source Han Serif SC;
		font-weight: bold;
		color: #331C01;
		margin-top: 40upx;
		margin-bottom: 27upx;
	}

	.resultItemOneContent {
		background-image: url(../../static/result/itemBg.png);
		background-size: 100% 100%;
		width: 670upx;
		min-height: 900upx;
	}

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
