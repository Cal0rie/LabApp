<template>
	<view class="Background"/>
	<view class="content">
		<view style='margin-top:300rpx' class="text-area">
			<text class="title">{{title1}}</text></view>
			<view style='margin-top:20rpx'
			class="text-area"><text class="title">{{title2}}</text>
		</view>
		<view class='btns'>
			<button class='column-btn' @click="btnBorrow" style='background-image: linear-gradient(to bottom right, #7c7eff, #95B7FF);'>
				<p class='chi'>借用</p>
				<p class='eng'>Borrow</p>
			</button>
			<button class='column-btn' @click="btnReturn" style='background-image: linear-gradient(to bottom right, #2cd66b, #46dc64);'>
				<p class='chi'>归还</p>
				<p class='eng'>Return</p>
				</button>
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
			btnBorrow(){
				uni.navigateTo({
					url:'/pages/borrow/borrowRegister'
				})
			},
			btnReturn(){
				uni.navigateTo({
					url:"/pages/return/return"
				})
			}
		}
	}
</script>

<style scoped>
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
