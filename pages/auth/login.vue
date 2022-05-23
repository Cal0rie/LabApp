<template>
	<view class="wrap">
		<u-toast ref="uToast" ></u-toast>
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎登录教考系统</view>
			<input class="u-border-bottom" type="number" v-model="tel" placeholder="请输入手机号" />
			<input class="u-border-bottom" type="password" v-model="pas" placeholder="请输入密码" />
			<button :disabled="disabled" @tap="submit" :style="[inputStyle]" class="getCaptcha">登录</button>
			<view class="alternative">
				<view class="password"></view>  <!-- 此处放“找回密码” -->
				<view @tap='reg' class="issue">注册</view>
			</view>
		</view>
		<view class="buttom">
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			disabled: true,
			show: false,
			tel: '',
			pas: '',
		}
	},
	created(){

	},
	computed: {
		inputStyle() {
			let style = {

			};
			if(this.tel&&this.pas) {
				this.disabled= false;
				style.color = "#fff";
				style.backgroundColor = "#f9ae3d";
			}
			return style;
		}
	},
	methods: {
		reg(){
			uni.navigateTo({
				url:'./register'
			})
		},
		submit() {
			for(var i=0;i<store.state.accounts.length;i++){
				console.log(store.state.accounts[i].tel)
				if(this.tel==store.state.accounts[i].tel){
					if(store.state.accounts[i].type=='student'){
						uni.switchTab({
							url:'/pages/student/index'
						})
						break;
					}
					else if(store.state.accounts[i].type=='teacher'){
						uni.navigateTo({
							url:'/pages/teacher/index/index'
						})
						break;
					}
				}
				else{
					console.log('no')
				}
			}
			console.log('循环结束')
			uni.navigateTo({
				url:'/pages/auth/identity'
			})
			
			// if(this.$u.test.mobile(this.tel)) {
			// 	uni.navigateTo({
			// 		url:'../auth/identity'
			// 	})
				
			// }
			// else{
			// 	this.$refs.uToast.show({
			// 						type:'error' ,
			// 						message:'请输入正确手机号和密码',
									
			// 					})
			// }
		}
	}
};
</script>

<style lang="scss" scoped>
.u-border-bottom{
	margin-bottom: 40rpx !important;
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
			background-color: rgb(253, 243, 208);
			color: $u-tips-color;
			border: none;
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
			justify-content:space-between;
			
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

