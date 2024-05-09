<!--
* @Description:底层使用：https://gausszhou.github.io/vue3-drag-resize-rotate/#/events/events-resizing
* @Author: Liu Yang
* @Date: 2023-03-17 14:02:49
 * @LastEditTime: 2024-05-09 11:37:55
 * @LastEditors: Liu Yang
-->
<template>
  <div class="drag-wrap">
    <VueDragResizeRotate :parent="true" :grid="grid" v-for="(item, index) in tabPanels" :key="index" class="drag1"
      :x="item.x" :y="item.y" :w="item.w" :h="item.h" :z="item.z" :snap="true" :snapTolerance="10"
      :isConflictCheck="false" :resizable="item.resizable" :draggable="item.draggable" @activated="onActivated(item)"
      @deactivated="onDeactivated" @refLineParams="getRefLineParams" @dragging="onDrag" @resizing="onResize"
      @dragstop="onDragStop" @resizestop="onResizeStop">
      <component :is="item.common"></component>
    </VueDragResizeRotate>
    <span class="ref-line v-line" v-for="(item, index) in vLineLs" :key="'v_' + index" v-show="item.display" :style="{
      left: item.position,
      top: item.origin,
      height: item.lineLength
    }"></span>
    <span class="ref-line h-line" v-for="(item, index) in hLineLs" :key="'h_' + index" :style="{
      top: item.position,
      left: item.origin,
      width: item.lineLength
    }"></span>
    <div class="sel-item">
      返回JSON示例：
      <div class=line v-for="(value, key) in selItem" :key="key">
        <div v-if="key != 'common'" class="name">{{ key }}：</div>
        <div v-if="key != 'common'"> {{ value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, computed, nextTick, reactive, ref, watch, defineAsyncComponent, markRaw } from 'vue'
import { useSettingStore } from '@src/store/system/setting'
const settingStore = useSettingStore()

const grid = reactive([20, 20])
const vLineLs = ref([]);
const hLineLs = ref([]);
const tabPanels = computed(() => settingStore.templateArray)

const selItem = ref({})

const onActivated = (e) => {
  selItem.value = e
  console.log('activated', e)
}

const onDeactivated = () => {
  selItem.value = {}
  console.log('deactivated')
  console.log(tabPanels)
}

//拖拽
const onDrag = (x, y) => {
  selItem.value.x = x
  selItem.value.y = y
}
//缩放
const onResize = (x, y, w, h) => {
  selItem.value.x = x
  selItem.value.y = y
  selItem.value.w = w
  selItem.value.h = h
}
//拖拽结束
const onDragStop = (x, y) => {
  console.log('dragStop', x, y)
}
//缩放结束
const onResizeStop = (x, y, w, h) => {
  console.log('resizeStop', x, y, w, h)
}

//对齐时有辅助线
const getRefLineParams = (params) => {
  const { vLine, hLine } = params;
  vLineLs.value = vLine;
  hLineLs.value = hLine;
}

</script>
<style lang='scss' scoped>
.drag-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #808080;
  background: linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px);
  background-size: 20px 20px, 20px 20px;

  .ref-line {
    position: absolute;
    background-color: rgb(219, 89, 110);
    z-index: 9999;
  }

  .v-line {
    width: 1px;
  }

  .h-line {
    height: 1px;
  }

  .sel-item {
    position: absolute;
    padding: 1rem;
    right: 0;
    top: 0;
    font-size: 1.4rem;

    .line {
      display: flex;

      .name {
        min-width: 10rem;
        margin-right: 1rem;
      }
    }

  }
}

.isDark {
  .drag-wrap {
    background: linear-gradient(-90deg, rgba(255, 255, 255, .1) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, .1) 1px, transparent 1px);
    background-size: 20px 20px, 20px 20px;
  }
}
</style>