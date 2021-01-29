<template>
	<view class="bg">
		<view class="midItem">
			<view class="itemHeader">
				<image src="../../static/home/leftyun.png" style="width: 60upx;height: 32upx;margin-right: 35upx;"></image>
				<view>完善信息</view>
				<image src="../../static/home/rightyun.png" style="width: 60upx;height: 32upx;margin-left: 35upx;"></image>
			</view>

			<view class="itemInput">
				<view class="inputWarp">
					<view><text style="font-weight: 400;">您的姓名:</text></view>
					<view style="margin-left: 28upx;">
						<input placeholder="请输入您的姓名" style="font-size: 32upx;" v-model="newUserName" />
					</view>
				</view>
				<view class="bottomLine"></view>
			</view>
			<view>
				<view class="inputWarp">
					<view><text style="font-weight: 400;">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</text></view>
					<view style="margin-left: 28upx;">
						<radio-group name="gender" style="font-size: 32upx;transform:scale(0.8);" @change="radioChange">
							<label style="margin-right: 82upx;">
								<radio value="男" color="#9D887C" /><text>男</text>
							</label>
							<label>
								<radio value="女" color="#9D887C" /><text>女</text>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="bottomLine"></view>
			</view>
			<view>
				<view class="inputWarp">
					<view><text style="font-weight: 400;">出生日期:</text></view>
					<view style="margin-left: 28upx;font-size: 32upx;" @click="showDateDialog(1, 'number')">
						<view  style="font-size: 32upx;color: #B28B65;" v-if="detail==''">请选择出生日期</view>
						<view  style="font-size: 32upx;" v-else>{{detail}}</view>
					</view>
					
					<zan-calendar
						:date="date" 
						:time="time" 
						:isHourShow="isHourShow" 
						:isMinShow="isMinShow" 
						:show="dateDialog" 
						:lunarType = "lunarType"
						@closeDialog="closeDialog" 
						@confirmDialog="confirmDialog"
					>
					</zan-calendar>
				</view>
				<view class="bottomLine"></view>
			</view>
		</view>
		<view class="bottomBtn" @click="openNew()">立即测算</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import zanCalendar from '../..//components/quick-calendar/calendar'
	export default {
		components: {
			zanCalendar
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		data() {
			return {
				detail: '',
				newUserName: '', //用户名字
				userData: '',//日期
				gender: '' ,//性别
				
				date: '2019-01-22',//日期
				time: '13-26',//时间
				isHourShow: false,//是否显示时辰（小时）
				isMinShow: false,//是否显示分钟
				lunarType: 'number', //年月日显示方式
				dateDialog: false //是否弹出日历组件
			}
		},
		//  onLoad() {
		//      if (!this.hasLogin) {
		//          uni.showModal({
		//              title: '未登录',
		//              content: '您未登录，需要登录后才能继续',
		//              /**
		//               * 如果需要强制登录，不显示取消按钮
		//               */
		//              showCancel: !this.forcedLogin,
		//              success: (res) => {
		//                  if (res.confirm) {
		// /**
		//  * 如果需要强制登录，使用reLaunch方式
		//  */
		//                      if (this.forcedLogin) {
		//                          uni.reLaunch({
		//                              url: '../login/login'
		//                          });
		//                      } else {
		//                          uni.navigateTo({
		//                              url: '../login/login'
		//                          });
		//                      }
		//                  }
		//              }
		//          });
		//      }
		//  },
		methods: {
			//跳转
			openNew() {
				if (this.newUserName === '') {
					uni.showToast({
						icon: 'none',
						title: '请输入您的姓名'
					});
					return;
				}
				if (this.gender === '') {
					uni.showToast({
						icon: 'none',
						title: '请选择您的性别'
					});
					return;
				}
				if (this.userData === '') {
					uni.showToast({
						icon: 'none',
						title: '请选择您的出生日期'
					});
					return;
				}
				uni.navigateTo({
					url: '../message/message?id=' + this.userData + '&userName=' + this.newUserName + '&gender=' + this.gender
				});
			},
			//单选框（获取性别）		
			radioChange(evt) {
				this.gender = evt.detail.value
			},
			//展示三种不同的选择调度
			showDateDialog: function(type, lunarType) {
				switch(type){
					case 1:
						this.isHourShow = false;
						this.isMinShow = false;
					break;
					case 2:
						this.isHourShow = true;
						this.isMinShow = false;
					break;
					case 3:
						this.isHourShow = true;
						this.isMinShow = true;
					break;
				}
			
				this.dateDialog = true;
				this.lunarType = lunarType;
			},
			//在为确认是就点击了取消，直接关闭弹窗
			closeDialog: function() {
				this.dateDialog = false;
			},
			//点击了确认后的相关操作，并再次点击确认时间后的返回，这里可以写自己的操作了
			confirmDialog: function(e) {
				console.log(e.date);
				this.detail = e.date;
				var a = e.date
				var b = a.replace(/[^\d]/g, '')
				this.userData = b
				console.log(this.userData)
				this.dateDialog = false
				// alert("选择的时间是：" + e.time);
			}
		}
	}
</script>

<style>
	.bg {
		background-image: url(../../static/home/bg.png);
		background-size: 100% 100%;
		width: 750upx;
	}

	.bottomBtn {
		background-image: url(../../static/home/button.png);
		width: 370upx;
		height: 98upx;
		margin: 0 auto;
		background-size: 100% 100%;
		line-height: 90upx;
		text-align: center;
		font-size: 34upx;
		color: #090500;
		font-weight: 400;
		margin-top: -68upx;
	}

	.midItem {
		background-image: url(../../static/home/midbg.png);
		background-size: 100% 100%;
		width: 674upx;
		height: 634upx;
		margin: 0 auto;
		margin-top: 255upx;
	}

	.itemHeader {
		font-size: 40upx;
		font-family: PingFang SC;
		color: #A07348;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 60upx;
	}

	.inputWarp {
		display: flex;
		font-size: 32upx;
		color: #331C01;
		width: 560upx;
		margin: 0 auto;
		padding-top: 49upx;
		font-family: PingFang SC;
	}

	.uni-input-placeholder {
		color: #B28B65;
	}

	.bottomLine {
		width: 558upx;
		height: 1upx;
		background-color: #B28B65;
		margin: 0 auto;
		margin-top: 36upx;
	}
</style>
