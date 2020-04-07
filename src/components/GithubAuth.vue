<template>
  <div id="github-auth">
    <a v-if="!signState" href="#" @click="saveURL">登录</a>
    <a v-else @click="logout" href="#">注销</a>
  </div>
</template>

<script>
import axios from "axios";
import qs from "query-string";

export default {
  data() {
    return {
      client_id: "1a9b42d02ec3c39d3eb8",
      client_secret: "030d4eef0fdb20705f72cc232128878bb8a5d77a",
      scope: "read_user",
      state: "eea9e4cb-6cb4-4fec-93f9-7423e2dbb3af",
      getCodeURL: "https://github.com/login/oauth/authorize",
      getAccessTokenURL: "https://github.com/login/oauth/access_token",
      getUserURL: "https://api.github.com/user",
      redirectURL: null,
      code: null,
      accessToken: null,
      signState: false
    };
  },
  methods: {
    saveURL() {
      if (qs.parse(location.search).state !== this.state) {
        this.$cookie.set("redirectURL", location.href, 1);
        location.href = this.getCodeURL;
      }
    },
    logout() {
      this.$Cookie.delete("accessToken");
      this.signState = false;
      this.$emit("logoutEvent");
    },
    getCode() {
      this.getCodeURL +=
        "?" +
        qs.stringify({
          client_id: this.client_id,
          scope: this.scope,
          state: this.state
        });
      let parse = qs.parse(location.search);
      if (parse.state === this.state) {
        this.code = parse.code;
      }
    },
    getAccessToken() {
      axios
        .post(this.getAccessTokenURL, {
          client_id: this.client_id,
          client_secret: this.client_secret,
          code: this.code,
          state: this.state
        })
        .then(res => {
          this.accessToken = res.data.access_token;
          if (this.accessToken) {
            // 保存 token 到cookie 30 天
            this.$cookie.set("accessToken", this.accessToken, 30);
            this.redirectURL = this.$cookie.get("redirectURL");
            if (this.redirectURL) {
              location.href = this.redirectURL;
            }
          }
        });
    },
    getUser() {
      axios
        .get(this.getUserURL + "?access_token=" + this.accessToken)
        .then(res => {
          let data = res.data;
          this.signState = true;
          // 调用父组件登录事件
          this.$emit("loginEvent", {
            login: data.login,
            avatar: data.avatar_url,
            name: data.name
          });
        })
        .catch(error => {
          console.log(error);
          this.$cookie.delete("accessToken");
        });
    }
  },
  computed: {
    formatCodeURL() {
      return (
        this.getCodeURL +
        ("?" +
          qs.stringify({
            client_id: this.client_id,
            scope: this.scope,
            state: this.state
          }))
      );
    }
  },
  created() {
    this.getCode();
    // 如果在 url 中存在 code
    if (this.code) {
      this.getAccessToken();
    } else {
      // 如果 url 中没有 code，从 cookie 中获取 asscessTocken
      this.accessToken = this.$cookie.get("accessToken");
      if (this.accessToken) {
        this.getUser();
      }
    }
  }
};
</script>

<style></style>
