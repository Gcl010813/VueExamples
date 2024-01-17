<template>
    <div class="LeftSlot">
        <h3>LeftSlot组件</h3>
        <hr>
    </div>
</template>

<script>
export default {
    // 带上名字 组件名称变成自定义名字 用于调试
    name: 'MyLeftSlot',
}
</script>

<style lang="less" scoped>
.LeftSlot {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 90%;
    background-color: rgb(241, 240, 144);
}
</style>