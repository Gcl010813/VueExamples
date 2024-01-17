<template>
    <div class="RightSlot">
        <h3>RightSlot组件</h3>
        <hr>
        <!-- 定义插槽 vue规定 slot必有name属性 若无则默认default -->
        <slot>插槽默认内容</slot>
        <slot name="MyRightSlot" msg="RightSlotToAppInfo" :user="userInfo">MyRightSlot插槽默认内容</slot>
    </div>
</template>

<script>
export default {
    // 带上名字 组件名称变成自定义名字 用于调试
    name: 'MyRightSlot',
    data() {
        return {
            userInfo: {
                name: 'xiaoGuo',
                age: 23
            }
        }
    }
}
</script>

<style lang="less" scoped>
.RightSlot {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 90%;
    background-color: rgb(193, 224, 77);
}
</style>