<template>
  
</template>

<script>
//compsition-API中已经移除了beforeCreated和created钩子函数，如果需要在挂载之前执行一些操作可以直接
// 放在setup中，他比生命周和data、methods等更早被创建
import { onBeforeMount, onMounted } from 'vue'
export default {
  setup() {
    onBeforeMount(() => {
      
    })
    onMounted(() => {
      console.log('onMounted');
    }) 
  }
}
</script>

<style>

</style>