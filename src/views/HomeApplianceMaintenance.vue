<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import ChargeStandard from '@/components/ChargeStandard.vue'
const route = useRoute()
const onClickLeft = () => history.back()
const title = ref<string>(route.query.navBarTitle as string)
console.log(title)

// 点击查看全部说明
const chargesNotesContentShow = ref<boolean>(false)
// 获取 ref
const chargesNotesContentRef = ref<HTMLInputElement | null>(null)

const clickForFullInstructions = () => {
  console.log('点击查看全部说明')
  chargesNotesContentShow.value = !chargesNotesContentShow.value

  if (chargesNotesContentShow.value) {
    // 解决 The left-hand side of an assignment expression may not be an optional property access. 报错
    if (chargesNotesContentRef.value) {
      chargesNotesContentRef.value.style.height = 40 + 'vh'
    }
  } else {
    if (chargesNotesContentRef.value) {
      chargesNotesContentRef.value.style.height = 17 + 'vh'
    }
  }
}
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
    <!--    收费说明-->
    <div class="charges-notes">
      <div class="title">收费说明</div>
      <div class="content" ref="chargesNotesContentRef">
        <div class="top">
          空调维修免费上门、免费检测，根据维修项目收费标准和配件收费标准进行费用收取，费用透明，拒绝乱收费。如遇师傅私自乱收费，可向平台进行举报，不满意可重新服务！
        </div>
        <div class="bottom">维修总价=维修费+配件费（如有）+高空作业费（如有）</div>
      </div>
      <div class="footer">
        <van-button plain type="primary" @click="clickForFullInstructions"
          >点击查看全部说明</van-button
        >
      </div>
    </div>
    <!--    收费标准-->
    <ChargeStandard></ChargeStandard>
    <!--    服务流程-->
    <div class="service-process">
      <div class="title">服务流程</div>
      <div class="service-process-content">
        <div class="item">
          <img src="@/assets/image/icons/yuyue@2x.png" alt="" />
          <text class="highlight">在线预约</text>
          <text>报修问题 </text>
          <text>免费下单</text>
        </div>
        <div class="item">
          <img class="img" src="@/assets/image/icons/xiayibuliucheng@2x.png" alt="" />
        </div>
        <div class="item">
          <img src="@/assets/image/icons/weixiu@2x.png" alt="" />
          <text class="highlight">确认维修</text>
          <text>确认故障 </text>
          <text>提交维修清单</text>
        </div>
        <div class="item">
          <img class="img" src="@/assets/image/icons/xiayibuliucheng@2x.png" alt="" />
        </div>
        <div class="item">
          <img src="@/assets/image/icons/yanshou@2x.png" alt="" />
          <text class="highlight">验收</text>
          <text>服务验收 </text>
          <text>售后有保障</text>
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
    width: 100%;
    img {
      width: 100%;
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
      color: #111;
      font-weight: 500;
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

  //  收费说明
  .charges-notes {
    margin-top: 10px;
    min-height: 185px;
    background-color: #fff;
    padding: 15px;
    box-sizing: border-box;

    .title {
      font-size: 14px;
      color: #111;
      font-weight: 500;
    }

    .content {
      font-size: 12px;
      font-family:
        PingFangSC,
        PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 17px;
      .top {
        margin: 8px 0;
      }
      .bottom {
        margin-bottom: 20px;
      }
    }

    .footer {
      display: flex;
      justify-content: center;
      .van-button--normal {
        font-size: 12px;
      }
      .van-button {
        width: 140px;
        height: 32px;
        background: #fff;
        border-radius: 16px;
        border: 1px solid #0090ff;
      }
    }
  }

  //  服务流程
  .service-process {
    height: 136px;
    background: #fff;
    padding-left: 15px;
    padding-top: 15px;
    box-sizing: border-box;
    margin-bottom: 10px;
    .title {
      font-size: 14px;
      font-family:
        PingFangSC,
        PingFang SC;
      font-weight: 500;
      color: #111;
    }
    .service-process-content {
      margin-top: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        .highlight {
          font-size: 14px;
          color: #0090ff;
          margin: 8px 0;
        }
        img {
          width: 14px;
          height: 14px;
        }
        .img {
          width: 24px;
          height: 2px;
        }
      }
    }
  }
}
</style>
