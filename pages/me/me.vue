<template>
	<view class='Background'/>
	<view>
		<view class="avatar-box">
			<u-avatar size=120 mode='circle' :src="src"></u-avatar>
			<view style="padding-left: 15px;">
				<view style="margin-bottom: 5px; font-size: 20px;font-weight: bold;">{{userID}}</view>
				<view>简介：{{userIntro}}</view>
			</view>
		</view>
		<view class="data-board">
			<view class="singleData" @click="toBeReturned">
				<view class="red">{{toBeReturnedForm.length}}</view>
				<view class="gray">待归还</view>
			</view>
			<view class="singleData" @click="returned">
				<view class="red">{{returnedForm.length}}</view>
				<view class="gray">已归还</view>
			</view>
		</view>
		<view class="cell-board">
			<u-cell-group class='cells' :border="border">
					<u-cell-item :arrow="true" icon="order" title="历史记录" @click="history"></u-cell-item>
					<u-cell-item :arrow="true" icon="error-circle" title="帮助中心"></u-cell-item>
					<u-cell-item :border-bottom="border" :arrow="true" icon="setting" title="设置"></u-cell-item>
				</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				border: false,
				src: '/static/avatar.png',
				userID: "无名",
				userIntro:'该用户未设置简介',
				returnedForm: [],
				toBeReturnedForm: [],
				income: "12.00",		//今日收入
			}
		},
		beforeCreate() {
		
		},
		methods: {
			history(){
				uni.navigateTo({
					url:'../history/history'
				})
			},
			toBeReturned(){
				uni.navigateTo({
					url:""
				})
			},
			returned(){
				uni.navigateTo({
					url:""
				})
			},
		}
	}
</script>

<style scoped>
	.singleData{
		padding: 20rpx;
		margin: 0rpx 50rpx 0rpx 50rpx;
	}
	.avatar-box {
		padding-top: 30rpx;
		padding-right: 120rpx;
		height: 130px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cell-board{
		margin-left: 50rpx;
		margin-right: 50rpx;
		padding: 30rpx;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
		border-radius: 20px;
		box-shadow: 1px 1px 7px 1px #d5d5d5;
	}
	.cells{
		width: 95%;
	}
	.data-board{
		margin-left: 50rpx;
		margin-right: 50rpx;
		margin-bottom: 30rpx;
		padding: 15rpx;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
		border-radius: 20px;
		box-shadow: 1px 1px 7px 1px #d5d5d5;
	}
	.red{
		font-size: 20px;
		color: #72246C;
	}
	.gray{
		color: #B5BCC7;
	}
</style>
