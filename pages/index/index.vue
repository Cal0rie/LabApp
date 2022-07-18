<template>
	<view class='Background' />
	<view class="content">
		<view class='title-area'>
			<text class="" style="font-size: 45rpx;">{{title1}}</text>
			<text class="title">{{title2}}</text>
		</view>
		<view class='btns'>
			<button @click="btnScan" class='scan'>
				<p class='chi'>扫码登记信息，开启柜门</p>
				<p class='eng'>Scan QR-Code</p>
			</button>
			<view class='row'>
				<button @click="history" class='history'>
					<p class='chi'>借用历史</p>
					<p class='eng'>History</p>
				</button>
				<button @click='feedback' class='feedback'>
					<p class='chi'>故障上报</p>
					<p class='eng'>Feedback</p>
				</button>
			</view>
		</view>
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
			btnScan() {
				uni.navigateTo({
					url: '/pages/index/choose'
				})
			},
			feedback() {
				uni.navigateTo({
					url: '/pages/feedback/feedback'
				})
			},
			history() {
				uni.navigateTo({
					url: '/pages/history/history'
				})
			}
		}
	}
</script>

<style scoped>
	.eng {
		margin-left: 15rpx;
	}

	.chi {
		font-weight: bold;
		margin-left: 15rpx;
		margin-bottom: -30rpx;
	}

	.row {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	

	.scan {
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

	.history {
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

	.feedback {
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
</style>
