import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Maintenance from "../views/Maintenance.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "公交运营调度平台",
    },
    component: Home,
  },
  {
    path: "/maintenance",
    name: "Maintenance",
    meta: {
      title: "公交机务维保平台",
    },
    component: Maintenance,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
