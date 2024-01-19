<template>
  <div class="main">
    <Header></Header>
    <!-- 左侧显示区域 -->
    <div class="box">
      <div class="left">
        <ul>
          <li>
            <router-link to="/main/user">用户管理</router-link>
          </li>
          <li>
            <router-link to="/main/authority">权限管理</router-link>
          </li>
          <li>
            <router-link to="/main/items">商品管理</router-link>
          </li>
          <li>
            <router-link to="/main/order">订单管理</router-link>
          </li>
          <li>
            <router-link to="/main/system">系统设置</router-link>
          </li>
        </ul>
      </div>
      <!-- 右侧显示区域 -->
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'
export default {
  data() {
    return {}
  },
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="less" scoped>
.box {
  position: relative;
  height: 600px;
  .left {
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background-color: lightgray;

    ul {
      padding-left: 0;
      li {
        height: 50px;
        line-height: 50px;
        background-color: white;
        margin-bottom: 10px;
        a {
          display: block;
          width: 100%;
          height: 100%;
          font-size: 20px;
          font-weight: 800;
          background-color: blanchedalmond;
        }
      }
    }
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    background-color: lightgreen;
  }
}
</style>
