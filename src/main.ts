import { createApp } from 'vue'

import router from './router'
import store, { setupStore } from './store'
import { registerApp } from './global'

import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'

const app = createApp(App)
// 按需导入elementUI
registerApp(app)
app.use(router)
app.use(store)
// 初始化时，写入vuex store
setupStore()

app.mount('#app')
