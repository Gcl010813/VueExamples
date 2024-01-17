<template>
  <div id="app">
    <h1>App根组件</h1>
    <hr>
    <div class="box-components">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Left from './components/Left.vue'
import Right from './components/Right.vue'
export default {
  data() {
    return {}
  },
  components: {
    Left,
    Right
  }
}
</script>

<style lang="less" scoped>
#app {
  height: 500px;
  background-color: lightgray;
  .box-components {
    position: relative;
  }
}
</style>
