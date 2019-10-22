export const routes = [
  {
    // 布局路由
    path: "/",
    name: "Layout",
    component: () =>
      import(/* webpackChunkName: "Layout" */ "@/views/Layout.vue"),
    redirect: "/Album",
    children: [
      {
        path: "Album",
        name: "Album",
        component: () =>
          import(/* webpackChunkName: "Album" */ "@/views/Album.vue")
      },
      {
        path: "UserInfo",
        name: "UserInfo",
        component: () =>
          import(/* webpackChunkName: "UserInfo" */ "@/views/UserInfo.vue")
      }
    ]
  },
  {
    // 登陆路由
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Login" */ "@/views/Login.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue")
  }
];
