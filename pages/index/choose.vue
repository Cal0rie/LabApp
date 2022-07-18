<template>
	<view class="Background"/>
	<view class="content">
		<view class='title-area'>
			<text class="" style="font-size: 45rpx;">{{title1}}</text>
			<text class="title">{{title2}}</text>
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
		position: absolute;
		bottom: 20%;
		width: 90%;
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
