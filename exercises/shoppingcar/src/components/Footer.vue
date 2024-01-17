<template>
    <div id="footer">
        <div class="checkbox">
            <label>
                <input type="checkbox" :checked="itemsStatusAllRef" @change="changeStatusAll">&nbsp;全选
            </label>
        </div>
        <span class="money">
            合计:&nbsp;
            <span>
                &yen;&nbsp;{{ itemsCostRef }}
            </span>
        </span>
        <div class="buy">
            结算
            <span v-show="this.itemsCountRef != 0">({{ itemsCountRef }})</span>
        </div>
    </div>
</template> 

<script>
export default {
    // 页面加载时接收App根组件关于已选定的商品数量、商品总额值  数据无需更改 props传递即可 
    props: {
        itemsCountRef: {
            default: 0,
            type: Number,
        },
        itemsCostRef: {
            default: 0,
            type: Number
        },
        itemsStatusAllRef: {
            default: false,
            type: Boolean
        }
    },
    methods: {
        // 更新全选按钮状态 通过 emit 传递给 App根组件
        changeStatusAll(e) {
            this.$emit('FooterToApp', e.target.checked)
        },
    },
}
</script>

<style lang="less" scoped>
#footer {
    display: flex;
    //主轴方向
    flex-direction: row;
    //主轴布局
    justify-content: center;
    //副轴布局
    align-items: center;
    height: 60px;
    border-radius: 10px;
    overflow: hidden;
    background-color: rgba(219, 235, 236, .8);
    text-align: center;

    .checkbox {
        flex: 1;
    }

    .money {
        flex: 1;

        span {
            font-weight: 800;
            color: red;
        }
    }

    .buy {
        flex: .5;
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
        background-color: rgb(118, 118, 219);
    }
}
</style>