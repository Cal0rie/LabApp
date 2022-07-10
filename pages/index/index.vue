<template>
	<view class="content">
		<view style='margin-top:300rpx' class="text-area">
			<text class="title">{{title1}}</text></view>
			<view style='margin-top:20rpx'
			class="text-area"><text class="title">{{title2}}</text>
		</view>
		<view class='btns'>
		<button class='scan'>
			<p class='chi'>扫码登记信息，开启柜门</p>
			<p class='eng'>Scan QR-Code</p>
			</button>
		<view class='row'>
			<button class='history'>
				<p class='chi'>借用历史</p>
				<p class='eng'>History</p>
			</button>
			<button class='feedback'>
				<p class='chi'>故障上报</p>
				<p class='eng'>Feedback</p>
				</button>
		</view>
		</view>
		
		<!-- <u-row>
			<u-col span='10'>
				<view class='scan'></view>
			</u-col>
			<u-col span='5'>
				<view class='history'></view>
			</u-col>
			<u-col span='5'>
				<view class='feedback'></view>
			</u-col>
		</u-row> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title1: 'Management System',
				title2: '实验室器材管理系统'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	.eng{
		
	}
	.chi{
		margin-bottom: -30rpx;
	}
	.row{
		display: flex;
	}
	.btns{
		
		width: 90%;
		margin-top: 100rpx;
		text-align: left;
	}
	.scan{
		height: 130px;
		background-image: linear-gradient(to bottom right, #4545d3, #6D6BD3);
		width: 100%;
		color: white;
		margin-bottom: 20rpx;
		border-radius: 30rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.history{
		height: 130px;
		background-image: linear-gradient(to bottom right, #7c7eff, #95B7FF);
		width: 50%;
		color: white;
		margin-right: 20rpx;
		border-radius: 30rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.feedback{
		height: 130px;
		background-image: linear-gradient(to bottom right, #2FDF71, #60ea98);
		color: white;
		width: 50%;
		border-radius: 30rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 45rpx;
		color: #000000;
	}
</style>
