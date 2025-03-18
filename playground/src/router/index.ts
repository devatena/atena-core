import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/layout/paginaInicial",
  },
  {
    path: "/layout",
    component: () => import("../components/LayoutComponentes.vue"),
    children: [
      {
        path: "paginaInicial",
        component: () => import("../pages/PaginaIncial.vue"),
      },
      {
        path: "buttonPageTeste",
        component: () => import("../pages/BotaoPage.vue"),
      },
      {
        path: "inputPageTeste",
        component: () => import("../pages/InputPage.vue"),
      },
      {
        path: "radioPageTeste",
        component: () => import("../pages/RadioPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
