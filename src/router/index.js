import { createRouter, createWebHistory } from "vue-router";
import CommonLayout from "../components/layout/CommonLayout";
import store from "../store";

const routes = [
  {
    path: "/",
    redirect: "/home",
    meta: {
      breadcrumb: "系统首页",
    },
    component: CommonLayout,
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home"),
      },
      {
        path: "test",
        name: "Text",
        meta: {
          breadcrumb: "测试",
        },
        component: () => import("@/views/Test"),
      },
      {
        path: "productManager",
        name: "ProductManager",
        meta: {
          breadcrumb: "产品类表",
        },
        component: () => import("@/views/ProductManager"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  store.commit("SET_BREADCRUMBS", {
    breadcrumbs: to.matched
      .filter((item) => item.meta.breadcrumb)
      .map((item) => ({
        title: item.meta.breadcrumb,
        path: item.path,
      })),
  });
  next();
});

export default router;
