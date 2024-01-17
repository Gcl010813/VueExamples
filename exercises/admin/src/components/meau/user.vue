<template>
  <div class="user">
    <h3>user组件</h3>
    <div class="mian">
      <table class="table table-bordered table-hover text-center align-middle">
        <thead>
          <tr class="table-info">
            <th>id</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>头衔</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in userLists" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.position }}</td>
            <td>
              <button
                class="btn btn-info"
                @click="$router.push('/main/userD/' + item.id)"
              >
                详情
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userLists: [
        { id: 1, name: 'xiaoGuo', age: 23, position: '奴仆' },
        { id: 2, name: 'xiaoZhao', age: 18, position: '娘娘' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.user {
  height: 100%;
}
</style>
