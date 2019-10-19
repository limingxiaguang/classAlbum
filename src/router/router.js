export const routes = [
  {
    // 布局路由
    path: "/",
    name: "Layout",
    component: () =>
      import(/* webpackChunkName: "Layout" */ "@/views/Layout.vue"),
    children: [
      {
        path: "table",
        name: "Table",
        component: () =>
          import(/* webpackChunkName: "Table" */ "@/views/Table.vue")
      }
    ]
  },
  {
    // 登陆路由
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Login" */ "@/views/Login.vue"),
  }
];
