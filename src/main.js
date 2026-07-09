import './assets/main.css'
import './assets/themes.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'notyf/notyf.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')