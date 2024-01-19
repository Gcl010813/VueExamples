import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/common.css'
/* 可简写  import router from './router'  若未指定具体文件 自动寻找文件夹下的index.js文件 */
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  /* 若想使用路由 先挂载  名称相同可简写一个*/
  router: router,
}).$mount('#app')
