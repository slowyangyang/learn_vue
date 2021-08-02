import { ref, computed } from 'vue'
export default function () {
  let counter = ref(0)

  let doubleCounter = computed(() => counter.value * 2)

  const increament = () => counter.value++
  const decreament = () => counter.value--

  return {
    counter,
    doubleCounter,
    increament,
    decreament
  }
}