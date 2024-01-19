import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import './assets/common.css'

// 挂载到原型链 组件可直接使用this.axios
Vue.prototype.axios = axios
// 请求根路径(后期url改变时便于更新)
axios.defaults.baseURL = 'ip:port(端口)'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
