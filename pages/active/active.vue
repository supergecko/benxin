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
						<input focus placeholder="请输入您的姓名" style="font-size: 32upx;" v-model="userName"/>
					</view>
				</view>
				<view class="bottomLine"></view>
			</view>
			<view>
				<view class="inputWarp">
					<view><text style="font-weight: 400;">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</text></view>
					<view style="margin-left: 28upx;">
						<radio-group name="gender" style="font-size: 32upx;transform:scale(0.8);">
							<label style="margin-right: 82upx;">
								<radio value="男" color="#9D887C"/><text>男</text>
							</label>
							<label>
								<radio value="女" color="#9D887C"/><text>女</text>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="bottomLine"></view>
			</view>
			<view>
				<view class="inputWarp">
					<view><text style="font-weight: 400;">出生日期:</text></view>
					<view style="margin-left: 28upx;font-size: 32upx;" @click="selectDatePicker()">
						<input focus placeholder="请选择出生日期" style="font-size: 32upx;" v-model="detail"/>
					</view>
					<date-time-picker ref='date-time' :indicatorStyle='indicatorStyle' :type='type' :datestring='dateString' @change='dateTimeChange'></date-time-picker>
				</view>
				<view class="bottomLine"></view>
			</view>
		</view>
		<view class="bottomBtn" @click="openNew()">立即测算</view>
	</view>
</template>

<script>
    import {mapState} from 'vuex'
	import DateTimePicker from '../../components/bory-dateTimePicker/bory-dateTimePicker.vue'
    export default {
		components: {DateTimePicker},
        computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		data() {
			return {
				detail: '',
				dateString: '',
				type: 'date',
				userName:'',
				userData:''
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
		computed: {
			indicatorStyle() {
				return {
					background: 'rgba(178,139,101,.2)',
					height: '40px',
				};
			}
		},
		methods: {
			//跳转
			openNew(){
				uni.navigateTo({
				    url: '../message/message?id=' + this.userData
				});
			},
			selectDatePicker() {
				this.$refs['date-time'].show();
			},
			dateTimeChange(value) {
				this.detail = value;
				var a = value
				var b = a.replace(/[^\d]/g, '')
				this.userData = b
			},
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
