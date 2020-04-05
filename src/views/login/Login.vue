<template>
  <div id="login">
    <el-card class="card" body-style="padding: 20px 30% 20px 20%;">
      <div slot="header" class="header">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>登录</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="card-content">
        <el-form
          ref="form"
          :model="form"
          label-position="right"
          label-width="100px"
        >
          <el-form-item label="用户名">
            <el-input v-model="form.username" size="small"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" size="small"></el-input>
          </el-form-item>
        </el-form>
        <el-form :inline="true" style="padding-left: 80px;">
          <el-form-item>
            <el-button type="primary">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button>
              <el-link
                :underlin="false"
                href="https://github.com/login/oauth/authorize?client_id=1a9b42d02ec3c39d3eb8&redirect_uri=http://localhost:8080/oauth/redirect"
                >通过 GitHub 登录</el-link
              >
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-link :underline="false">忘记密码了？</el-link>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      oauthCode: ""
    };
  },
  methods: {
    getOAuth() {}
  }
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
}
.el-link {
  margin-left: 20px;
}
</style>
