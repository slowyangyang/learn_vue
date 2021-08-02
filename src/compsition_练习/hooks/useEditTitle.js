import { ref, watch } from 'vue'

export default function (val="我是默认标题") {
  let title = ref(val)

  // 侦听title发生改变
  watch(title, (val) => {
    document.title = val
  }, {
    immediate: true
  })

  return title
}