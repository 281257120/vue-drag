/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-01 17:56:49
 * @LastEditTime: 2024-05-09 11:44:30
 * @LastEditors: Liu Yang
 * @Description:
 * @FilePath: \vue3-master\src\store\system\setting.ts
 */
// import * as webStorage from '@src/utils/web-storage'
// import * as api from '@src/api'
import { defineStore, acceptHMRUpdate } from 'pinia'
export const useSettingStore = defineStore('setting', {
  // a function that returns a fresh state
  state: () => ({
    isDark: false,
    templateArray: [],//模板数组

  }),
  // optional getters
  getters: {},
  // optional actions
  actions: {
    changeIsDark(flag: boolean) {
      this.isDark = flag
    },
    changeTemplateArray(templateArray: any[]) {
      this.templateArray = templateArray
    },
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingStore, import.meta.hot))
}
