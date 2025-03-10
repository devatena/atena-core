import { createWebHistory, createRouter } from 'vue-router'
import BotaoPage from '../pages/BotaoPage.vue'
import InputPage from '../pages/InputPage.vue'
import RadioPage from '../pages/RadioPage.vue'

const routes = [
  { path: '/', component: BotaoPage },
  { path: '/inputPageTeste', component: InputPage },
  { path: '/RadioPageTeste', component:  RadioPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
