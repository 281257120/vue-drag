// @ts-nocheck
/*
 * @Description: 
 * @Author: Liu Yang
 * @Date: 2023-03-09 17:13:20
 * @LastEditTime: 2024-05-08 17:10:28
 * @LastEditors: Liu Yang
 * @FilePath: \vue3-master\src\main.ts
 */
// 计算设置rem的基准值，即html的font-size
// import 'amfe-flexible'

import { createApp } from 'vue'
import { pinia } from '@store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
//ElementPlus配置为中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@src/assets/style/animate/animate.min.css';
import '@src/assets/style/index.scss'

import VueDragResizeRotate from "@gausszhou/vue3-drag-resize-rotate";
import "@gausszhou/vue3-drag-resize-rotate/lib/bundle.esm.css";

// import VueCesium from 'vue-cesium'
// import 'vue-cesium/dist/index.css'


import App from './App.vue'
import { setupRouter } from './router'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
  size: 'default',
})
app.use(VueDragResizeRotate);
// app.use(VueCesium)
app.use(pinia)

// 安装初始化路由
setupRouter(app)
app.mount('#app')


