import { createApp } from 'vue'

import router from './router'
import store from './store'
import { registerApp } from './global'

import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'

const app = createApp(App)
// 按需导入elementUI
registerApp(app)
app.use(router)
app.use(store)

app.mount('#app')
