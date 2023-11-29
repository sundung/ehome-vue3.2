<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const onClickLeft = () => history.back()
const title = ref<string>(route.query.navBarTitle as string)
console.log(title)
</script>

<template>
  <div class="home-appliance-maintenance">
    <!--    导航栏-->
    <van-nav-bar :left-text="title" left-arrow @click-left="onClickLeft" />
    <!--    banner 区域-->
    <div class="banner">
      <img src="@/assets/image/homeApplianceMaintenance/banner.png" alt="" />
    </div>
    <!--    维修家电种类-->
    <div class="maintenance">
      <div class="item">
        <div class="left-wrapper">
          <text>空调加氟</text>
          <img src="src/assets/image/icons/kongtiaojiafu-dianji@2x.png" alt="" />
        </div>
        <div class="right-wrapper">
          <img src="src/assets/image/icons/dianji@2x.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="left-wrapper">
          <text>空调加氟</text>
          <img src="src/assets/image/icons/kongtiaojiafu-dianji@2x.png" alt="" />
        </div>
        <div class="right-wrapper">
          <img src="src/assets/image/icons/dianji@2x.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="left-wrapper">
          <text>空调加氟</text>
          <img src="src/assets/image/icons/kongtiaojiafu-dianji@2x.png" alt="" />
        </div>
        <div class="right-wrapper">
          <img src="src/assets/image/icons/dianji@2x.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="left-wrapper">
          <text>空调加氟</text>
          <img src="src/assets/image/icons/kongtiaojiafu-dianji@2x.png" alt="" />
        </div>
        <div class="right-wrapper">
          <img src="src/assets/image/icons/dianji@2x.png" alt="" />
        </div>
      </div>
    </div>
    <!--    服务保障-->
    <div class="service-assurance">
      <div class="title">服务保障</div>
      <div class="content">
        <div class="item">
          <img src="@/assets/image/icons/feiyong@2x.png" alt="" />
          <div>无前期费用</div>
        </div>
        <div class="item">
          <img src="@/assets/image/icons/pinzhibaozhang@2x.png" alt="" />
          <div>品质有保障</div>
        </div>
        <div class="item">
          <img src="@/assets/image/icons/shouhou@2x.png" alt="" />
          <div>超长售后</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home-appliance-maintenance {
  position: relative;
  // 改变导航栏背景颜色
  .van-nav-bar {
    background-color: $van_nav_bar_background;

    ::v-deep(.van-nav-bar__content) {
      .van-icon {
        color: #fff;
      }
      .van-nav-bar__text {
        color: #fff;
      }
      .van-nav-bar__title {
        color: $van_nav_bar_text_color;
      }
    }
  }
  // banner 区域
  .banner {
    img {
      width: 100vw;
      height: 140px;
    }
  }

  // 维修家电种类
  .maintenance {
    position: absolute;
    top: 160px;
    left: 15px;
    width: 345px;
    height: 90px;
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;
    // 重点，为了不会换行显示
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;

    // 取消滚动条
    &::-webkit-scrollbar {
      display: none;
    }

    .item {
      margin-right: 6px;
      // 重点，为了不会被压缩大小
      flex-shrink: 0;
      width: 120px;
      height: 70px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding-left: 6px;
      display: flex;
      justify-content: space-between;
      position: relative;

      .left-wrapper {
        font-size: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        img {
          width: 32px;
          height: 20px;
        }
      }

      .right-wrapper {
        position: absolute;
        right: 0;
        bottom: 0;
        line-height: 0;
        img {
          width: 24px;
          height: 18px;
        }
      }
      .img-wrapper {
        background-color: red;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  // 服务保障
  .service-assurance {
    height: 150px;
    background-color: #fff;
    padding: 0 15px;
    .title {
      padding: 84px 0 15px;
      font-size: 14px;
      color: #111111;
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item {
        font-size: 12px;
        color: #333333;
        display: flex;
        img {
          width: 16px;
          height: 16px;
          margin-right: 6px;
        }
      }
    }
  }
}
</style>
