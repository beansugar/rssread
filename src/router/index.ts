import { createRouter, createWebHistory } from 'vue-router'
import { requireAuth } from './auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/reg',component:()=>import('@/user/regview.vue')},
   {path:'/login',component:()=>import('@/user/loginview.vue')},
   {path:'/sub',component:()=>import('@/sub/view/sub.vue'),beforeEnter:requireAuth},
   {path:'/subadd',component:()=>import('@/sub/view/add.vue')},
   {path:'/sub/follower',component:()=>import('@/sub/view/followers.vue')},
   {path:'/user/setting',component:()=>import('@/user/setting.vue')},
   {name:'feed',path:'/feed/:id',component:()=>import('@/feed/view/feed.vue')},
  ],
})
export default router
