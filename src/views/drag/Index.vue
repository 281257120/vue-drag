<!--
 * @Description: 
 * @Author: Liu Yang
 * @Date: 2024-05-08 15:55:14
 * @LastEditTime: 2024-05-09 10:15:22
 * @LastEditors: Liu Yang
 * @FilePath: \vue3-master\src\views\drag\Index.vue
-->
<template>
  <div class="view-box" :class="{ 'isDark': settingStore.isDark }">
    <TemplateSetting />
    <DragPanel />
  </div>
</template>

<script setup lang='ts'>
import { onMounted, computed, nextTick, reactive, ref, watch, defineAsyncComponent, markRaw } from 'vue'
import { useSettingStore } from '@src/store/system/setting'
import DragPanel from '@src/views/drag/drag-panel/Index.vue'
import TemplateSetting from '@src/views/drag/template-setting/Index.vue'
const settingStore = useSettingStore()


</script>
<style lang='scss' scoped>
.view-box {
  display: flex;
  font-size: 1.4rem;
}
</style>