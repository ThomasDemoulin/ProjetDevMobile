import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import Calendrier from '../components/Calendrier.vue'
import Classement from '../components/Classement.vue'

const routes = [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
        path: '/calendrier',
        name: 'Calendrier',
        component: Calendrier
    },
    {
        path: '/classement',
        name: 'Classement',
        component: Classement
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router