<template>
	<view class="Background"/>
	<view class="content">
		<view style='margin-top:20%' class="text-area">
			<text style="font-size: 40rpx;">{{title1}}</text>
			<view style='margin-top:20rpx'><text class="title">{{title2}}</text>
			</view>
		</view>
		<view class='btns'>
			<button @click="finish" class='column-btn' style='background-image: linear-gradient(to bottom right, #7c7eff, #95B7FF);'>
				<p class='chi'>拿取完成</p>
				<p class='eng'>Finish</p>
			</button>
			<button @click="cancel" class='column-btn' style='background-image: linear-gradient(to bottom right, #2cd66b, #46dc64);'>
				<p class='chi'>取消拿取</p>
				<p class='eng'>Cancel</p>
				</button>
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
				title1: 'Please Get The Necessary Equipment',
				title2: '柜门已开启，请拿取所需器材'
			}
		},
		onLoad() {

		},
		methods: {
			cancel(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			},
			finish(){
				uni.navigateTo({
					url:"/pages/borrow/borrowFinish"
				})
			}
		}
	}
</script>

<style scoped>
	.text-area{
		text-align: center;
	}
	.eng{
		
	}
	.chi{
		margin-bottom: -30rpx;
	}
	.row{
		display: flex;
		flex-direction: column;
	}
	.btns{
		
		width: 90%;
		margin-top: 100rpx;
		text-align: left;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.title {
		font-size: 45rpx;
		color: #000000;
	}
</style>
