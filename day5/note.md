### 动态组件

-   <component>动态占位标签是 vue 内置的 is属性的值为需要渲染组件的名字
    -   切换组件时组件默认被销毁
-   keep-alive  阻止组件被销毁
    -   使用<keep-alive>标签包裹 默认所有被包裹的组件都缓存（可使用include属性决定需要缓存的组件，exclude也可，但只不能同时使用），切换时变成 incative 状态
    -   keep-alive生命周期函数
        -   被缓存时 触发deactivated函数
        -   被激活时 触发activated函数

### 插槽 

-   把不确定、希望由用户指定的部分定义为插槽
-   <slot name="...">有name属性，使用后成为具名插槽、若无则默认default 
    -   v-slot:name 只能用于<component>、<template>标签中，简写#name
-   可以展示默认内容
-   可以携带数据 以对象形式传递给父组件（作用域插槽 ）
    -   数据可以固定
    -   数据可以在组件data中声明 插槽使用时动态绑定 :属性名
    -   ---》接收方以对象形式接收
-   也可以使用自定义属性传递给插槽 在插槽中声明props

### 自定义指令

-   私有自定义指令
    -   directives节点下声明自定义指令
        -   bind(el--->绑定此指令的、原生DOM对象 ，固定写法el ) 指令第一次被绑定时触发bind函数   <B>只执行一次</B>
        -   可以接收动态值 也可接收固定值 bind(el,binding-->对象)
        -   update在DOM更新时被调用
        -   bing和update相同时 可简写成对象形式
-   全局自定义指令
    -   全局声明的过滤器和全局声明的自定义指令都要放到main.js
        -   同样可简写

### ESlint配置（真傻x）

### axios

-    main.js  文件中 挂载到原型链 组件可直接使用this.axios
    -   import axios from 'axios'   Vue.prototype.axios = axios
-   axios.defaults.baseURL='ip:port' 配置基本路径
-   缺点：不利于接口的复用
