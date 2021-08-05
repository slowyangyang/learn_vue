<template>
  <h2>{{$store.state.counter}}</h2>
  <h2>{{scounter}}</h2>
  <h2>{{counter}}</h2>
  <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <h2>{{friend}}</h2>

  <button @click="increament">+1</button>
</template>

<script>
import { ref, computed } from "vue"
import { useStore, mapState } from 'vuex'
import { useMapState } from './hooks'
export default {

  setup() {
    const store = useStore()
    const increament = () => store.commit("increament")

    // let scounter = computed(() => store.state.counter)
    return {
      increament,
      // scounter,
      ...useMapState(['counter', 'name', 'age', 'friend'])
    }
  },
  computed: {
    // ...mapState(['counter','name','age'])
    ...mapState({
      scounter: 'state => state.counter'
    })
  }
  // methods: {
  //   increament() {
  //     this.$store.commit("increament")
  //   }
  // }
}
</script>

<style>

</style>