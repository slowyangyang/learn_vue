import { createApp } from 'vue'
import App from './learn_vuex/app.vue'
import store from './learn_vuex/store'
const app = createApp(App)
app.use(store)
app.mount('#app')
