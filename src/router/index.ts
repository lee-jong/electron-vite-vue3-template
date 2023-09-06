import { createWebHistory, createRouter } from "vue-router";

const componentLoad = (name: string) => import(`../views/${name}.vue`);

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => componentLoad("Main"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
