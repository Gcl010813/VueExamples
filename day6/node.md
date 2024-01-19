### 前端路由

-   hash地址与组件之间的对应关系
    -   锚点连接有浏览器历史，可以回退、前进
    -   前端路由工作方式![image-20240112161223321](C:\Users\27894\AppData\Roaming\Typora\typora-user-images\image-20240112161223321.png)

### vue-router使用

-   安装时对应vue版本
-   <vue-router></vue-router> 作用：占位符
-   路由重定向 redirect 强制跳转
-   嵌套子路由
-   默认子路由--->path后跟字符串

### 动态路由

-   hash地址中可变的部分定义为参数项，提高路由的复用性

### 导航

-   声明式导航
    -   <a>标签 <router-link>标签
-   编程式导航
    -   调用API方法实现的导航 location.href='url'
    -   ![image-20240113181347181](C:\Users\27894\AppData\Roaming\Typora\typora-user-images\image-20240113181347181.png)
    -   ![image-20240113181408149](C:\Users\27894\AppData\Roaming\Typora\typora-user-images\image-20240113181408149.png)
    -   ![image-20240113182247575](C:\Users\27894\AppData\Roaming\Typora\typora-user-images\image-20240113182247575.png)

### 导航守卫

-   可以控制路由的访问权限
    -   ![image-20240113182748803](C:\Users\27894\AppData\Roaming\Typora\typora-user-images\image-20240113182748803.png)
-   全局前置守卫
    -   router.beforeEach((to,from,next)=>{回调函数})
        -   to：将要访问的路由信息对象
        -   from：将要离开的路由信息对象
        -   next()：函数表示放行
        -   ![image-20240113183920216](C:\Users\27894\AppData\Roaming\Typora\typora-user-images\image-20240113183920216.png)
    -   ![image-20240113184847618](C:\Users\27894\AppData\Roaming\Typora\typora-user-images\image-20240113184847618.png)