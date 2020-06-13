import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView";
import NewsView from "../views/NewsView";
import bus from "../utils/bus.js";
import { store } from "../store/index"
import AskView from "../views/AskView";
import JobsView from "../views/JobsView";

//import createListView from "../views/CreateListVeiw";
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
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
      name: "news",
    },
    {
      path: "/ask",
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
      name: "ask",
    },
    {
      path: "/jobs",
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
      component: JobsView,

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
