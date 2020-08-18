import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: List
  },
  {
    path: "/note",
    name: "Note",
    component: () => import("../views/Note.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
