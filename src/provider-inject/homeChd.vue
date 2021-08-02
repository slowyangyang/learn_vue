<template>
  <h2>孙组件：{{age}}</h2>
  <button @click="add">子组件+1</button>
</template>

<script>
import { inject } from 'vue'
export default {
  setup() {
    let age = inject('age')
    const add = () => age.value++
    return {
      age,
      add
    }
  }
}
</script>

<style>

</style>