<template>
  <div class="movie">
    <h3>Movie组件</h3>
    <div class="nav">
      <!-- 写全部路径 -->
      <router-link to="/movie/m1">Mov1</router-link>
      <router-link to="/movie/m2">Mov2</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.movie {
  height: 200px;
  background-color: lightcoral;
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
