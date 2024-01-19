<template>
    <div class="Left">
        <h3>Left组件</h3>
        <hr>
        <p>{{ leftCount }}</p>
        <button type="button" class="btn btn-info" @click="incLeftCount">+1</button>
        <p v-color="pColor">测试自定义指令(传值)</p>
        <button type="button" class="btn btn-info" @click="pColor = 'pink'">点击上条语句便pink色</button>
    </div>
</template>

<script>
export default {
    // 带上名字 组件名称变成自定义名字 用于调试
    name: 'MyLeft',
    data() {
        return {
            leftCount: 0,
            pColor: 'blue'
        }
    },
    methods: {
        incLeftCount() {
            this.leftCount++
        }
    },
    deactivated() {
        console.log("Left组件被缓存");
    },
    activated() {
        console.log("Left组件被激活");
    }
}
</script>

<style lang="less" scoped>
.Left {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 90%;
    background-color: rgb(241, 240, 144);
}
</style>