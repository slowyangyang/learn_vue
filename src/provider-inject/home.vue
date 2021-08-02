<template>
  <div>
  <h2>子组件：{{name}}- {{age}}</h2>

  </div>
</template>

<script>
import { inject } from 'vue' 
export default {
  setup() {
    let name = inject('name')
    let age = inject('age')
    return {
      name,
      age
    }
  }
}
</script>

<style>

</style>