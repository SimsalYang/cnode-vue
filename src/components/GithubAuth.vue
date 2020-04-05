<template>
  <div id="github-auth">
    <a v-if="!signState" href="#" @click="saveURL">登录</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      client_id: "",
      client_secret: "",
      scope: "read: user",
      state: "",
      getCodeURL: "https://github.com/login/oauth/authorize",
      getAccessTokenURL: "/github/login/oauth/access_token",
      getUserURL: "https://api.github.com/user",
      redirectURL: null,
      code: null,
      accessToken: null,
      signState: false
    };
  }
};
</script>

<style></style>
