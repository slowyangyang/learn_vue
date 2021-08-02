import { customRef } from "vue";

export default function(value) {

  return customRef((track, trigger) => {

    return {
      get() {
        track()
        return value
      },
      set (newValue) {
        value = newValue
        trigger()
      }
      
    }
  })

}