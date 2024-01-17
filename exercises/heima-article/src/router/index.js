import Vue from 'vue'
import VueRouter from 'vue-router'
/* 组件 */
import Home from '@/views/home/Home.vue'
import User from '@/views/user/User.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/user', component: User }
  ]
})

export default router
