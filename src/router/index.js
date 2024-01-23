import { createRouter, createWebHistory } from 'vue-router'
import Poem from '../views/Poem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/first',
        name: 'first',
        component: Poem
      },
  ]
})

export default router