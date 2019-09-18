<template>
  <el-aside class="page-sider" :width="siderWidth">
    <div class="logo-section">
      <img class="logo-img" src="~@/assets/lifetour-logo.png" alt="" />
      <span v-if="!collapse">人生无限 Lifetour</span>
    </div>
    <Menu :collapse="collapse" />
  </el-aside>
</template>

<script>
import Menu from "./BasicLayoutSiderMenu.vue";

export default {
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    siderWidth() {
      return this.collapse ? "64px" : "256px";
    }
  },
  components: {
    Menu
  }
};
</script>

<style type="text/css" lang="less">
.page-sider {
  position: relative;
  background-color: #fff;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  transition: all 0.2s ease;
  .el-menu {
    border-right: none;
  }
}

.logo-section {
  position: relative;
  height: 64px;
  background-color: #fff;
  box-shadow: 1px 1px 0 0 #e8e8e8;
  z-index: 1;
  padding-left: 14px;
  display: flex;
  align-items: center;
  font-family: Futura, Helvetica Neue For Number, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;
  .logo-img {
    height: 40px;
    margin-right: 10px;
  }
}
</style>
