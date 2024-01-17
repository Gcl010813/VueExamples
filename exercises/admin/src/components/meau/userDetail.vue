<template>
  <div class="userInfo">
    <button type="button" class="btn btn-primary" @click="$router.back()">
      后退
    </button>

    <table class="table table-bordered text-center align-middle">
      <tr>
        <td>id</td>
        <td>{{ userInfo.id }}</td>
      </tr>
      <tr>
        <td>姓名</td>
        <td>{{ userInfo.name }}</td>
      </tr>
      <tr>
        <td>年龄</td>
        <td>{{ userInfo.age }}</td>
      </tr>
      <tr>
        <td>头衔</td>
        <td>{{ userInfo.position }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      userLists: [
        { id: 1, name: 'xiaoGuo', age: 23, position: '奴仆' },
        { id: 2, name: 'xiaoZhao', age: 18, position: '娘娘' },
      ],
      userInfo: {},
    }
  },
  created() {
    this.userInfo = this.userLists.find((item) => (item.id = this.id))
  },
}
</script>

<style></style>
