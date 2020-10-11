import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Comment from "@/views/Comment.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/comment",
      name: "Comment",
      component: Comment,
    },
  ],
});
