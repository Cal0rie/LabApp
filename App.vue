<style lang="scss">
	@import "./uni_modules/vk-uview-ui/index.scss";
</style>
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.center-text {
		font-size: 50rpx;
		font-weight: 600;
		text-align: left;
		align-self: flex-start;
		padding: 20rpx;
	}
	.Background{
		z-index: -1;
		position: fixed;
		width: 100%;
		height: 100%;
		opacity: 0.15;
		background: url(https://s1.328888.xyz/2022/07/18/lLpOI.png) no-repeat;
		background-position: 160% 0%;
		background-size: 145%;
	}
	
	.title {
		font-size: 45rpx;
		color: #000000;
		font-weight: 600;
	}
	
	.single-btn {
		height: 200rpx;
		background-image: linear-gradient(to bottom right, #2cd66b, #46dc64);
		color: white;
		text-align: left;
		width: 50%;
		border-radius: 30rpx;
		border-style: none;
		display: flex;
		justify-content: center;
		flex-direction: column;
		font-weight: 600;
	}
	.column-btn{
		margin-bottom: 30rpx;
		height: 130px;
		color: white;
		width: 70%;
		border-radius: 30rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: flex-start;
	}
	.eng{
		margin-left: 15rpx;
	}
	.chi{
		font-weight: 600;
		margin-left: 15rpx;
		margin-bottom: -30rpx;
	}
</style>
