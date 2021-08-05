import { createStore } from "vuex";



export default createStore({
  state(){
    return {
      counter: 0,
      name: 'kobe',
      age: 14,
      friend: 'haha'
    }
  },
  mutations: {
    increament(state) {
      state.counter++
    },
    decreament(state) {
      state.counter--
    }
  }
})