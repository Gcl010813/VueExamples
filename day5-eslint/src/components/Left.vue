<template>
  <div class="left">
    <h3>left组件</h3>
  </div>
</template>

<script>
export default {
  name: 'myLeft',
  methods: {
    async ceshi() {
      const { data: res } = await this.axios.get('/.../..')
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.left{
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  background-color: lightblue;
}
</style>
