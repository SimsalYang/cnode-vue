<template>
  <div id="topic-detail">
    <div class="content">
      <el-card>
        <div slot="header">
          <span v-if="data.tab">
            <span v-if="data.top" class="put-top">置顶</span>
            <span v-else-if="data.good" class="topic-good">精华</span>
            <span v-else class="topic-tab">{{ showTab(data.tab) }}</span>
          </span>
          <h2 class="title">{{ data.title }}</h2>
          <div class="topic-info">
            <span>发布于 {{ GLOBAL.relativeTime(data.create_at) }}</span>
            <span
              >作者
              <router-link
                :to="{
                  name: 'user',
                  params: { loginname: loginname }
                }"
              >
                {{ loginname }}</router-link
              ></span
            >
            <span>{{ data.visit_count }} 次浏览</span>
            <span
              >最后一次编辑是
              {{ GLOBAL.relativeTime(data.last_reply_at) }}</span
            >
            <span>来自 {{ showTab(data.tab) }}</span>
          </div>
        </div>
        <div class="content-body">
          <div v-html="data.content"></div>
        </div>
      </el-card>
    </div>
    <div class="reply">
      <el-card>
        <div slot="header">
          <span>{{ data.reply_count }} 回复</span>
        </div>
        <div>
          <div
            class="reply-item"
            v-for="(item, index) in replies"
            :key="item.id"
          >
            <div class="user-content">
              <router-link
                class="avatar"
                :to="{
                  name: 'user',
                  params: { loginname: item.author.loginname }
                }"
              >
                <el-avatar
                  shape="square"
                  style="width: 30px; height: 30px"
                  fit="fill"
                  :src="item.author.avatar_url"
                  :alt="item.author.loginname"
                ></el-avatar>
              </router-link>
              <div class="reply-user-info">
                <router-link
                  class="reply-loginname"
                  :to="{
                    name: 'user',
                    params: { loginname: item.author.loginname }
                  }"
                >
                  {{ item.author.loginname }}
                </router-link>
                <a class="reply-time"
                  >{{ index + 1 }}楼•{{
                    GLOBAL.relativeTime(item.create_at)
                  }}</a
                >
                <span
                  v-if="item.author.loginname === loginname"
                  class="reply-by-author"
                  >作者</span
                >
              </div>
            </div>
            <div class="reply-content">
              <div v-html="item.content"></div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopicDetail",
  data() {
    return {
      id: this.$route.params.id || "",
      data: {},
      loginname: "",
      replies: []
    };
  },
  methods: {
    getData() {
      this.GLOBAL.http
        .get(`/topic/${this.id}?accesstoken=${this.GLOBAL.accesstoken}`)
        .then(res => res.data)
        .then(data => {
          this.data = data.data;
          this.loginname = data.data.author.loginname;
          this.replies = data.data.replies;
          console.log(this.data);
        })
        .catch(err => console.log(err));
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
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
#topic-detail {
  background-color: #ffffff;
}

.content {
  margin: 0;
}

.el-card >>> .el-card__header {
  padding: 10px;
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

.title {
  font-size: 22px;
  display: inline-flex;
}
.topic-info {
  margin: 10px auto;
  font-size: 12px;
}
.topic-info span {
  color: #838383;
  margin: 0 5px;
}
.topic-info span::before {
  content: "•";
}
.content-body {
  display: flex;
}
a {
  color: #838383;
}
.reply-item {
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
}
.user-content {
  display: flex;
}
.avatar {
  margin-right: 10px;
}
.reply-by-author {
  color: #fff;
  background-color: #6ba44e;
  padding: 2px;
  font-size: 12px;
}
.reply-content {
  margin-left: 50px;
  display: flex;
  flex-direction: column;
}

p {
  padding-bottom: 10px;
}

img {
  width: 100%;
}
</style>
