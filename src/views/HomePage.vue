<!--
 * @Description: 
 * @Author: Liu Yang
 * @Date: 2023-03-20 10:37:47
 * @LastEditTime: 2024-05-09 10:52:28
 * @LastEditors: Liu Yang
 * @FilePath: \vue3-master\src\views\HomePage.vue
-->
<template>
  <div class="wrapper">
    <div class="title">{{ homeStore.title }}</div>
    <img class="logo" :src="imgtest" alt="">
    <!-- <h1>vite + vue 3 + ts模板</h1> -->
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from '@src/store/system/home'

const imgtest = `${import.meta.env.VITE_VUE_ROUTER_BASE}/images/video.svg`
const homeStore = useHomeStore()
let para = { "login_account": "user", "password": "111111" }

</script>
<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
