<template>
  <div class="home">
    <Content></Content>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Content from "@/components/Content";
export default {
  name: "Home",
  components: {
    Content
  }
};
</script>
