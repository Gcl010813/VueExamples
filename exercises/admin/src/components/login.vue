<template>
  <div class="login">
    <form action="javascript:;">
      <table class="table table-bordered table-hover text-center align-middle">
        <thead>
          <tr>
            <th colspan="2">
              <img src="@/assets/login.png" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>账号 :</td>
            <td>
              <input
                type="text"
                class="form-control"
                placeholder="a"
                v-model="userName"
              />
            </td>
          </tr>
          <tr>
            <td>密码 :</td>
            <td>
              <input
                type="text"
                class="form-control"
                placeholder="1"
                v-model="password"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <input
                style="width: 100%"
                class="btn btn-primary"
                type="button"
                value="登录"
                @click="login"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      password: '',
    }
  },
  methods: {
    login() {
      if (this.userName == 'a' && this.password == '1') {
        localStorage.setItem('token', 'xiaoGuo')
        this.$router.push('/main')
      } else {
        localStorage.removeItem('token')
        alert('错误')
        this.userName = ''
        this.password = ''
      }
    },
  },
}
</script>

<style lang="less" scoped>
.login {
  position: relative;
  width: 100%;
  height: 400px;
  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 300px;

    table {
      width: 100%;
      height: 100%;
    }
    img {
      width: 80%;
      height: 100px;
      border-radius: 50px;
    }
  }
}
</style>
