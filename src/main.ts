import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/css/main.css'
import { HomePage } from './components/pages'

const app = createApp(App)
app.component('HomePage', HomePage)
app.mount('#app')
