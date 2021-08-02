<template>
  <h1>一、计数器</h1>
  <p>counter: {{counter}}</p>
  <p>doubleCounter: {{doubleCounter}}</p>
  <button @click="increament">+1</button>
  <button @click="decreament">-1</button>
  <h1>二、修改文档title</h1>
  <button @click="modifyTitle">修改title</button>
</template>

<script>
//对一个功能的代码进行抽取------hooks
import { useCounter, useEditTitle } from './hooks'
export default {
  setup() {
    //计数器: ref, computed, 
    console.log(useCounter());
    let {counter, doubleCounter, increament, decreament } = useCounter()

    //修改title
    let title = useEditTitle('曾经沧海难为水')
    const modifyTitle = () => title.value = '除却巫山不是云'

    return {
      counter, doubleCounter, increament, decreament,
      modifyTitle
    }
  }
}
</script>

<style>

</style>