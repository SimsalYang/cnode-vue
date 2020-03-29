<template>
  <el-header class="nav-header">
    <el-row :gutter="10">
      <el-col :span="6">
        <el-image class="nav-logo" :src="url" style="height: 40px"></el-image>
      </el-col>
      <el-col :span="6">
        <el-form ref="form" :model="form">
          <el-input class="nav-search" v-model="form.text" prefix-icon="el-icon-search"></el-input>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          class="nav-menu"
          background-color="#444"
          text-color="#ccc"
          active-text-color="#fff"
        >
          <el-menu-item index="1">
            <router-link to="/">首页</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/getstart">新手入门</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/api">API</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/about">关于</router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <router-link to="/signup">注册</router-link>
          </el-menu-item>
          <el-menu-item index="6">
            <router-link to="/signin">登录</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      url: require("../assets/logo.svg"),
      form: {
        text: ""
      }
    };
  }
};
</script>

<style scoped>
.nav-logo {
  float: left;
}
.el-header > .el-row > .el-col > .el-form >>> .el-input__inner {
  border-radius: 20px;
  background-color: #888;
  border: none;
  margin: 10px auto;
  padding: 3px 5px 3px 30px;
}
.el-header > .el-row > .el-col > .el-form >>> .el-input__inner:focus {
  /* border-radius: 20px; */
  background-color: #fff;
  /* border: none; */
}

.nav-menu {
  float: right;
}
</style>
