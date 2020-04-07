<template>
  <div id="getstart">
    <el-card v-for="(item, index) in data" :key="index" shadow="never">
      <div slot="header">
        <h2>{{ item.title }}</h2>
      </div>
      <div v-for="(content, key) in item.content" :key="key">
        <h3 v-html="content.label"></h3>
        <el-link :href="content.link" type="primary" target="_blank">{{
          content.link
        }}</el-link>
      </div>
    </el-card>
  </div>
</template>

<script>
import getstart from "./getstart-data";
export default {
  name: "GetStart",
  data() {
    return {
      data: getstart
    };
  }
};
</script>

<style scoped>
.el-card {
  border-radius: 0;
}
h3 {
  padding: 10px 0;
}
a {
  color: #08c;
}
</style>
