<template>
    <div class="Right">
        <h3>App组件-右</h3>
        <span>scoped样式测试</span>
        <MyMiddle :init="20"></MyMiddle>
        <p>传递给父组件值count: {{ count }}</p>
        <button @click="addCount"> 点击修改count值 </button>
        <p>兄弟组件传递的值fromBrotherInfo: {{ fromBrotherInfo }}</p>
        <p>refs父子组件同步重置 {{ refsnum }} </p>
        <button @click="addRefsnum">子组件点击refsnum++</button>
        <button @click="resetsRefsnum">子组件点击重置refsnum</button>
    </div>
</template>

<script>
import eventBus from './eventBus.js';
export default {
    /* 子组件向父组件传递数据 */
    data() {
        return {
            count: 0,
            fromBrotherInfo: '',
            refsnum: 0,
        }
    },
    methods: {
        addCount() {
            this.count++;
            //修改数据时通过 $emit() 触发自定义事件并传递this.count给父组件自定义的val
            this.$emit('countChange', this.count)
        },
        addRefsnum() {
            this.refsnum++
        },
        resetsRefsnum() {
            this.refsnum = 0
        }
    },
    created() {
        eventBus.$on('share', (val) => {
            console.log("传递成功");
            this.fromBrotherInfo = val;
        })
    }
};
</script>

<style style lang="less" scoped>
.Right {
    width: 50%;
    height: 200px;
    float: right;
    background-color: gray;
    border: 1px solid #000;
    border-width: 1px 0;

    h3 {
        text-align: center;
        color: black;
    }
}
</style>
