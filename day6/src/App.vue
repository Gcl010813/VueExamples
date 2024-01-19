<template>
  <div id="app">
    <h1>App根组件</h1>
    <div class="nav">
      <!-- 可以替换 本质还是 a 链接 可以不写 # -->
      <!--       <a href="#/home">Home</a>
      <a href="#/movie">Movie</a>
      <a href="#/about">About</a> -->
      <!-- 
        注意：1  hash地址中,/之后的参数项叫做‘路径参数’ 用this.$route.params访问
        注意：2  hash地址中,?之后的参数项叫做‘查询参数’ 用this.$route.query访问
        注意：3  this.$route中 path是路径参数(仅含有路径) fullPath是完成参数(路径+参数)
      -->
      <router-link to="/home">Home</router-link>
      <router-link to="/movie">Movie</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <hr />
    <!-- vue提供用法 类似于component -->
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Movie from './components/Movie.vue'
import About from './components/About.vue'

export default {
  name: 'MyApp',
  data() {
    return {}
  },
  components: {
    Home,
    Movie,
    About,
  },
}
</script>

<style lang="less" scoped>
#app {
  background-color: gray;
  .nav {
    justify-content: space-around;
    background-color: white;
    a {
      padding: 5px;
      border-radius: 20px;
      background-color: lightsalmon;
    }
  }
}
</style>
