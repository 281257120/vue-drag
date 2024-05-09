/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-01 17:56:49
 * @LastEditTime: 2024-05-09 11:44:11
 * @LastEditors: Liu Yang
 * @Description:
 * @FilePath: \vue3-master\src\store\system\home.ts
 */
// import * as webStorage from '@src/utils/web-storage'
// import * as api from '@src/api'
import { defineStore, acceptHMRUpdate } from 'pinia'
export const useHomeStore = defineStore('home', {
  // a function that returns a fresh state
  state: () => ({
    title: '首页'
  }),
  // optional getters
  getters: {},
  // optional actions
  actions: {
    changeHomeName(title: string) {
      this.title = title
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHomeStore, import.meta.hot))
}
