<template>
	<img class='Background' src="/static/校徽.webp">
	<view class="content">
		<!-- <view style='margin-top:10rpx' class="text-area"></view>
			<text class="title">{{title1}}</text>
			<view style='margin-top:20rpx'
			class="text-area"><text class="title">{{title2}}</text>
		</view> -->
		
		<view class='text'>
<!-- 			很抱歉<br>
			为您带来了不佳的使用体验<br> -->
			输入反馈内容<br>
			让我们做得更好<br>
			器材发生故障,请先归还器材
		</view>
		
		<view class="cards">
			<view class='card'>

				<view class='form'>
					<u-form :border-bottom='false' :model='form' v-for='(item,index) in form' :key='index'>
						<u-form-item label-width='130' label="器材所在位置"><u-input @click='positionShow=true' type='select' v-model='item.position'/></u-form-item>
						<u-action-sheet :list="positionList" v-model="positionShow" @click="choosePosition($event,index)"></u-action-sheet>
						<u-form-item label-width='130' label="器材分类"><u-input @click='typeShow=true' type='select' v-model='item.type'/></u-form-item>
						<u-action-sheet :list="typeList" v-model="typeShow" @click="chooseType($event,index)"></u-action-sheet>
						<u-form-item label-width='130' label='器材选择'><u-input v-model='item.equipment'/></u-form-item>
						<u-form-item :border-bottom='false' label-position='top' label-width='130' label='简要描述故障'>
							<u-input type='textarea' v-model='item.use'/></u-form-item>
					</u-form>
				</view>

			</view>
		</view>

		<button @click="submit" class='single-btn'>
			<p class='chi'>提交</p>
			<p style='font-weight: 500;' class='eng'>Submit</p>
		</button>


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
				typeShow: false,
				typeList:[{
					text: "第一类",
				},{
					text:'第二类',
				},
				{
					text: '第三类',
				}],
				title1: 'Management System',
				title2: '实验室器材管理系统',
				form: [{
					e_number: '',
					equipment: '',
					type: '',
					e_id: '',
					date: '',
				},]
			}
		},
		onLoad() {

		},
		methods: {
			chooseType(e,index){
				this.form[index].type = this.typeList[e].text
				
			},
			submit(){
				uni.navigateTo({
					url:'./borrow'
				})
			}
		}
	}
</script>

<style scoped>
	.text {
		font-size: 40rpx;
		font-weight: 600;
		text-align: left;
		align-self: flex-start;
		padding: 20rpx;
		line-height: 60rpx;
	}
	.form{
		 width: 90%;
	}

	.row {
		display: flex;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px;
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
		padding: 25px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: white;
		border-radius: 20px;
		box-shadow: 1px 1px 7px 1px #d5d5d5;
	}
</style>
