### 组件关系

-   使用组件步骤
    -   导入组件
    -   在components中注册组件
    -   以标签形式使用组件
-   全局组件 在main.js中使用vue.component

### 组件中的props{只读的--不建议修改}

-   提高复用性
-   script中使用props[属性1，属性2.......] ---》此种形式无法使用属性的默认值  定义为对象属性
-   自定义属性中 不加属性绑定是字符串，加了属性绑定是数字
-   init值转存到data中变量即可

### scoped

-   可防止属性样式冲突问题

### /deep/

-   在父组件中单独修改子组件(不改动)的样式

### 生命周期

-   组件创建->运行->销毁的一个时间段
    -   ![image-20240105155047191](C:\Users\27894\AppData\Roaming\Typora\typora-user-images\image-20240105155047191.png)
    -   <img src="https://img-blog.csdnimg.cn/2309593f5fdd428b8a44320a21b22cd0.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5bCP5L2V5a2m6ZW_,size_20,color_FFFFFF,t_70,g_se,x_16" alt="请添加图片描述"  />

-   created()重要 发送axios请求访问数据

### 	组件间数据传递

-   父组件向子组件传递数据
    -   使用props自定义子组件的属性 父组件在标签中传递
-   子组件向父组件传递数据
    -   子组件使用自定义事件＋$emit()传递给父组件
-   兄弟组件之间传递数据
    -   通过第三eventBus.js组件＋$emit()--->发送方使用和$on()--->接收方使用实现

### ref

-   在不依赖jQuery的情况下获取DOM元素或组件的引用
    -   可以在单个组件中使用
    -   也可在父子组件中引用
-   this.$nextTick(cb回调函数)可以在数据发生变化后延迟dom函数的操作到新的页面渲染完毕

### 数组

-   array.forEach((item,index)=>{pass})无法终止循环 效率较低
-   array.some((item,index)=>{pass})可以通过return true终止循环
-   array.every(item=>pass)每一项数据是否都满足条件返回true 否则返回false
-   array.reduce((累加的结果，当前循环处理项)=>{ return  pass当前循环结果返回至累计的结果 开启下一次循环}，初始值)