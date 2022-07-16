<template>
	<img class='Background' src="/static/校徽.webp">
	<view class="content">
		<view style='margin-top:300rpx' class="text-area">
			<text class="title">{{title1}}</text></view>
			<view style='margin-top:20rpx'
			class="text-area"><text class="title">{{title2}}</text>
		</view>
		<view class='btns'>
		<button @click="btnScan" class='scan'>
			<p class='chi'>扫码登记信息，开启柜门</p>
			<p class='eng'>Scan QR-Code</p>
			</button>
		<view class='row'>
			<button class='history'>
				<p class='chi'>借用历史</p>
				<p class='eng'>History</p>
			</button>
			<button @click='feedback' class='feedback'>
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
			btnScan(){
				uni.navigateTo({
					url:'/pages/index/choose'
				})
			},
			feedback(){
				uni.navigateTo({
					url:'/pages/feedback/feedback'
				})
			}
		}
	}
</script>

<style scoped>
	.eng{
		margin-left: 15rpx;
	}
	.chi{
		font-weight: 600;
		margin-left: 15rpx;
		margin-bottom: -30rpx;
	}
	.row{
		width: 100%;
		display: flex;
		justify-content : space-between;
	}
	.btns{
		width: 90%;
		margin-top: 100rpx;
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
		align-items: flex-start;
		flex-direction: column;
	}
	.history{
		height: 130px;
		background-image: linear-gradient(to bottom right, #7c7eff, #95B7FF);
		width: 50%;
		margin-right: 15px;
		color: white;
		border-radius: 30rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: flex-start;
	}
	.feedback{
		height: 130px;
		background-image: linear-gradient(to bottom right, #2cd66b, #46dc64);
		color: white;
		width: 50%;
		border-radius: 30rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: flex-start;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px;
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

</style>
