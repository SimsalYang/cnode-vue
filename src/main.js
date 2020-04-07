import Vue from "vue";
import "./assets/css/reset.css";
import App from "./App.vue";
import Cookie from "vue-cookie";
import router from "./router";
import "./plugins/element.js";
import global from "./plugins/common";

Vue.config.productionTip = false;
Vue.prototype.GLOBAL = global;

Vue.use(Cookie);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
