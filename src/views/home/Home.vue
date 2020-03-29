<template>
  <div class="home">
    <HomeHeader></HomeHeader>
  </div>
</template>

<script>
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
      data: []
    };
  },
  mounted() {
    axios
      .get("https://cnodejs.org/api/v1/topics")
      .then(res => res.data)
      .then(data => console.log(data.data));
  }
};
</script>
