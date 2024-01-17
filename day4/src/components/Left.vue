<template>
    <div class="Left">
        <h3>App组件-左</h3>
        <span>scoped样式测试</span>
        <MyMiddle :init="10"></MyMiddle>
        <p>App传递的父组件值father_msg: {{ son_msg }}</p>
        <button @click="changeMsg">点击修改App传递值</button>
        <p>App传递的父组件值father_info: {{ son_info }}</p>
        <button @click="changeInfo">点击修改App传递值</button>
        <p>传递给兄弟组件值toBrotherInfo: {{ toBrotherInfo }}</p>
        <button @click="toBrother">点击向兄弟组件传递数据</button>
    </div>
</template>

<script>
import eventBus from '@/components/eventBus.js';
export default {
    /* 父组件向子组件传递数据 */
    /* 此种方式不建议修改 */
    props: ['father_msg', 'father_info'],
    data() {
        return {
            son_msg: this.father_msg,
            son_info: this.father_info,
            toBrotherInfo: 'hi brother',
        };
    },
    methods: {
        /* 只改变了子组件数据 父组件数据未变 */
        changeMsg() {
            this.son_msg = '111';
        },
        /* 对象信息父组件子组件都改变 */
        changeInfo() {
            this.son_info.name = 'xiaoZhao';
        },
        toBrother() {
            eventBus.$emit('share', this.toBrotherInfo)
        }
    },
};
</script>

<style lang="less" scoped>
.Left {
    width: 50%;
    height: 200px;
    float: left;
    border: 1px solid #000;
    border-width: 1px 0;
    background-color: aqua;

    h3 {
        text-align: center;
        color: blue;
    }

    span {
        background-color: #fff;
    }

    // ::v-deep h5 {
    /deep/ h5 {
        color: greenyellow;
    }
}
</style>