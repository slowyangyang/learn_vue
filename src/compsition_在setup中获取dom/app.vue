<template>
  <h2 ref="title">{{message}}</h2>
</template>

<script>
//watchEffect: 接受两个参数，函数和对象(配置执行时机)
import { ref, watchEffect } from '@vue/runtime-core'
export default {
  setup() {
    let message = ref('哈哈啊哈哈')
    let title = ref(null)

    watchEffect(() => {
      console.log(title.value);
    }, {
      //默认--pre，在元素挂载或更新前执行
      //post--在dom渲染之后执行
      //async--强制同步，不推荐使用
      flush:'post'
    })

    return {
      message,
      title
    }
  }
}
</script>

<style>

</style>