<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <TopicList :data="data"></TopicList>
    <div v-if="data.length !== 0" class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :hide-on-single-page="true"
        :page-count="20"
        :pager-count="5"
        prev-text="<<"
        next-text=">>"
        :current-page="query.page"
        @current-change="pageChange"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
// TODO:
// 1. 头像、标题的 router-link 添加跳转✔
// 2. 数据显示区加 margin✔
// 3.数据显示区布局加样式✔
// 4. 添加 moment 修改时间样式✔

// @ is an alias to /src
import HomeHeader from "@/views/home/HomeHeader";
import TopicList from "@/components/TopicList";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HomeHeader,
    TopicList
  },
  data() {
    return {
      data: [],
      query: {
        page: parseInt(this.$route.query.page) || 1,
        tab: this.$route.query.tab || "all",
        limit: 10,
        mdrender: "true"
      }
    };
  },
  methods: {
    getData() {
      axios
        .get(
          `https://cnodejs.org/api/v1/topics?page=${this.query.page}&tab=${this.query.tab}&limit=${this.query.limit}&mdrender=${this.query.mdrender}`
        )
        .then(res => res.data)
        .then(data => {
          this.data = [...data.data];
          // console.log(this.data);
        });
    },
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
    },
    pageChange(currentPage) {
      this.query.page = currentPage;
      this.$route.query.tab = this.query.tab;
      this.$router.replace({
        query: { ...this.$route.query, page: this.query.page }
      });
      this.getData();
    }
  },
  mounted() {
    this.getData();
  },
  watch: {
    $route(to, from) {
      // console.log(to, from);
      if (to.query.tab !== from.query.tab) {
        this.query.tab = to.query.tab;
        this.query.page = 1;
        this.getData();
      }
    }
  }
};
</script>
<style scoped>
.topic-list {
  margin: 0;
}
.cell {
  padding: 10px;
  /* align-self: center; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.cell:hover {
  background-color: #f5f5f5;
}
.avatar {
  margin: 0 10px;
}
.reply-visit {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
}
.count-replies {
  font-size: 14px;
  line-height: 28px;
  color: #9e78c0;
}
.count-visits {
  font-size: 10px;
  line-height: 28px;
  color: #b4b4b4;
}
.put-top,
.topic-good,
.topic-tab {
  margin-right: 10px;
  padding: 2px 4px;
  border-radius: 3px;
  font-size: 12px;
  line-height: 20px;
}

.put-top,
.topic-good {
  background-color: #80bd01;
  color: #fff;
}
.topic-tab {
  background-color: #e5e5e5;
  color: #999999;
}
.topic-title {
  font-size: 16px;
  line-height: 30px;
}
.last-reply-time {
  margin-left: auto;
}
a {
  color: #333;
  text-decoration-color: #333;
}

a:hover {
  text-decoration: underline;
}
.pagination {
  margin: 10px 0 0 10px;
  height: 40px;
}
</style>
