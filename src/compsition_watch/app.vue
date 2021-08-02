<template>
  <h3>{{info.name}} - {{info.age}}</h3>
  <button @click="changeDate">更改</button>
</template>

<script>
import { ref, reactive, watch } from 'vue'
// watch: 
export default {
  setup() {
    // 1.侦听单一对象,传入一个getter函数
    // let info = reactive({name:'kebe', age: 33})
    // let changeDate = () =>{
    //   info.age++
    // }
    // watch(() => info.age, 
    //   (newVal, oldVal) => {
    //     console.log('new:' + newVal);
    //     console.log('old:' + oldVal);
    //   }
    // )

    //2.侦听reactive对象
      // let info = reactive({name:'kebe', age: 33})
      //情况一：在直接传入的是reactive对象时，newVal和oldVal都是reactive对象
      // watch(info,(newVal, oldVal) => {
      //     console.log('new:', newVal);
      //     console.log('old:', oldVal);
      //   }
      // )
      //情况二：传入reactive对象，但不想newVal和oldVal是reactive对象时，改写成getter函数,解构reactive对象时，得到普通对象
      // watch(() => ({...info}),(newVal, oldVal) => {
      //     console.log('new:', newVal);
      //     console.log('old:', oldVal);
      //   }
      // )
      
    //3.侦听ref对象,虽然是ref对象，但是返回的是解包过的ref对象
      // let info = ref({name:'kebe', age: 33})
      // watch(info.value,(newVal, oldVal) => {
      //     console.log('new:', newVal);
      //     console.log('old:', oldVal);
      //   }
      // )

    //4.侦听多个数据源，传入数组[]
      // let info = reactive({name: 'James',age: 33})
      // let title = ref('黑恶和黑')
      // watch([() => ({...info}), title],([newInfo, newTitle], [oldInfo, oldTitle]) => {
      //     console.log(newInfo, newTitle, oldInfo, oldTitle);
      //   }
      // )

    //5.深度侦听，reactive对象默认深度侦听，如果改写成getter函数，需要手动开启
    let info = reactive({name: 'James',age: 33, friend: {name: 'olier'}})
      watch(() => ({...info}),(newVal, oldVal) => {
          console.log('new:', newVal);
          console.log('old:', oldVal);
        },{
          deep: true, //深度侦听
          immediate: true //立即执行 
        }
      )

      let changeDate = () =>{
        info.age++
      }


    return {
      info,
      changeDate
    }
  }
}
</script>

<style>

</style>