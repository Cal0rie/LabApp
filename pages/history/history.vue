<template>
	<view class='Background'/>
	<view class="content">
		<!-- <view style='margin-top:10rpx' class="text-area"></view>
			<text class="title">{{title1}}</text>
			<view style='margin-top:20rpx'
			class="text-area"><text class="title">{{title2}}</text>
		</view> -->
		<view class="cards">
			<view @click="" class='card' v-for="(item, index) in borrowedEquipment" :key="index">

				<!-- <view class="location-text" style="">设备编号</view> -->
				<view style="flex-direction: row;">
					<view class='id-text'>No.{{item.e_number}}</view>
					<view class="name-text">
					<text>{{item.equipment}}</text>
					<text class='id-text'>
						({{item.e_id}})
					</text>
					</view>
					<!-- <view class="location-text" style="">设备名称</view> -->
					
				</view>
				<view>
					<text class="label-text" style="">所属类别：</text>
					<text class="id-text">{{item.type}}</text>
				</view>
				<view>
					<text class="label-text" style="">生产日期：</text>
					<text class="id-text">{{item.date}}</text>
				</view>
				<view>
					<text class="label-text" style="">借用日期：</text>
					<text class="id-text">{{item.borrowDate}}</text>
				</view>
				<view>
					<text class="label-text" style="">归还日期：</text>
					<text class="id-text">{{item.borrowDate}}</text>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title1: 'Management System',
				title2: '实验室器材管理系统',
				borrowedEquipment: [{
					e_number: '001',
					equipment: '一个设备',
					type: '一类设备',
					e_id: 'YGSB',
					date: '2022-7-13',
					borrowDate: '2022-7-14',
					returnDate: '2022-7-16',
				},
				{
					e_number: '001',
					equipment: '一个设备',
					type: '一类设备',
					e_id: 'YGSB',
					date: '2022-7-13',
					borrowDate: '2022-7-14',
					returnDate: '2022-7-16',
				}]
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
		}
	}
</script>

<style scoped>
	.row {
		display: flex;
	}

	.btns {

		width: 90%;
		margin-top: 100rpx;
		text-align: left;
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
		flex-direction: column;
	}

	.history {
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

	.content {
		margin-top: 20rpx;
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
	
	.title {
		font-size: 45rpx;
		color: #000000;
		font-weight: 600;
	}

	.label-text{
		font-size: 30rpx;
	}
	.id-text {
		font-size: 30rpx;
		color: #818181;
	}
	
	.name-text{
		font-weight: bold;
		font-size: 40rpx;
		margin-bottom: 10rpx;
	}

	.cards {
		width: 90%;
		margin-top: 20rpx;
	}

	.card {
		
		margin-bottom: 20px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: white;
		border-radius: 20px;
		box-shadow: 1px 1px 7px 1px #d5d5d5;
	}
</style>
