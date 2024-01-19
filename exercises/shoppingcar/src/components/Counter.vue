<template>
    <div class="counter">
        <button type="button" class="mybtn" @click="subItem">-</button>
        <span>{{ countRef }}</span>
        <button type="button" class="mybtn" @click="incItem">+</button>
    </div>
</template>

<script>
export default {
    props: {
        countRef: {
            default: 1,
            type: Number
        }
    },
    methods: {
        // 商品数量增减、选择状态 同步传递给App根组件更新商品列表
        subItem() {
            if (this.countRef != 1) {
                this.$emit('CounterToApp', this.countRef - 1)
            }
        },
        incItem() {
            this.$emit('CounterToApp', this.countRef + 1)
        },
    }
}
</script>

<style lang="less" scoped>
.counter {
    span {
        display: inline-block;
        width: 30px;
        height: 100%;
        text-align: center;
        background-color: rgba(239, 239, 239, .8);
    }

    .mybtn {
        width: 25px;
        height: 100%;
        font-size: 20px;
        line-height: 100%;
    }
}
</style>