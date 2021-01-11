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
						<td>水</td>
						<td>木</td>
						<td>火</td>
						<td>土</td>
						<td>金</td>
					</tr>
					<tr>
						<td>3</td>
						<td>2</td>
						<td>1</td>
						<td>4</td>
						<td>6</td>
					</tr>
					<tr>
						<td>弱</td>
						<td>弱</td>
						<td>过旺</td>
						<td>弱</td>
						<td>过旺</td>
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
</script>

<style>
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
