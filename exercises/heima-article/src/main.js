import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* 通用样式 */
import '@/assets/common.css'
/* Vant组件 */
import Vant from 'vant'
/* 使用less 可以覆盖原本样式 */
import 'vant/lib/index.less'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
