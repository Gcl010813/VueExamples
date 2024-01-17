<template>
    <div id="app">
        <h1>App根组件</h1>
        <span>scoped样式测试</span>
        <p>子组件向父组件传递数据 count:{{ countFromSon }}</p>
        <Life></Life>
        <div style="background-color: gray;">
            <h3 ref="myh3">测试refs获取dom元素</h3>
            <button @click="changeStyle">点击变红</button>
            <button @click="resetsRefsnum">父组件点击重置refsnum</button>
        </div>
        <div style="background-color: pink;">
            <!-- v-if v-else可以成对使用 -->
            <input type="text" v-if="iptOrBtn" @blur="showBtn" ref="iptRef">
            <button @click="showIpt" v-else>显示输入框</button>
        </div>
        <hr>
        <div>
            <!-- 父组件向子组件传递数据 -->
            <Left :father_msg="message" :father_info="userinfo"></Left>
            <!-- 子组件向父组件传递数据 -->
            <Right @countChange="getCount" ref="myRight"></Right>
        </div>

    </div>
</template>

<script>
//导入组件
import Left from "./components/Left.vue";
import Right from "./components/Right.vue";
import Life from "./components/Life.vue";

export default {
    data() {
        return {
            message: 'father',
            userinfo: { name: 'xiaoGuo', age: 23 },
            countFromSon: 0,
            iptOrBtn: false,
        }
    },
    methods: {
        /* 由子组件触发传递的this.count作为val */
        getCount(val) {
            this.countFromSon = val
        },
        changeStyle() {
            console.log(this.$refs.myh3);
            this.$refs.myh3.style.color = "red"
        },
        resetsRefsnum() {
            this.$refs.myRight.refsnum = 0
        },
        showIpt() {
            this.iptOrBtn = true
            //此种方法由于页面结构还未渲染完毕 无法使用  可使用this.$nextTick(cb)
            // this.$refs.iptRef.focus()
            this.$nextTick(() => {
                this.$refs.iptRef.focus()
            })
        },
        showBtn() {
            this.iptOrBtn = false
        }
    },
    //注册组件(私有注册)
    components: {
        Left,
        Right,
        Life,
    },
};
</script>

<style lang="less">
#app {
    width: 100%;
    border: 1px solid #000;

    h1 {
        text-align: center;
        color: red;
    }
}
</style>