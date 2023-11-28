<script setup lang="ts">
import { reactive } from 'vue'
import MaintenanceMenu from '@/components/MaintenanceMenu.vue'
interface IMaintenanceMenu {
  title: string
  maintenanceObj: Array<{ id: string; imageUrl: string; text: string }>
}

// 家电维修
const homeApplianceMaintenance = reactive<IMaintenanceMenu>({
  title: '家电维修',
  maintenanceObj: [
    {
      id: '1',
      imageUrl: 'src/assets/image/homeApplianceMaintenance/tp-kongtiaojiafu.png',
      text: '空调加氟'
    },
    {
      id: '2',
      imageUrl: 'src/assets/image/homeApplianceMaintenance/tp-kongtiaoweixiu.png',
      text: '空调维修'
    },
    {
      id: '3',
      imageUrl: 'src/assets/image/homeApplianceMaintenance/tp-reshuiqiweixiu.png',
      text: '热水器维修'
    }
  ]
})
// 家电安装
const homeApplianceInstallation = reactive<IMaintenanceMenu>({
  title: '家电安装',
  maintenanceObj: [
    {
      id: '4',
      imageUrl: 'src/assets/image/homeApplianceInstallation/tp-kongtiaoanzhuangyiji.png',
      text: '空调安装移机'
    },
    {
      id: '5',
      imageUrl: 'src/assets/image/homeApplianceInstallation/tp-dianshianzhaung.png',
      text: '电视安装'
    },
    {
      id: '6',
      imageUrl: 'src/assets/image/homeApplianceInstallation/tp-dianreshuiqianzhuang.png',
      text: '电热水器安装'
    }
  ]
})
// 管道疏通
const drainCleaning = reactive<IMaintenanceMenu>({
  title: '管道疏通',
  maintenanceObj: [
    {
      id: '7',
      imageUrl: 'src/assets/image/drainCleaning/tp-matongshutong.png',
      text: '马桶疏通'
    },
    {
      id: '8',
      imageUrl: 'src/assets/image/drainCleaning/tp-diloushutong.png',
      text: '地漏疏通'
    },
    {
      id: '9',
      imageUrl: 'src/assets/image/drainCleaning/tp-yugangshutong.png',
      text: '浴缸疏通'
    }
  ]
})
</script>

<template>
  <main>
    <!--    导航栏-->
    <van-nav-bar title="e 到家" />
    <!--    轮播图-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!--    主菜单区域-->
    <div class="main-menu">
      <div class="item">
        <img src="@/assets/image/mainMenu/jiadianweixiu.png" alt="" />
        <text>家电维修</text>
      </div>
      <div class="item">
        <img src="@/assets/image/mainMenu/jiadianqingxi.png" alt="" />
        <text>家电清洗</text>
      </div>
      <div class="item">
        <img src="@/assets/image/mainMenu/jiadiananzhuang.png" alt="" />
        <text>家电安装</text>
      </div>
      <div class="item">
        <img src="@/assets/image/mainMenu/guandaoshutong.png" alt="" />
        <text>管道疏通</text>
      </div>
      <div class="item">
        <img src="@/assets/image/mainMenu/shuiluweixiu.png" alt="" />
        <text>水路维修</text>
      </div>
      <div class="item">
        <img src="@/assets/image/mainMenu/dianluweixiu.png" alt="" />
        <text>电路维修</text>
      </div>
    </div>
    <!--    家电维修-->
    <MaintenanceMenu :MaintenanceMenu="homeApplianceMaintenance" />
    <!--    家电安装-->
    <MaintenanceMenu :MaintenanceMenu="homeApplianceInstallation" />
    <!--    管道疏通-->
    <MaintenanceMenu :MaintenanceMenu="drainCleaning" />
  </main>
</template>

<style scoped lang="scss">
main {
  //  改变导航栏背景颜色
  .van-nav-bar {
    background-color: $van_nav_bar_background;

    ::v-deep(.van-nav-bar__content) {
      .van-nav-bar__title {
        color: $van_nav_bar_text_color;
      }
    }
  }
  //轮播图区域
  .my-swipe {
    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
    }
  }
  //  主菜单区域
  .main-menu {
    height: 188px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .item {
      width: 33vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      img {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
      }
    }
  }
  //  家电维修区域
}
</style>
