import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import loaclCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
    // component: login
  },
  {
    path: '/main',
    name: 'main',
    // component: () => import('../views/main/main.vue')
    component: () => import('@/views/main/main.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = loaclCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
