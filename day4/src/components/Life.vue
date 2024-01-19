<template>
    <div>
        <h3>Life.vue组件</h3>
        <p>测试dom结构</p>
        <p class="change"> num值为:{{ num }} </p>
        <button @click="changeNum">修改num值</button>
    </div>
</template>

<script>
export default {
    props: {
        init: {
            default: 0
        }
    },
    data() {
        return {
            message: 'info',
            num: 0,
        }
    },
    methods: {
        show() {
            console.log('生命周期测试');
        },
        changeNum() {
            this.num = 10;
        }
    },
    /* 组件的props、data()、methods还未创建 不可使用*/
    beforeCreate() {
        // console.log(this.init);
        // console.log(this.message);
        // this.show();
    },
    /* 组件的props、data()、methods创建好，但是组件的模板结构还未生成*/
    created() {
        console.log(this.init);
        console.log(this.message);
    },
    /* 基于 vue-template-compiler 编译的HTML结构渲染到浏览器中 但无dom结构 */
    beforeMount() {
        const dom = document.querySelector('p');
        console.log(dom);
        console.log(this.$el);
    },
    mounted() {
        const dom = document.querySelector('p');
        console.log(dom);
        console.log(this.$el);
    },
    /* 只要有数据发生变化即调用 */
    beforeUpdate() {
        //数据是最新的 但结构不是最新的还未来得及渲染结构
        console.log("beforeUpdate函数" + this.num);
        const p = document.querySelector('.change');
        console.log(p.innerHTML);
    },
    updated() {
        //数据是最新的 结构也是最新的 已经渲染结构
        console.log("updated函数" + this.num);
        const p = document.querySelector('.change');
        console.log(p.innerHTML);
    }

}
</script>

<style lang="less" scoped>
div {
    width: 100%;
    height: 200px;
    background-color: pink;

    h3 {
        background-color: blue;
    }
}
</style>