<template>
  <div class="">
    <button @click="updateSate">更改</button>
  </div>
</template>

<script>
import { reactive, ref, readonly } from '@vue/reactivity'
// readonly: 只读，不允许修改的。无论是响应式数据还是普通数据,参数接受一个对象(普通或响应式的)
export default {
  setup() {
    //普通对象
    // let info1 = readonly({
    //   name: 'why'
    // })
    // const updateSate = () => {
    //   info1.name = 'coco'
    // }
    // return {
    //   updateSate
    // }

    //reactive
    let info2 = readonly(reactive({
      name: 'why'
    }))
    const updateSate = () => {
      info2.name = 'coco'
    }
    return {
      updateSate
    }

    //ref
    // let info3 = readonly(ref('why'))
    // const updateSate = () => {
    //   info3.value = 'coco'
    // }
    // return {
    //   updateSate
    // }

  }
}
</script>

<style scoped>
    
</style>
