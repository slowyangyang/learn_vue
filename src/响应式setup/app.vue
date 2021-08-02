<template>
  <div class="">
    <h2>{{counter}}</h2>
    <button @click="increament">+1</button>
  </div>
</template>

<script>
import{ ref, reactive } from 'vue'
export default {
  //setup 一个函数，接受两个参数，返回一个对象，对象中的属性可以在template中使用,且在setup中不可以使用this，在
            // 组件创建之后，data、生命周期、methods之前被创建
  // props: 父组件中传递过来的属性
  // context: {
    // attr:  非props属性 
    // slot： render函数渲染会用到
    // emit： 事件传递
  // }
  setup(props, context) {
    // reative:vue内置方法，可以将变量处理（proxy）为响应式数据
                // 参数只能传入对象{}或数组[]
    // let store = reactive({
    //   counter: 0
    // })

    // const increament = () => {
    //   store.counter++;
    //   console.log(store.counter);
    // }
    // return {
    //   store,
    //   increament
    // }

    //ref（refrence引用）: 一个可变的响应式的引用对象，template模板中可以省略value，因为vue做了自动解包，在js中不行
          // 可以传入普通数据类型：数字，字符串，布尔值等  
          //template中的解包是个浅层解包，当ref被一个对象包裹时，将会解包失败{ref},如果这个对象是reactive对象，解包会成功
    
    // let counter = ref(0)
    // console.log(counter);

    // const increament = () =>  {
    //   counter.value++;
    //   console.log(counter.value);
    // }
    // return {
    //   counter,
    //   increament
    // }

  

  }
  
  
}
</script>

<style scoped>
    
</style>
