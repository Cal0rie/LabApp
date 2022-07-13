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
	.Background{
		z-index: -1;
		position: fixed;
		width: 1000rpx;
		height: 969rpx;
		transform:translate(-400rpx);
		opacity: 0.15;
	}
	
	.title {
		font-size: 45rpx;
		color: #000000;
		font-weight: 600;
	}
</style>
