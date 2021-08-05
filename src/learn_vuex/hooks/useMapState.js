import { useStore, mapState } from "vuex";
import { computed } from 'vue'

export default function (keys = []) {
  //获取store对象
  let store = useStore()

  let stateFunc = mapState(keys)
  let stateKeyFns = Object.keys(stateFunc)

  //获得state映射函数
  let customMapState = {}

  stateKeyFns.forEach(fnKey => {
    customMapState[fnKey] = computed(stateFunc[fnKey].bind({$store: store}))
  })

  return customMapState
}