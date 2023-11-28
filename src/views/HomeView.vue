<script setup lang="ts">

</script>

<template>
  <main>
    <!--    导航栏-->
    <van-nav-bar title="e 到家" />


  </main>
</template>

<style scoped  lang="scss">
//  改变导航栏背景颜色
.van-nav-bar {
  background-color:$van_nav_bar_background;

  ::v-deep(.van-nav-bar__content)  {
    .van-nav-bar__title {
      color:$van_nav_bar_text_color;
    }
  }

}
</style>
