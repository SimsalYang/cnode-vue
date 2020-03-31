<template>
  <el-menu
    id="content-header"
    :default-active="activeIndex"
    mode="horizontal"
    background-color="#f6f6f6"
    text-color="#80bd01"
    active-text-color="#005580"
  >
    <el-menu-item index="all">
      <router-link to="/?tab=all">全部</router-link>
    </el-menu-item>
    <el-menu-item index="good">
      <router-link to="/?tab=good">精华</router-link>
    </el-menu-item>
    <el-menu-item index="share">
      <router-link to="/?tab=share">分享</router-link>
    </el-menu-item>
    <el-menu-item index="ask">
      <router-link to="/?tab=ask">问答</router-link>
    </el-menu-item>
    <el-menu-item index="job">
      <router-link to="/?tab=job">招聘</router-link>
    </el-menu-item>
    <el-menu-item index="dev">
      <router-link to="/?tab=dev">客户端测试</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      activeIndex: this.$route.query.tab || "all"
    };
  }
};
</script>

<style scoped>
.el-menu--horizontal {
  justify-content: center;
}
.el-menu--horizontal > .el-menu-item {
  height: 40px;
  line-height: 40px;
}
</style>
