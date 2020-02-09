import Vue from "vue";
import VueRouter from "vue-router";
import AskView from "../views/AskView.vue";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView";
Vue.use(VueRouter);
export const router = new VueRouter({
  mode: 'history', 
  routes: [
    {
      path: "/",
      redirect: "/news"
    },
    {
      //path : url 주소
      path: "/news",
      //component : url 주소로 갔을때 표시 될 컴포넌트
      component: NewsView
    },
    {
      path: "/ask",
      component: AskView
    },
    {
      path: "/jobs",
      component: JobsView
    },
    {
      path: '/itme',
      component : ItemView
    },
    {
      path : '/user',
      component : UserView
    }
  ]
});
