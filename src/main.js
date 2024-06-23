import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/services/api'
import './assets/index.css'
import i18n from '@/plugins/i18n'
import VeeValidatePlugin from '@/plugins/validation'

const app = createApp(App)

app.use(createPinia())

app.use(router)
app.use(i18n)
app.use(VeeValidatePlugin)

app.mount('#app')
