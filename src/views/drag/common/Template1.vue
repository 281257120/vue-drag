<!--
* @Description:
* @Author: Liu Yang
* @Date: 2023-03-17 14:02:49
 * @LastEditTime: 2024-05-09 10:35:35
 * @LastEditors: Liu Yang
-->
<template>
  <div class="temp">模板一 背景图 （禁止拖动）</div>
</template>

<script setup lang='ts'>
import { onMounted, computed, nextTick, reactive, ref, watch } from 'vue'
defineOptions({
  name: ''
})
</script>
<style lang='scss' scoped>
.temp {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>