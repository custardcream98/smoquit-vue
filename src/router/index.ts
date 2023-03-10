import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import ROUTE from "@/constants/route";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTE.HOME,
      name: "home",
      component: HomeView
    },
    {
      path: ROUTE.HISTORY,
      name: "history",
      component: () => import("@/views/HistoryView.vue")
    }
  ]
});

export default router;
