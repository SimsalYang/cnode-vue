import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home.vue";

Vue.use(VueRouter);

const Topic = () => import("@/views/home/TopicDetail.vue");
const User = () => import("@/views/user/User.vue");
const Login = () => import("@/views/login/Login.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/topic/:id",
    name: "topic",
    component: Topic
  },
  {
    path: "/user/:loginname",
    name: "user",
    component: User
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'about' */ "@/views/about/About.vue")
  },
  {
    path: "/signin",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
