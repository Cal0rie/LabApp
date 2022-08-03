//import request from '@/utils/request'
const baseURL = "http://8.141.155.39:8091"
// 登录方法
export function login(username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return uni.request({
  	url: baseURL+"/login",
	method:"POST",
	header:{
		isToken: false
	},
	data: data
  })
}

// 注册方法
export function register(data) {
  return uni.request({
    url: '/register',
    header: {
      isToken: false
    },
    method: 'POST',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  return uni.request({
    url: '/getInfo',
    method: 'GET'
  })
}

// 退出方法
export function logout() {
  return uni.request({
    url: '/logout',
    method: 'POST'
  })
}

// 获取验证码
export function getCodeImg() {
  return uni.request({
    url: baseURL+'/captchaImage',
    header: {
      isToken: false
    },
    method: 'GET',
    timeout: 20000
  })
}