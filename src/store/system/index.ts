/*
 * @Author: tanghuang-liu 916650458@qq.com
 * @Date: 2022-05-16 09:21:24
 * @LastEditors: Liu Yang
 * @LastEditTime: 2024-05-08 17:11:23
 * @FilePath: \vue3-master\src\store\system\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Pinia } from 'pinia'
// import { useAccountStore } from './account'
// import { useDBStore } from './db'
// import { useFullscreenStore } from './fullscreen'
// import { useGrayStore } from './gray'
// import { useLayoutStore } from './layout'
// import { useLogStore } from './log'
// import { useMenuStore } from './menu'
// import { usePermissionStore } from './permission'
// import { useSearchStore } from './search'
// import { useThemeStore } from './theme'
// import { useTransitionStore } from './transition'
// import { useUserStore } from './user'
// import { useFileStore } from './file'
// import { useWarnStore } from './warn'
// import { usePageStore } from './page'
// import { useMapStore } from './mapElement'
import { useHomeStore } from './home'
import { useSettingStore } from './setting'




// 组件内使用不需要传pinia，组件外使用需要传pinia
export const systemStore = {
  // useAccountStore: (pinia?: Pinia) => useAccountStore(pinia),
  // useDBStore: (pinia?: Pinia) => useDBStore(pinia),
  // useFullscreenStore: (pinia?: Pinia) => useFullscreenStore(pinia),
  // useGrayStore: (pinia?: Pinia) => useGrayStore(pinia),
  // useLayoutStore: (pinia?: Pinia) => useLayoutStore(pinia),
  // useLogStore: (pinia?: Pinia) => useLogStore(pinia),
  // useMenuStore: (pinia?: Pinia) => useMenuStore(pinia),
  // usePermissionStore: (pinia?: Pinia) => usePermissionStore(pinia),
  // useSearchStore: (pinia?: Pinia) => useSearchStore(pinia),
  // useThemeStore: (pinia?: Pinia) => useThemeStore(pinia),
  // useTransitionStore: (pinia?: Pinia) => useTransitionStore(pinia),
  // useUserStore: (pinia?: Pinia) => useUserStore(pinia),
  // useFileStore: (pinia?: Pinia) => useFileStore(pinia),
  // useWarnStore: (pinia?: Pinia) => useWarnStore(pinia),
  // usePageStore: (pinia?: Pinia) => usePageStore(pinia),
  // useMapStore: (pinia?: Pinia) => useMapStore(pinia),
  useHomeStore: (pinia?: Pinia) => useHomeStore(pinia),
  useSettingStore: (pinia?: Pinia) => useSettingStore(pinia),
}
