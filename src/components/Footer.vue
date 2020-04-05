<template>
  <el-footer height="190px">
    <div id="footer-main">
      <div>
        <el-link :underline="false" href="https://cnodejs.org/rss">RSS</el-link>
        <span>|</span>
        <el-link :underline="false" href="https://github.com/cnodejs/nodeclub/"
          >源码地址</el-link
        >
      </div>
      <div class="col_fade">
        <p>
          CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
          的技术研究。
        </p>
        <p>
          服务器赞助商为
          <el-link
            :underline="false"
            href="http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo"
          >
            <el-image
              :src="image.ucloud"
              :fit="fit"
              style="width: 92px;"
            ></el-image> </el-link
          >，存储赞助商为
          <el-link :underline="false" href="http://www.qiniu.com/?ref=cnode">
            <el-image
              :src="image.qiniu"
              :fit="fit"
              style="width: 115px;"
            ></el-image> </el-link
          >，由
          <el-link
            :underline="false"
            href="https://www.aliyun.com/product/nodejs?ref=cnode"
          >
            <el-image
              :src="image.alinode"
              :fit="fit"
              style="width: 166px;"
            ></el-image> </el-link
          >提供应用性能服务。
        </p>
        <p>
          新手搭建 Node.js 服务器，推荐使用无需备案的
          <el-link
            :underline="false"
            href="https://www.digitalocean.com/?refcode=eba02656eeb3"
          >
            DigitalOcean(https://www.digitalocean.com/)
          </el-link>
        </p>
      </div>
    </div>
  </el-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      fit: "contain",
      image: {
        ucloud: require("@/assets/ucloud.png"),
        qiniu: require("@/assets/qiniu.png"),
        alinode: require("@/assets/alinode.png")
      }
    };
  }
};
</script>

<style scoped>
.col_fade {
  align-items: flex-end;
}

.footer-main {
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 0 auto;
  padding: 10px;
  color: #e2e2e2;
  padding: 20px 0;
  font-size: 13px;
  line-height: 2em;
}
</style>
