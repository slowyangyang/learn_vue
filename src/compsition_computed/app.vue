<template>
  <h2>{{fullname}}</h2>
  <button @click="updateName">修改</button>
</template>

<script>
import { ref, computed } from '@vue/runtime-core'
// computed: 1.计算属性，方法，可以传入一个get函数，也可以传入一个包含get和set的对象,
          // 2.computed方法返回的是一个ref对象
export default {
  setup() {
    let age = ref (15)
    let name = ref('kobe')

    //普通形式
    // let fullname = name.value + '-' + age.value

    // computed传入get函数,返回一个只读的ref对象
    // let fullname = computed(() => name.value + '-' + age.value)
    // console.log(fullname);
    // let updateName = () => {
    //   fullname.name = 'James'
    // }

    //computed传入一个带get和set的对象，返回可读可写的ref对象
    let fullname = computed({
      get() {
        return name.value + '-' + age.value
      },
      set(newVal) {
        let val = newVal.split(" ")
        name.value = val[0]
        age.value = val[1]
      }
    })
    let updateName = () => {
      fullname.value = 'James bund'
    }
    return {
      fullname,
      updateName
    }
  }
}
</script>

<style>

</style>