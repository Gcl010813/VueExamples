<template>
    <div>
        <h5>App组件-中</h5>
        <hr>
        <p>{{ count }}</p>
        <button @click="count++">点击count+1</button>
    </div>
</template>
  
<script>
export default {
    //可以使用模板字符串
    // props: ['init'],
    props: {
        init: {
            //未指定init值时调用默认值
            default: 5,
            //规定值为数字
            type: Number,
            //必填项(当组件为指定init值时报错  default失效)
            required: true
        },
    },
    data() {
        return {
            count: this.init,
        }
    },
    methods: {}
};
</script>

<style lang="less" scoped>
div {
    h5 {
        text-align: center;
        color: pink;
    }
}
</style>