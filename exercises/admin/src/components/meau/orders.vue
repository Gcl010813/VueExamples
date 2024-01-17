<template>
  <div class="order">
    <h3>order组件</h3>
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
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>
              <router-link to="...">
                <button type="button" class="btn btn-info">详情</button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.order {
  height: 100%;
}
</style>
