<template>
	<view class="Background"></view>
	<view class="content">
		<!-- <view style='margin-top:10rpx' class="text-area"></view>
			<text class="title">{{title1}}</text>
			<view style='margin-top:20rpx'
			class="text-area"><text class="title">{{title2}}</text>
		</view> -->
		<view class="title">欢迎注册</view>
		<view class="cards">
			<view class='card'>

				<view class='form'>
					<u-form :border-bottom='false'>
						<u-form-item label-width='130' label="身份选择">
							<u-input @click="typeChoose()" type='select' v-model='form.identify' />
							<!-- <u-action-sheet :list="typeList" v-model="typeShow" @click="chooseType($event,index)">
							</u-action-sheet> -->
						</u-form-item>
						<u-form-item label-width='130' label='姓名'>
							<u-input v-model='form.name' />
						</u-form-item>
						<u-form-item label-width='130' label='学号/工号'>
							<u-input type='number' v-model='form.id' />
						</u-form-item>
						<u-form-item label-width='130' label='手机号'>
							<u-input type="number" v-model='form.phoneNum' />
						</u-form-item>
						<u-form-item label-width='130' label='验证码'>
							<u-input type="number" v-model='form.code' />
						</u-form-item>
						<u-form-item label-width='130' label='密码'>
							<u-input type='password' v-model='form.password' />
						</u-form-item>
						<u-form-item :border-bottom='false' label-width='130' label='确认密码'>
							<u-input type='password' v-model='form.confirmPas' />
						</u-form-item>
					</u-form>
				</view>
			</view>
		</view>

		<button @click="submit" class='single-btn' style="background-image: none;background-color: #72246C;">
			<p class='chi'>注册</p>
			<p class='eng'>Register</p>
		</button>
		<u-toast ref="uToast" />
	</view>

</template>

<script>
	export default {
		data() {
			return {
				typeList: ['教师', '学生'],
				form: {
					identify: '',
					name: '',
					id: '',
					phoneNum: '',
					code: '',
					password: '',
					confirmPas: '',
				},
			}
		},
		onLoad() {

		},
		methods: {
			typeChoose() {
				uni.showActionSheet({
					itemList: this.typeList,
					success: (res) => {
						this.form.identify = this.typeList[res.tapIndex]
					},
					fail: (res) => {
						console.log(res.errMsg);
					},
				})
			},
			symbol(i) {
				return Symbol(i)
			},
			removeForm(e) {
				this.form.splice(e, 1);
			},
			submit() {
				var judge = true
				for (var i in this.form) {
					if (!this.form[i])
						judge = false
				}
				if (judge) {
					console.log(this.form)
					this.$refs.uToast.show({
						title: '注册完成',
						type: 'primary',
						duration: '1000',
						callback: ()=>{
							uni.switchTab({
								url:'../index/index'
							})
						}
					})
				} else {
					this.$refs.uToast.show({
						title: '请完整填写表单',
						type: 'warning',
					})
					judge = true
				}
			}
		}
	}
</script>

<style scoped>
	.title {
		text-align: left;
		font-size: 60rpx;
		font-weight: 500;
		margin-bottom: 100rpx;
		width: 600rpx;
		margin: 80rpx auto 30rpx;
	}

	.remove {
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
		width: 88%;
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
