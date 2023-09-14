import {
  createWebHistory,
  createRouter,
  RouteLocationNormalized,
  NavigationGuardNext,
} from "vue-router";
import { useUserStore } from "../store/user";

const componentLoad = (name: string) => import(`../views/${name}.vue`);

const tokenValidationGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const userStore = useUserStore();
  if (!userStore.email) return next("/login");
  next();
};

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => componentLoad("Main"),
    beforeEnter: tokenValidationGuard,
  },
  {
    path: "/login",
    name: "Login",
    component: () => componentLoad("Login"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
