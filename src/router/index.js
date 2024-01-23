import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Poem from '../views/Poem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/first',
        name: 'first',
        component: Poem
    },
  ]
})

export default router