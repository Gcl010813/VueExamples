<template>
    <div class="Right">
        <h3>Right组件</h3>
        <hr>
    </div>
</template>

<script>
export default {
    // 带上名字 组件名称变成自定义名字 用于调试
    name: 'MyRight',
    deactivated() {
        console.log("Right组件被缓存");
    },
    activated() {
        console.log("Right组件被激活");
    },
}
</script>

<style lang="less" scoped>
.Right {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 90%;
    background-color: rgb(193, 224, 77);
}
</style>