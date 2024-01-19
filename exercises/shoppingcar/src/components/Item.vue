<template>
    <div id="item">
        <input type="checkbox" class="select" :id="'id' + itemId" :checked="statusRef" @change="changeItemStatus">
        <label :for="'id' + itemId">
            <img src="@/assets/logo.png" alt="no picture">
        </label>
        <div class="info">
            <p class="text">{{ itemInfo }}</p>
            <div class="footer">
                <span class="price">&yen;&nbsp;{{ itemPrice }}</span>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // App父组件向item子组件传值
    props: {
        idRef: {
            default: 0,
            type: Number,
            required: true
        },
        statusRef: {
            default: true,
            type: Boolean,
        },
        srcRef: {
            default: '...',
            type: String,
        },
        infoRef: {
            default: '商品x',
            type: String
        },
        priceRef: {
            default: 99999,
            type: Number,
        }
    },
    data() {
        return {
            itemId: this.idRef,
            itemStatus: this.statusRef,
            itemSrc: this.srcRef,
            itemInfo: this.infoRef,
            //保留两位小数
            itemPrice: this.priceRef.toFixed(2),
        }
    },
    methods: {
        changeItemStatus(e) {
            this.$emit('ItemToAppStatus', { id: this.itemId, status: e.target.checked })
        },
    },
}
</script>

<style lang="less" scoped>
#item {
    display: flex;
    height: 100px;
    border-radius: 10px;
    background-color: rgb(187, 163, 163);
    overflow: hidden;
    margin: 5px 0;

    .select {
        margin: 0 3px;
    }

    img {
        flex: 1;
        height: 100%;
        border-radius: 10px;
        background-color: pink;
    }

    .info {
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        border-radius: 10px;
        padding: 5px;

        .text {
            height: 50px;
            font-weight: 600;
            overflow: hidden;
        }

        .footer {
            display: flex;
            justify-content: space-between;
            padding: 0 10px;

            .price {
                font-weight: 800;
                color: red;
            }
        }
    }
}
</style>