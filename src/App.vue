<!--
 * @Description: daimai
 * @Author: Liu Yang
 * @Date: 2023-03-09 17:13:20
 * @LastEditTime: 2024-05-08 17:08:59
 * @LastEditors: Liu Yang
 * @FilePath: \vue3-master\src\App.vue
-->

<template>
  <router-view class="mWrapper" :class="{ 'isDark': settingStore.isDark }" />
</template>

<script lang="ts" setup>
import { useSettingStore } from '@src/store/system/setting'
import { onMounted } from 'vue';
const settingStore = useSettingStore()

onMounted(() => {
  //适配rem 注释掉刷新页面1rem = 10px
  (function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        // console.log(10 * (clientWidth / 1920) + 'px')
        docEl.style.fontSize = 10 * (clientWidth / 1920) + 'px';
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);
})

</script>

<style lang="scss" scoped>
.mWrapper {
  box-sizing: border-box;
  // padding: 10px;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  overflow: hidden;
  position: relative;
}

.isDark {
  background-image: url('/images/bg-mask.png');
}
</style>
