import Vue from 'vue'
import App from './App.vue'

import './assets/common.css'
import 'bootstrap/dist/css/bootstrap.min.css'

/*  全局声明的过滤器和全局声明的自定义指令都要放到main.js */
Vue.directive('color', function (el, binding) {
  el.style.color = binding.value
})

/* 浏览器终端的提示 */
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
