import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import Calendrier from '../components/Calendrier.vue'
import Classement from '../components/Classement.vue'
import SelectionChampionnat from '../components/SelectionChampionnat.vue'

const routes = [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
        path: '/calendrier/:idChampionnat',
        name: 'Calendrier',
        component: Calendrier,
        props: true
    },
    {
        path: '/classement/:idChampionnat',
        name: 'Classement',
        component: Classement,
        props: true
    },
    {
        path: '/championnats/:mode',
        name: 'SelectionChampionnat',
        component: SelectionChampionnat,
        props: true
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router