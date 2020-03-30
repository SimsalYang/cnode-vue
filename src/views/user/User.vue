<template>
  <div id="user-detail">
    <div id="main">
      <el-card>
        <div slot="header" class="header">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item></el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="main-inner">
          <div class="userinfo">
            <div class="user-avatar">
              <el-avatar
                shape="square"
                style="width: 40px; height: 40px"
                fit="fill"
                :src="data.avatar_url"
              ></el-avatar>
            </div>
            <span class="loginname">{{ data.loginname }}</span>
          </div>
          <div class="user-profile">
            <span class="score">{{ data.score }} 积分</span>
            <p class="create-at">
              注册时间 {{ GLOBAL.relativeTime(data.create_at) }}
            </p>
          </div>
        </div>
      </el-card>
    </div>
    <div id="recent-topics">
      <el-card>
        <div slot="header">
          最近创建的话题
        </div>
        <div>
          <TopicList :data="data.recent_topics"></TopicList>
        </div>
      </el-card>
    </div>
    <div id="recent-replies">
      <el-card>
        <div slot="header">
          最近参与的话题
        </div>
        <div>
          <TopicList :data="data.recent_replies"></TopicList>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TopicList from "@/components/TopicList";
export default {
  name: "User",
  components: {
    TopicList
  },
  data() {
    return {
      loginname: "",
      data: {}
    };
  },
  created() {
    this.loginname = this.$route.params.loginname;
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get(`https://cnodejs.org/api/v1/user/${this.loginname}`)
        .then(res => res.data)
        .then(data => {
          this.data = data.data;
          console.log(this.data);
        });
    }
  }
};
</script>

<style scoped>
#user-detail {
  background-color: #e1e1e1;
}

.el-card >>> .el-card__header {
  background-color: #f6f6f6;
}

.el-card > .el-breadcrumb > .el-breadcrumb-item >>> .el-breadcrumb__inner a {
  font-weight: 100;
  color: #80bd01;
}
.userinfo {
  display: flex;
}
.user-avatar {
  display: block;
}
.el-avatar {
  margin-right: 10px;
}
.loginname {
  justify-self: flex-start;
  font-size: 14px;
  line-height: 28px;
  color: #7780a5;
}
.user-profile {
  margin-top: 20px;
}
.score {
  margin-bottom: 10px;
}
.create-at {
  line-height: 28px;
  margin-top: 10px;
}
#recent-topics {
  margin: 10px auto;
}
</style>
