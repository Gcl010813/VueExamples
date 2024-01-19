<template>
  <div id="app">
    <h1>App根组件</h1>
    <hr>
    <h3>动态组件功能</h3>
    <button type="button" class="btn btn-info" @click="changeComponent">点击切换显示(动态组件功能)</button>
    <div class="box1">
      <!-- include 可以使用自定义名称 -->
      <keep-alive include="MyLeft">
        <component :is="comName"></component>
      </keep-alive>
    </div>
    <hr>
    <h3>插槽</h3>
    <div class="box2">
      <LeftSlot></LeftSlot>
      <RightSlot>
        <!-- template 只起到包裹的作用  不渲染到页面上 -->
        <!-- 默认传递到名字为defaule的插槽中 -->
        <template>
          <p>这是App组件传递给RightSlot组件中默认插槽的内容</p>
        </template>
        <!-- 可以携带插槽名字 v-slot:MyRightSlot 简写#MyRightSlot -->
        <!-- <template #MyRightSlot="obj"> -->
        <template #MyRightSlot="{ msg, user }">
          <!-- 可以使用解构赋值方式 接收参数为组件传递的属性值 -->
          <p>这是App组件传递给RightSlot组件中MyRightSlot插槽的内容</p>
          <p>RightSlot组件中MyRightSlot插槽携带的信息传递给App组件 -></p>
          <span> {{ msg }}</span><span>{{ user }}</span>
        </template>
      </RightSlot>
    </div>
    <hr>
    <h3>自定义指令</h3>
    <div class="box3">
      <p v-color1>测试自定义指令(无值)</p>
      <p v-color2="'red'">测试自定义指令(固定值)</p>
      <p v-color3="pColor">测试自定义指令(传值)</p>
      <button type="button" class="btn btn-info" @click="pColor = 'pink'">点击上条语句便pink色</button>
    </div>
  </div>
</template>

<script>
import Left from './components/Left.vue';
import Right from './components/Right.vue';
import LeftSlot from './components/LeftSlot.vue';
import RightSlot from './components/RightSlot.vue';

export default {
  data() {
    return {
      comName: 'Left',
      pColor: 'blue'
    }
  },
  methods: {
    changeComponent() {
      this.comName = (this.comName == 'Left' ? 'Right' : 'Left')
    }
  },
  // 注册名称方便在页面结构上看到
  components: {
    Left,
    Right,
    LeftSlot,
    RightSlot
  },
  directives: {
    color1: {
      bind(el) {
        console.log(el);
      }
    },
    color2: {
      bind(el, binding) {
        el.style.color = binding.value
      }
    },
    // color3: {
    //     bind(el, binding) {
    //         el.style.color = binding.value
    //     },
    //     update(el, binding) {
    //         el.style.color = binding.value
    //     },
    // },
    // color3简写
    color3(el, binding) {
      el.style.color = binding.value
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  background-color: rgba(128, 128, 128, .8);

  .box1,
  .box2 {
    width: 100%;
    height: 250px;
    position: relative;
    background-color: lightpink;
  }
}
</style>