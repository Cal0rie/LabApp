import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import uView from './uni_modules/vk-uview-ui';
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(uView)
  return {
    app
  }
}
// #endif

//引入leancloud
const AV = require('leancloud-storage');
const { Query, User } = AV;
AV.init({
  appId: "9YsunT1salRS9dw4y0gPdgj8-gzGzoHsz",
  appKey: "cbTyCF6sMJApRTHjJ68R0Gqz",
  serverURL: "https://labapi.mistletoe.top"
});

