import 'normalize.css'
import '@/assets/css/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入 vant 组件库
import { Button, NavBar, Swipe, SwipeItem } from 'vant'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button)
app.use(NavBar)
app.use(Swipe)
app.use(SwipeItem)

app.mount('#app')
