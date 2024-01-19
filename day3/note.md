### vue过滤器

-   定义过滤器函数
    -   用在插值表达式
    -   用在v-bind

-   全局过滤器
    -   vue.filter(过滤器名称，处理函数)

-   全局过滤器重名于私用过滤器  私有过滤器优先级高

-   可以连续使用过滤器 前一个过滤器（原值）传递给第二个过滤器

-   过滤器可以传递（多个）参数 

    -   <p>{{message | filterA(arg1,agr2...) }}</p>

    -   接收参数 Vue.filter('filterA'，(msg->原值，arg1，arg2....))

### vue侦听器

-   watch 数据发生变化
-   方法格式监听器
    -   缺点1：无法在刚进入页面时就执行
    -   缺点2：若监听对象中的数据 无法响应

-   对象格式监听器
    -   可以通过 Immediate进入时便响应

-   深度监听 deep:true

### 计算属性

-   computed 所有的计算属性定义于此
    -   实现代码复用

### axios网络请求

-   返回promise对象 可以直接回调
-   axios对请求的数据进行包装返回操作者
-   解构赋值
-   也可也直接使用axios.get() 或者 axios.post()

### cli

-   自定义创建  选配名称custom_cli

-   通过main.js把App.vue根组件中模板结构渲染到index.html中指定位置<div id="app"></div>

-   .vue组件三部分

    -   template ---> 组件的模板结构
    -   script ---> 组件的JavaScript行为
    -   style ---> 组件的样式

    