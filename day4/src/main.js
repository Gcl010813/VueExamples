//导入vue包
import Vue from 'vue'
//导入App.vue根组件 把其中模板结构渲染到index.html中
import App from './App.vue'

/* 全局组件 */
import Middle from './components/Middle.vue'
Vue.component('MyMiddle', Middle)

Vue.config.productionTip = false

/* 创建实例对象 */
new Vue({
    //把render函数指定的组件渲染到index.html中
    render: h => h(App),
    //$mount和el属性效果相同
}).$mount('#app')

/* 也可以 */
/* new Vue({
    el: '#app',
    render: h => h(App),
}) */
