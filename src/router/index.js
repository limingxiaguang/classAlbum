import Vue from "vue";
import Router from "vue-router";
import { routes } from "./router.js";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes
});

// router.beforeEach((to, from, next) => {
//   let HAS_LOGINED = false;

//   if (localStorage.getItem("Token")) {
//     HAS_LOGINED = true;
//   }
//   console.log(HAS_LOGINED)
//   if (to.name !== "Login") {
//     if (HAS_LOGINED) {
//       next();
//     } else next({ name: "Login" });
//   } else {
//     if (HAS_LOGINED) next({ name: "Layout" })
//     else next()
//   }
// });

export default router;
