<template>
  <div class="movieShow">
    <!-- 
      this.$route 路由的参数对象
      this.$router 路由的导航对象
     -->
    <h4>movieShow---{{ $route.params.mId }}{{ mId }}组件</h4>
  </div>
</template>

<script>
export default {
  name: 'myMovieShow',
  /* 接收路由传递过来的参数 */
  props: ['mId'],
  date() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.movieShow {
  height: 100px;
  background-color: lightskyblue;
}
</style>
