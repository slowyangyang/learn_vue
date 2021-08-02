<template>
  <div>
    <Home />
    <homeChd />
    <h2>父组件：{{name}}-{{age}}</h2>
    <button @click="add">父组件+1</button>
  </div>
</template>

<script>
//provider和inject用于子孙组件间的值传递，与vue2中的使用相差不大
import Home from './home.vue'
import homeChd from './homeChd.vue'
import { ref, provide, readonly } from 'vue'

export default {
  components: {
    Home,
    homeChd
  },
  setup() {
    let name = ref("kobe") 
    let age = ref(33)
    //组件间传值，须遵循规范单向数据流，不可在子组件中任意修改夫组件中的数据，引起数据源混论，可以使用readonly
    //可以在父组件中修改，但是子组件无法修改
    provide("name", readonly(name))
    provide("age", readonly(age))

    const add = () => age.value++

    return {
      name,
      age,
      add,
    }
  }
}
</script>

<style>

</style>