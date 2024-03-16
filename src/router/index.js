import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/UserStore";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../view/HomeView/Home.vue"),
  },
  {
    path: "/home",
    name: "HomeNoLogin",
    component: () => import("../view/HomeView/homeNoLogin.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../view/HomeView/webDetail.vue"),
  },
  //login
  {
    path: "/login",
    name: "Login",
    component: () => import("../view/Login/loginView.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../view/Login/registerView.vue"),
  },
  //exam
  {
    path: "/userExam",
    name: "UserExam",
    component: () => import("@/view/exam/userExam.vue"),
  },
  {
    path: "/takeExamUser/:id",
    name: "TakeExamUser",
    component: () =>
      import(
        /* webpackChunkName: "TakeExamUser" */ "@/view/exam/takeExamUser.vue"
      ),
  },
  {
    path: "/calPoint/:examId",
    name: "CalPoint",
    component: () => import("@/view/exam/CaculePoint.vue"),
  },
  //forum
  {
    path: "/forum",
    name: "Forum",
    component: () => import("@/view/forum/forumView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  // const userStore = useUserStore();
  // const token = userStore.user?.accessToken;
  // if (token === undefined && to.name !== "Login") {
  //   return next({ name: "Login" });
  // } else {
  window.history.replaceState({ page: to.name }, null, to.fullPath);
  next();
  // }
});
window.addEventListener("popstate", (event) => {
  const currentPage = event.state ? event.state.page : null;
  if (currentPage == "CalPoint") {
    // Điều hướng đến trang hiển thị khi người dùng click "back"
    router.push("/userExam");
  } else if (currentPage == "UserExam") {
    // Điều hướng đến trang hiển thị khi người dùng click "back"
    router.push(`/userExam`);
  }
});
export default router;
