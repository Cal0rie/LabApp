import App from './App'
import store from './store'

// #ifdef VUE3
import uView from './uni_modules/vk-uview-ui';
//import Vant from '@vant/weapp'
import {createSSRApp} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(uView)
	app.use(store)
	return {
		app
	}
}
// #endif

// 不使用vue3的情况
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif
