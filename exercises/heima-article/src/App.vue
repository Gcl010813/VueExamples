<template>
  <div id="app">
    <!-- 路由占位符 <router-view/>也可  -->
    <router-view></router-view>

    <!-- 底部导航 -->
    <van-tabbar route placeholder>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'myApp'
}
</script>

<style lang="less" scoped></style>
