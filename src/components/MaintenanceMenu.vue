<template>
  <div class="appliance-maintenance">
    <div class="title">{{ MaintenanceMenu.title }}</div>
    <div class="content">
      <div class="item" v-for="item in MaintenanceMenu.maintenanceObj" :key="item.id">
        <img :src="item.imageUrl" alt="" />
        <text>{{ item.text }}</text>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 解决 PropType is a type and must be imported using a type-only import when verbatimModuleSyntax is enabled
import type { PropType } from 'vue'
interface IMaintenanceMenu {
  title: string
  maintenanceObj: Array<{ id: string; imageUrl: string; text: string }>
}

defineProps({
  MaintenanceMenu: {
    // 提供相对 `Object` 更确定的类型
    // type: Object as PropType<IMaintenanceMenu>,
    type: Object as PropType<IMaintenanceMenu>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.appliance-maintenance {
  padding: 0 15px;
  height: 200px;
  background-color: #fff;
  margin-top: 10px;

  .title {
    font-size: 18px;
    height: 55px;
    line-height: 55px;
  }
  .content {
    display: flex;
    flex-wrap: wrap;

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 16px;
      img {
        width: 105px;
        height: 105px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
