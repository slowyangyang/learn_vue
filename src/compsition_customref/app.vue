<template>
  <div class="">
    <input  v-model="title">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
import  usecustomref  from './useCustomRef'
export default {
  //customref(track, trigger): 自定义ref，会对vue的响应式更新，进行拦截并对起进行显示控制,接受两个参数，返回带有set和get方法的对象
  // track:收集依赖----会对使用该数据的地方进行处理
  //trigger: 触发更新----触发页面更新
  setup() {
    let title = usecustomref('')
    return {
      title
    }
  }
}
</script>

<style scoped>
    
</style>
