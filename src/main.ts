import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.router'
import GLOBAL_COMPONENTS_PLUGIN from './components'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(GLOBAL_COMPONENTS_PLUGIN)

app.mount('#app')
