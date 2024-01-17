// 1.导包
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'
import Table1 from '@/components/table/Table1.vue'
import Table2 from '@/components/table/Table2.vue'
import MovieShow from '@/components/movie/MovieShow.vue'
// 2.调用函数,把 VueRouter安装为 Vue的插件
Vue.use(VueRouter)

// 3.创建路由实例对象
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' }, // 重定向 强制跳转
    { path: '/home', component: Home },
    {
      path: '/movie',
      redirect: '/movie/m1',
      component: Movie,
      // children: [{ path: ':Mid', component: MovieShow }],
      /* 过于麻烦 可以直接开始路由传参 */
      children: [{ path: ':mId', component: MovieShow, props: true }],
    },
    {
      path: '/about',
      redirect: '/about/tab1', //写全部路径
      component: About,
      children: [
        // 不能写 ‘/’ 否则渲染到主页
        /* 
        path:''时代表默认子路由 等同于redirecr 注意:调用页面要修改为只到调用页面一级的路由
        { path: '', component: Table1 },
        eg <router-link to="/about">tab1</router-link>
         */
        { path: 'tab1', component: Table1 },
        { path: 'tab2', component: Table2 },
      ],
    },
    // { path: '/about/tab1', component: Table1 },
    // { path: '/about/tab2', component: Table2 },
    // 使用嵌套路由
  ],
})

// 全局前置导航守卫 后跟回调函数  发生路由跳转便调用函数  示例
router.beforeEach((to, from, next) => {
  if (from.path == '/main') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/logoin')
    }
  } else {
    // 放行
    next()
  }
})
// 4.向外共享路由实例对象
export default router
