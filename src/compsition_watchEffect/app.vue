<template>
  <h2>{{counter}}</h2>
  <button @click="changeCounter">+1</button>
</template>

<script>
//watchEffect:  1.用于自动收集响应式数据的依赖，在setup执行时就会立即执行，接受一个方法作为参数
                // 2.stop---停止监听
                // 3.清除副作用
                // 4.执行时机
import { ref, watchEffect } from 'vue'
export default {
  setup() {
    let counter = ref(0)

    //在此调用时，并无事先声明侦听对象，但在其中调用时会根据使用的响应式对象自动收集数据源依赖，而watch需要手动对响应对象进行侦听操作
    let stop = watchEffect((onInvalidate) => {  //onInvalidate是一个函数
      onInvalidate(() => {
        //清除副作用，在组件销毁或数据发生改变时首先调用此函数，可以做请求时的前置操作
        clearTimeout(timer) //当数据变化需要重新发送请求，清除上一次请求
      })
      let timer = setTimeout(() => {
        console.log('请求成功~！');
      },1500)
      console.log(counter.value);
    })

    let changeCounter = () => {
      counter.value++
      if(counter.value == 30) { stop() } //停止监听
    }
    return {
      counter,
      changeCounter
    }
  }
}
</script>

<style>

</style>