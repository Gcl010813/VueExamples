<template>
    <div id="app">
        <Header></Header>
        <!-- 给item组件传值 item中使用插槽内嵌Counter组件-->
        <Item v-for="(item, index) in itemLists" :key="index" :idRef="item.id" :statusRef="item.status" :srcRef=item.src
            :infoRef=item.info :priceRef=item.price @ItemToAppStatus="ItemToAppStatus">
            <!-- CounterToApp函数不传参时默认接收到Counter组件传递的newCount 
                                 传参时需要自定义接收$event表示接收到Counter组件传递的newCount -->
            <Counter :countRef="item.count" @CounterToApp="CounterToApp(item, $event)"></Counter>
        </Item>
        <!-- 给Footer组件传值 -->
        <Footer :itemsCountRef="itemsCount" :itemsCostRef="itemsCost" :itemsStatusAllRef="itemsStatus"
            @FooterToApp="changeItemStatusAll">
        </Footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Item from '@/components/Item.vue';
import Counter from './components/Counter.vue';

export default {
    data() {
        return {
            itemLists: [
                { id: 1, status: true, src: '...', info: '商品1', price: 1.99, count: 1 },
                { id: 2, status: false, src: '...', info: '商品2', price: 1.00, count: 2 },
                { id: 3, status: true, src: '...', info: '商品3', price: 1.89, count: 1 },
            ]
        }
    },
    components: {
        Header,
        Item,
        Footer,
        Counter
    },
    computed: {
        itemsCount() {
            return this.itemLists.filter(item => item.status).reduce((itemsCount, item) => {
                return itemsCount + item.count
            }, 0)
        },
        itemsCost() {
            return this.itemLists.filter(item => item.status).reduce((itemsCost, Item) => {
                return itemsCost + Item.count * Item.price
            }, 0).toFixed(2) - '0'
        },
        itemsStatus() {
            return this.itemLists.every(item => item.status)
        }
    },
    methods: {
        ItemToAppStatus(newInfo) {
            this.itemLists.some(item => {
                if (item.id == newInfo.id) {
                    item.status = newInfo.status
                }
            })
        },
        CounterToApp(item, newCount) {
            item.count = newCount
        },
        // 接收Footer组件传递关于全选的状态
        changeItemStatusAll(sta) {
            this.itemLists.forEach(item => (item.status = sta))
        }
    }
}
</script>

<style lang="less" scoped></style>