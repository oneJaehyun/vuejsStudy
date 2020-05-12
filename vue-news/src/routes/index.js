import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView";
import createListView from "../views/CreateListVeiw";
Vue.use(VueRouter);
export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      component: createListView("NewsView"),
      name: "news",
    },
    {
      path: "/ask",
      component: createListView("AskView"),

      name: "ask",
    },
    {
      path: "/jobs",
      component: createListView("JobsView"),

      name: "jobs",
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
    {
      path: "/user/:id",
      component: UserView,
    },
  ],
});
