import { createWebHistory, createRouter } from 'vue-router'
import BotaoPage from '../pages/BotaoPage.vue'
import InputPage from '../pages/InputPage.vue'
import RadioPage from '../pages/RadioPage.vue'
import FormPage from '../pages/FormPage.vue'
import FormConnectOn from '../pages/FormConnectOn.vue'
import IconLabelPage from '../pages/IconLabelPage.vue'

const routes = [
  { path: '/', component: BotaoPage },
  { path: '/inputPageTeste', component: InputPage },
  { path: '/radioPageTeste', component:  RadioPage},
  { path: '/formPageTeste', component:  FormPage},
  { path: '/formConnectOnTeste', component: FormConnectOn},
  { path: '/iconLabel', component: IconLabelPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
