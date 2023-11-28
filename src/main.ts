
import 'normalize.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入 vant 组件库
import { Button,NavBar } from 'vant';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button)
app.use(NavBar)

app.mount('#app')
