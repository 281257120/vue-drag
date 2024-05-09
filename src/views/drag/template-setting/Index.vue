<!--
* @Description: 底层使用：https://github.com/SortableJS/vue.draggable.next?tab=readme-ov-file
                中文文档：https://www.itxst.com/vue-draggable-next/tutorial.html
* @Author: Liu Yang
* @Date: 2023-03-17 14:02:49
 * @LastEditTime: 2024-05-09 14:03:08
 * @LastEditors: Liu Yang
-->
<template>
  <div class="template-wrap">
    <div class="title">可选模板</div>
    <draggable animation="500" v-model="myArray" group="people" @start="start" @end="end" item-key="id">
      <template #item="{ element }">
        <div class="item">{{ element.name }}
          <div class="add" v-if="!element.isAdd" @click="changeAdd(element)">+</div>
          <div class="add" v-else @click="changeAdd(element)">-</div>
        </div>
      </template>
    </draggable>
    <div class="title msg">提示：拖动列表可调整图层层级</div>
    <el-button class="add-all" plain @click="changeIsAddAll(true)">添加所有模板</el-button>
    <el-button class="add-all" type="danger" plain @click="changeIsAddAll(false)">删除所有模版</el-button>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, computed, nextTick, reactive, ref, watch, defineAsyncComponent, markRaw, toRaw } from 'vue'
import { useSettingStore } from '@src/store/system/setting'
import draggable from 'vuedraggable'

const settingStore = useSettingStore()
const myArray = ref([{
  name: '模板一 背景图',
  x: 100,
  y: 100,
  w: 600,
  h: 500,
  z: 0,
  id: 1,
  isAdd: false,
  draggable: false,//是否可以拖动
  resizable: true, //是否可以调整大小
  common: markRaw(defineAsyncComponent(() => import('@src/views/drag/common/Template1.vue'))),
},
{
  name: '模板二 主标题(大小自适应内容)',
  x: 140,
  y: 140,
  w: 'auto',
  h: 'auto',
  z: 0,
  id: 2,
  isAdd: false,
  draggable: true,//是否可以拖动
  resizable: false,
  common: markRaw(defineAsyncComponent(() => import('@src/views/drag/common/Template2.vue'))),
},
{
  name: '模板三 图例',
  x: 160,
  y: 540,
  w: 480,
  h: 40,
  z: 0,
  id: 3,
  isAdd: false,
  draggable: true,//是否可以拖动
  resizable: true,
  common: markRaw(defineAsyncComponent(() => import('@src/views/drag/common/Template3.vue'))),
}
])
const drag = ref(false)


const start = (e: any) => {
  console.log('start', e, myArray.value)
}

const end = (e: any) => {
  console.log('end', e, myArray.value)
  settingStore.changeTemplateArray(myArray.value)
}
const changeAdd = (item: any) => {
  item.isAdd = !item.isAdd
  const isAddLs = myArray.value.filter((item: any) => item.isAdd)
  settingStore.changeTemplateArray(isAddLs)
}
const changeIsAddAll = (flag) => {
  myArray.value.forEach((item: any) => {
    item.isAdd = flag
  })
  const isAddLs = myArray.value.filter((item: any) => item.isAdd)
  settingStore.changeTemplateArray(isAddLs)
}

onMounted(() => {
  changeIsAddAll(true)
})
</script>
<style lang='scss' scoped>
.template-wrap {
  width: 30rem;
  height: 100%;
  padding: 0 1rem;
  background-color: rgba(255, 255, 255, .3);

  .title {
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .msg {
    font-size: 1.2rem;
    opacity: 0.5;
    height: 3rem;
  }

  .item {
    padding: 0 1rem;
    height: 5rem;
    border: 1px solid rgba(255, 255, 255, .3);
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;

    .add {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      right: 1rem;
      border: 1px solid;
      border-radius: 50%;
      cursor: pointer;
    }

    .add-icon {
      font-size: 1.4rem;
      color: #fff;
    }
  }

  .add-all {
    width: 100%;
    margin: 0;
    margin-top: 1rem;
  }
}

.isDark {

  .template-wrap {
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>