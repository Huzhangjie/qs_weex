<template>
  <div class="app-wrapper">
    <home-header></home-header>
    <!-- <top-channel></top-channel> -->
    <tab-bar></tab-bar>
  </div>
</template>

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333333;
  }
</style>

<style scoped>
  .app-wrapper {
    background-color: #f4f4f4;
  }
  .r-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>

<script>
  import util from './assets/util';
  import Header from './assets/components/Header.vue';
  import tabBar from './assets/components/tabBar.vue';
  export default {
    // 组件 参数配置
    "components": {
      'tab-bar': tabBar,
      'home-header': Header
    },
    // 生命周期 组件创建后
    created () {
      util.initIconFont();
    },
    data: {
      
    },
    methods: {
     
    }
  }
</script>