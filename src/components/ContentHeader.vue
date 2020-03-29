<template>
  <el-menu
    id="content-header"
    :default-active="activeIndex"
    mode="horizontal"
    background-color="#f6f6f6"
    text-color="#80bd01"
    active-text-color="#005580"
    @select="handleSelect"
  >
    <el-menu-item index="all">全部</el-menu-item>
    <el-menu-item index="good">精华</el-menu-item>
    <el-menu-item index="share">分享</el-menu-item>
    <el-menu-item index="ask">问答</el-menu-item>
    <el-menu-item index="job">招聘</el-menu-item>
    <el-menu-item index="dev">客户端测试</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "ContentHeader",
  data() {
    return {
      activeIndex: "all"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
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