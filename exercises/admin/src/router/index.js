import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/login.vue'
import Main from '@/components/main.vue'
import UserVue from '@/components/meau/user.vue'
import UserDetailVue from '@/components/meau/userDetail.vue'
import AuthorityVue from '@/components/meau/authority.vue'
import ItemsVue from '@/components/meau/items.vue'
import OrdersVue from '@/components/meau/orders.vue'
import SystemVue from '@/components/meau/system.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/main',
      redirect: '/main/user',
      component: Main,
      children: [
        { path: 'user', component: UserVue },
        { path: 'authority', component: AuthorityVue },
        { path: 'items', component: ItemsVue },
        { path: 'order', component: OrdersVue },
        { path: 'system', component: SystemVue },
        { path: 'userD/:id', component: UserDetailVue, props: true },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.path != '/login') {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
