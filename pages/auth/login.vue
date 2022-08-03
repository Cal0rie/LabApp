<template>
	<view class='Background' />
	<view class="wrap">
		<u-toast ref="uToast"></u-toast>
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎登录</view>
			<input class="u-border-bottom" type="number" v-model="loginForm.username" placeholder="请输入学号/工号" />
			<input class="u-border-bottom" type="password" v-model="loginForm.password" placeholder="请输入密码" />
			<view class="code-input">
				<input class="u-border-bottom" type="number" v-model="loginForm.code" placeholder="请输入验证码" />
				<img :src="codeUrl" @click="getCode" class="login-code-img" />
			</view>

			<button :disabled="disabled" @tap="submit" :style="[inputStyle]" class="getCaptcha">登录</button>
			<view class="alternative">
				<view class="password"></view> <!-- 此处放“找回密码” -->
				<view @tap='reg' class="issue">注册</view>
			</view>
		</view>
		<view class="buttom">
		</view>
	</view>
</template>

<script>
	import {
		getCodeImg,
		login
	} from "../../api/login.js"
	import {
		getToken,
		setToken,
		removeToken
	} from '/utils/auth'
	import store from '@/store/index.js'
	export default {
		data() {
			return {
				disabled: true,
				show: false,

				codeUrl: "",
				captchaOnOff: true,
				loginForm: {
					username: "",
					password: "",
					//rememberMe: false,
					code: "",
					uuid: ""
				},
			}
		},
		created() {
			this.getCode()
		},
		computed: {
			inputStyle() {
				let style = {

				};
				if (this.loginForm.password && this.loginForm.username && this.loginForm.code) {
					this.disabled = false;
					style.color = "#ffffff";
					style.backgroundColor = "#72246C";
				}
				return style;
			}
		},
		methods: {
			getCode() {
				getCodeImg().then(res => {
					this.captchaOnOff = res.captchaOnOff === undefined ? true : res.captchaOnOff;
					if (this.captchaOnOff) {
						let imgUrl = res.data.img;
						imgUrl = imgUrl.replace(/[\r\n]/g, "");
						this.codeUrl = "data:image/gif;base64," + imgUrl
						this.loginForm.uuid = res.data.uuid;
					}
				});
			},
			reg() {
				uni.navigateTo({
					url: './register'
				})
			},
			Login1(userInfo) {
				const username = userInfo.username.trim()
				const password = userInfo.password
				const code = userInfo.code
				const uuid = userInfo.uuid
				return new Promise((resolve, reject) => {
					login(username, password, code, uuid).then(res => {
						console.log(res)
						
						//判断是否成功
						var icon = ''
						if (res.data.code == 200) {
							icon = 'success'
							
							//设置token
							setToken(res.data.token)
							store.commit('SET_TOKEN', res.data.token)
						}
						else{
							icon = 'error'
							this.loginForm.code = ''		//登录失败，清空验证码
							this.getCode()
						}
						uni.showToast({
							icon: icon,
							title: res.data.msg
						}).then(() => {
							if( res.data.code == 200 ){
								uni.switchTab({
									url:'/pages/index/index'
								})
							}
						})
			
						//resolve()
					}).catch(error => {
						//reject(error)
					})
				})
			},
			submit() {
				// console.log(this.loginForm)
				// login(this.loginForm).then(res => {
				// 	console.log(res)
				// 	if (res.data.code != 200) {

				// 	}
				// })
				//store.dispatch("Login", this.loginForm).then(() => {	
				this.Login1(this.loginForm).then((res) => {
					console.log(res)
					//this.getRouter();
					// this.$router.push({ path: this.redirect || "/" }).catch(()=>{
					// });
				}).catch(() => {
					this.loading = false;
					if (this.captchaOnOff) {
						this.getCode();
					}

					uni.showToast({
						icon: 'error',
						title: '请核对账号密码'
					})
					this.loginForm.code = ''
				});


				// if(this.$u.test.mobile(this.tel)) {
				// 	uni.navigateTo({
				// 		url:'../auth/identity'
				// 	})

				// }
				// else{

				// }
			}
		}
	};
</script>

<style lang="scss" scoped>
	.code-input {
		display: flex;
		justify-content: space-between;
	}

	.login-code-img {
		height: 80rpx;
		width: 200rpx;
	}

	.u-border-bottom {
		margin-bottom: 50rpx !important;
	}

	.wrap {
		font-size: 28rpx;

		.content {
			width: 600rpx;
			margin: 80rpx auto 0;

			.title {
				text-align: left;
				font-size: 60rpx;
				font-weight: 500;
				margin-bottom: 100rpx;
			}

			input {
				text-align: left;
				margin-bottom: 10rpx;
				padding-bottom: 6rpx;
			}

			.getCaptcha {
				background-color: #ecdaeb;
				color: #ffffff;
				border: none;
				border-radius: 20rpx;
				font-size: 30rpx;
				padding: 12rpx 0;

				&::after {
					border: none;
				}
			}

			.alternative {
				color: $u-tips-color;
				display: flex;
				justify-content: space-between;
				margin-top: 30rpx;
			}
		}

		.buttom {
			.loginType {
				display: flex;
				padding: 350rpx 150rpx 150rpx 150rpx;
				justify-content: space-between;

				.item {
					display: flex;
					flex-direction: column;
					align-items: center;
					color: $u-content-color;
					font-size: 28rpx;
				}
			}

			.hint {
				padding: 20rpx 40rpx;
				font-size: 20rpx;
				color: $u-tips-color;
			}
		}
	}
</style>
