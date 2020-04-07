<template>
  <div class="about">
    <el-card v-for="(item, index) in data" :key="index" shadow="never">
      <div slot="header">
        <h2>{{ item.title }}</h2>
      </div>
      <div v-html="item.content"></div>
    </el-card>
  </div>
</template>

<script>
import aboutData from "./about-data";

export default {
  name: "About",
  data() {
    return {
      data: aboutData
    };
  }
};
</script>

<style scoped>
.el-card {
  border-radius: 0;
}
</style>
