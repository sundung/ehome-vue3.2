<script setup lang="ts"></script>

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
    <div class="home-appliance-maintenance">
      <div class="title">家电维修</div>
      <div class="content">
        <div class="item">
          <img src="@/assets/image/homeApplianceMaintenance/tp-kongtiaojiafu.png" alt="" />
          <text>空调加氟</text>
        </div>
        <div class="item">
          <img src="@/assets/image/homeApplianceMaintenance/tp-kongtiaoweixiu.png" alt="" />
          <text>空调维修</text>
        </div>
        <div class="item">
          <img src="@/assets/image/homeApplianceMaintenance/tp-reshuiqiweixiu.png" alt="" />
          <text>热水器维修</text>
        </div>
      </div>
    </div>
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
  .home-appliance-maintenance {
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
}
</style>
