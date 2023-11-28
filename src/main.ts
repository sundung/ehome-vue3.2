import 'normalize.css'
import '@/assets/css/main.css'
// Toast
import 'vant/es/toast/style'

// Dialog
import 'vant/es/dialog/style'

// Notify
import 'vant/es/notify/style'

// ImagePreview
import 'vant/es/image-preview/style'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入 vant 组件库
import { Button, NavBar, Swipe, SwipeItem, Tabbar, TabbarItem, Icon, Toast } from 'vant'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button)
app.use(NavBar)
app.use(Swipe)
app.use(SwipeItem)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Icon)
app.use(Toast)

app.mount('#app')
