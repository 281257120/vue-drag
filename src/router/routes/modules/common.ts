/*
 * @Description: 
 * @Author: Liu Yang
 * @Date: 2023-03-20 10:37:04
 * @LastEditTime: 2024-05-08 17:12:09
 * @LastEditors: Liu Yang
 * @FilePath: \vue3-master\src\router\routes\modules\common.ts
 */
import type { RouteRecordRaw } from 'vue-router'

// 路由规则
const routes: RouteRecordRaw[] = [
  {
    path: '/index',
    name: 'index',
    component: () => import('@src/layouts/MainLayout.vue'),
    children: [
      {
        path: '/drag',
        name: 'drag',
        title: '拖拽',
        component: () => import('@src/views/drag/Index.vue'),
      },
      {
        path: '/home',
        name: 'home',
        title: '首页',
        component: () => import('@src/views/HomePage.vue'),
      },
      // {
      //   path: '/vuecesium',
      //   name: 'vuecesium',
      //   component: () => import('@src/views/VueCesium.vue'),
      // },
    ]
  },
  {
    path: '/login',
    name: 'login',
    title: '登录',
    component: () => import('@src/views/LoginPage.vue')
  }
]

export default routes