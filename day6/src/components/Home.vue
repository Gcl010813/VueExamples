<template>
  <div class="home">
    <h3>Home组件</h3>
    <hr />
    <button @click="toUrl" type="button" class="btn btn-info">
      编程式导航测试-点击
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toUrl() {
      /* 有历史记录 */
      this.$router.push('/movie/m2')
      /* 替换历史记录 */
      // this.$router.replace('/movie/m2')
      /* 历史记录前进后退 */
      // this.$router.go(-2)
    },
  },
}
</script>

<style lang="less" scoped>
.home {
  height: 200px;
  background-color: lightblue;
}
</style>
