<template>
	<img class='Background' src="/static/校徽.png">
	<view class="content">
		<!-- <view style='margin-top:10rpx' class="text-area"></view>
			<text class="title">{{title1}}</text>
			<view style='margin-top:20rpx'
			class="text-area"><text class="title">{{title2}}</text>
		</view> -->
		<view class='center-text'>
			请进行借用设备登记
		</view>
		<img class='icon' src='/static/add.png' @click='addForm'>
		<view class="cards">
			<view class='card' v-for='(item,index) in form' :key='symbol(index)'>
				
				<view class='form'>
					<u-form :border-bottom='false'>
						<u-form-item label-width='130' label="器材分类">
							<u-input @click="typeShow = true" type='select' v-model='item.type' />
							<u-action-sheet :list="typeList" v-model="typeShow" @click="chooseType($event,index)">
							</u-action-sheet>
						</u-form-item>
						<u-form-item label-width='130' label='器材选择'>
							<u-input v-model='item.equipment' />
						</u-form-item>
						<u-form-item :border-bottom='false' label-position='top' label-width='130' label='主要用途'>
							<u-input type='textarea' v-model='item.use' />
						</u-form-item>
					</u-form>
				</view>
				<img class='remove' src='/static/remove.png' @click='removeForm(index)'>
			</view>
		</view>

		<button @click="submit" class='single-btn'>
			<p class='chi'>提交</p>
			<p style='font-weight: 500;' class='eng'>Submit</p>
		</button>
	</view>
	<u-toast ref="uToast" />
</template>

<script>
	// // #ifdef MP-WEIXIN
	// const AV = require('/libs/av-core-min.js');
	// const adapters = require('/libs/leancloud-adapters-weapp.js');
	
	// AV.setAdapters(adapters);
	// AV.init({
	// 	appId: "9YsunT1salRS9dw4y0gPdgj8-gzGzoHsz",
	// 	appKey: "cbTyCF6sMJApRTHjJ68R0Gqz",
	// 	serverURL: "https://labapi.mistletoe.top"
	// });
	// // #endif
	export default {
		data() {
			return {
				typeShow: false,
				//typeList: ['第一类', '第二类', '第三类'],
				typeList: [{
						text: "第一类",
					},
					{
						text: '第二类',
					},
					{
						text: '第三类',
					}
				],
				title1: 'Management System',
				title2: '实验室器材管理系统',
				form: [{
					//e_number: '',
					equipment: '',
					type: '',
					//e_id: '',
					use: '',
				}, ]
			}
		},
		onLoad() {

		},
		methods: {
			addForm() {
				const temp = {
					//e_number: '',
					equipment: '',
					type: '',
					//e_id: '',
					use: '',
				}
				this.form.push(temp)
			},
			chooseType(e, index) {
				console.log("你选择了" + e)
				console.log("这是第" + index + '张卡片')
				this.form[index].type = this.typeList[e].text
				// uni.showActionSheet({
				// 	itemList: this.typeList,
				// 	success: function(res) {
				// 		const itemList = ['第一类', '第二类', '第三类']
				// 		console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
				// 		console.log(itemList[res.tapIndex])
				// 	},
				// 	fail: function(res) {
				// 		console.log(res.errMsg);
				// 	},
				// })

				//this.form[index].type = this.typeList[e].text
			},
			symbol(i){
			   return Symbol(i)
			},
			removeForm(e){
				this.form.splice(e,1);
			},
			submit() {
				var judge = true
				for (var i = 0; i < this.form.length; i++) {
					if (!this.form[i].type || !this.form[i].equipment || !this.form[i].use)
						judge = false
				}

				if (judge) {
					console.log(this.form)
					// AV.Cloud.run("writeLog", {
					// 	operate: "borrow"
					// })
					this.$refs.uToast.show({
						title: '登记完成',
						type: 'primary',
						url: '/pages/borrow/borrow',
					})
				} else {
					this.$refs.uToast.show({
						title: '请完整填写表单',
						type: 'warning',
					})
					judge = true
				}

				console.log(this.form)
			}
		}
	}
</script>

<style scoped>
	.remove{
		width: 55rpx;
		height: 55rpx;
		align-self: flex-end;
	}
	.icon {
		position: fixed;
		width: 75rpx;
		height: 75rpx;
		right: 80rpx;
		top: 47rpx;
	}

	.form {
		width: 100%;
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

	.label-text {
		font-size: 30rpx;
	}

	.id-text {
		font-size: 30rpx;
		color: #818181;
	}

	.name-text {
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
