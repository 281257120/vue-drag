/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-08-26 17:00:10
 * @LastEditTime: 2022-08-01 12:15:34
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \spider-miniapp-haiyan\src\store\index.ts
 */
import { createPinia } from 'pinia'
import { systemStore } from './system/index'
//pina持久化存储插件
// import piniaPersist from 'pinia-plugin-persist'
export const pinia = createPinia()
// pinia.use(piniaPersist)
/**
 * 项目全局 store。
 * 组件内使用不需要传 pinia，组件外使用需要传 pinia。
 */
export const store = {
  system: {
    ...systemStore
  }
}
