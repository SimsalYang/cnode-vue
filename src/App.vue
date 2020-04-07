<template>
  <div id="app">
    <el-container direction="vertical">
      <Header></Header>
      <el-container direction="horizontal" class="main">
        <el-main style="padding: 0">
          <router-view></router-view>
        </el-main>
        <!-- <el-aside>Aside</el-aside> -->
      </el-container>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: #e1e1e1;
}
ul {
  list-style: none;
}
img {
  max-width: 100%;
}
a {
  color: #08c;
}
/* div {
  display: block;
} */

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
}
.el-header {
  background-color: #444;
  color: #fff;
  /* width: 100vw; */
}

.el-aside {
  background-color: #fff;
  color: #000;
  border-radius: 3px;
  /* height: 100%; */
}

.el-container >>> .el-main {
  padding: 0;
}

.el-footer {
  background-color: #fff;
  color: #ababab;
  /* align-items: flex-end; */
  /* flex: 1; */
}
.main {
  /* display: block; */
  flex: 1;
  margin: 20px;
}

.content {
  border-radius: 5px;
  margin-right: 20px;
}
.el-main {
  /* background-color: #ffffff; */
  color: #000;
  border-radius: 3px;
  margin-right: 20px;
}
</style>
