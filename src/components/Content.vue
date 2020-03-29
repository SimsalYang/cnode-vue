<template>
  <div>
    <ContentHeader></ContentHeader>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ContentHeader from "@/components/ContentHeader";

export default {
  name: "Content",
  components: {
    ContentHeader
  }
};
</script>

<style></style>
