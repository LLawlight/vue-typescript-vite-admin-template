import Layout from "@/layout/index.vue";

export default [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "Login",
      hidden: true,
    },
  },
  {
    path: "/404",
    component: () => import("@/views/404.vue"),
    meta: { hidden: true },
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          title: "Dashboard",
          icon: "dashboard",
        },
      },
    ],
  },
  {
    path: "/example",
    component: Layout,
    redirect: "/example/tree",
    meta: {
      title: "Example",
      icon: "example",
    },
    children: [
      {
        path: "tree",
        component: () => import("@/views/tree/index.vue"),
        meta: {
          title: "Tree",
          icon: "tree",
        },
      },
      {
        path: "table",
        component: () => import("@/views/table/index.vue"),
        meta: {
          title: "Table",
          icon: "table",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    meta: { hidden: true },
  },
];