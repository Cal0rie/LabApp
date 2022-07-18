<template>
	<view class='Background'/>
	<view class="content">
		<view style='margin-top:300rpx' class="text-area">
			<text class="title">{{title1}}</text>
			<view style='margin-top:20rpx'
			class="text-area"><text class="title">{{title2}}</text>
			</view>
		</view>
		<view class='btns'>
			<button @click="finish" class='column-btn' style='background-image: linear-gradient(to bottom right, #7c7eff, #95B7FF);'>
				<p class='chi'>归还完成</p>
				<p class='eng'>Finish</p>
			</button>
			<button @click='cancel' class='column-btn' style='background-image: linear-gradient(to bottom right, #2cd66b, #46dc64);'>
				<p class='chi'>取消归还</p>
				<p class='eng'>Cancel</p>
				</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title1: 'Please Return The Equipment',
				title2: '柜门已开启，请归还器材'
			}
		},
		onLoad() {

		},
		methods: {
			finish(){
				uni.navigateTo({
					url:"/pages/return/returnFinish"
				})
			},
			cancel(){
				uni.redirectTo({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style scoped>
	.text-area{
		text-align: center;
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
