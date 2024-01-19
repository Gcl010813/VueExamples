<template>
  <div class="head">
    <h1>小郭后台管理系统</h1>
    <hr />
    <div class="user">
      <div class="userImg">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="logout" @click="toLogin">logout</div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  methods: {
    toLogin() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="less" scoped>
.head {
  background-color: lightblue;
  .user {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100px;
    margin-right: 20px;
    .userImg {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      text-align: center;
      line-height: 100px;
      border: 1px solid gray;
      margin-right: 20px;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .logout {
      width: 100px;
      height: 50px;
      line-height: 50px;
      border-radius: 20px;
      border: 1px solid gray;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
