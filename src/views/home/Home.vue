<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <div class="topic-list">
      <div class="cell" v-for="item in data" :key="item.id">
        <router-link to="">
          <el-avatar
            shape="square"
            size="small"
            :src="item.author.avatar_url"
          ></el-avatar>
        </router-link>
        <span class="count-replies" title="回复数">{{ item.reply_count }}</span>
        <span>/</span>
        <span class="count-visits" title="点击数">{{ item.visit_count }}</span>
        <span v-if="item.top" class="put-top">置顶</span>
        <span v-else class="topic-tab">{{ showTab(item.tab) }}</span>
        <router-link to="">
          {{ item.title }}
        </router-link>
        <span class="last-reply-time">{{ item.last_reply_at }}</span>
      </div>
    </div>
  </div>
</template>
<script>
// TODO:
// 1. 头像、标题的 router-link 添加跳转
// 2. 数据显示区加 margin
// 3.数据显示区布局加样式
// 4. 添加 moment 修改时间样式

// @ is an alias to /src
import HomeHeader from "@/views/home/HomeHeader";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HomeHeader
  },
  data() {
    return {
      data: [],
      params: {
        page: 10,
        tab: "all",
        limit: 40,
        mdrender: "true"
      }
    };
  },
  methods: {
    showTab(tab) {
      switch (tab) {
        case "good":
          return "精华";
        case "share":
          return "分享";
        case "ask":
          return "问答";
        case "job":
          return "招聘";
        case "dev":
          return "开发";
      }
    }
  },
  mounted() {
    axios
      .get(
        `https://cnodejs.org/api/v1/topics?page=${this.params.page}&tab=${this.params.tab}&limit=${this.params.limit}&mdrender=${this.params.mdrender}`
      )
      .then(res => res.data)
      .then(data => {
        this.data = [...data.data];
        console.log(this.data);
      });
  },
  watch: {
    $route(to) {
      this.params.tab = to.query.tab;
      axios
        .get(
          `https://cnodejs.org/api/v1/topics?page=${this.params.page}&tab=${this.params.tab}&limit=${this.params.limit}&mdrender=${this.params.mdrender}`
        )
        .then(res => res.data)
        .then(data => {
          this.data = [...data.data];
          console.log(this.data);
        });
    }
  }
};
</script>
