<template>
  <div id="app">
    <el-container direction="vertical">
      <Header></Header>
      <el-container direction="horizontal" class="main">
        <!-- <Content class="content"></Content> -->
        <el-main>Main</el-main>
        <el-aside>Aside</el-aside>
      </el-container>
      <!-- <el-footer>Footer</el-footer> -->
      <FooterMain></FooterMain>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header';
// import Content from '@/components/Content';
import FooterMain from '@/components/FooterMain';

export default {
  name: 'app',
  components: {
    Header,
    // Content,
    FooterMain
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: #e1e1e1;
}

div {
  display: block;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.el-header {
  background-color: #444;
  color: #fff;
  /* width: 100vw; */
}

.el-aside {
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  /* height: 100%; */
}

.el-main {
  background-color: #ffffff;
  color: #000;
  margin-right: 20px;
}

.el-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  color: #ababab;
}
.main {
  display: block;
  margin: 20px;
}
.content {
  border-radius: 5px;
  margin-right: 20px;
}
</style>
