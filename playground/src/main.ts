import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import buttonThemePlugin from "../../src/plugin"
const app = createApp(App)
.use(router)
.use(buttonThemePlugin)
app.mount('#app')
