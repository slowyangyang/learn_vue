<template>
  <div class="">

  </div>
</template>

<script>
import { reactive, torefs, toref } from '@vue/reactivity'
//toRwos: 获取响应是对象的原声数据
// torefs, toref： 与reactive绑定的，在对reactive的响应式对象进行解构的时候使用,保证解构的值也是响应式的，
export default {
  setup() {
    let info = reactive({
      name: 'coco',
      age: 44
    })
    //普通,非响应式
    let {age, name } = info

    //对reactive多个对象解构时：torefs
    let {age, name } = torefs(info)

    //对reactive单个对象解构时，toref
    let age = toref(info, 'age') //只对info中的age响应式解构
    return {
      age,
      name
    }
  }
}
</script>

<style scoped>
    
</style>
