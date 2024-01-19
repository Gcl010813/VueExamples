<template>
    <!-- 只能有一个跟元素div -->
    <div>
        <h1>Test.vue</h1>
        <p>
            {{ username }}
            <span>测试less语法</span>
        </p>
        <button @click="print">点击打印1</button>
    </div>
</template>

<script>
//默认导出 固定写法
export default {
    //组件中data不能指向对象 是函数
    data() {
        return {
            username: "xiaoGuo",
        };
    },
    methods: {
        print() {
            console.log("没有错 点击就打印1");
        },
    },
};
</script>

<!-- less语法启用 也可直接写css(默认) -->
<style lang="less">
p {
    background-color: aqua;

    span {
        color: red;
    }
}
</style>