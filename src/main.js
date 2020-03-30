import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import "./assets/css/reset.css";
import global from "./plugins/common";

Vue.config.productionTip = false;
Vue.prototype.GLOBAL = global;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
