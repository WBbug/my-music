import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/discovery'
    },
    {
      path:'/discovery',
      component:()=>import('@/components/content/discovery/index.vue')
    },
    {
      path:'/latestMV',
      component:()=>import('@/components/content/latest-mv.vue')
    }
  ]
})

export default router
