<template>
  <div class="about">
    <h3>About组件</h3>
    <div class="nav">
      <!-- 写全部路径 -->
      <router-link to="/about/tab1">tab1</router-link>
      <router-link to="/about/tab2">tab2</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.about {
  height: 200px;
  background-color: lightcyan;
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
