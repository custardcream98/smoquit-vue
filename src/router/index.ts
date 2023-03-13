import { createRouter, createWebHistory } from "vue-router";

import useIsAuthenticated from "@/compositions/useIsAuthenticated";
import ROUTE from "@/constants/route";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTE.HOME,
      name: "home",
      component: HomeView,
    },
    {
      path: ROUTE.HISTORY,
      name: "history",
      component: () => import("@/views/HistoryView.vue"),
    },
    {
      path: ROUTE.LOGIN,
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
  ],
});

/** 로그인 확인 */
router.beforeEach((to, _, next) => {
  const { isAuthenticated } = useIsAuthenticated();
  const isToLogin = to.name === "login";

  if (isToLogin && !isAuthenticated) {
    next();
    return;
  }

  if (isToLogin && isAuthenticated) {
    next({ name: "home" });
    return;
  }

  if (!isAuthenticated) {
    next({ name: "login" });
    return;
  }

  next();
});

export default router;
