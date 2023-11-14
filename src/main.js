import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'
import Button from 'primevue/button'


import 'primevue/resources/themes/fluent-light/theme.css'




const app = createApp(App)

app.use(PrimeVue)
app.use(createPinia())
app.use(router)

app.component('Button', Button)

app.mount('#app')
