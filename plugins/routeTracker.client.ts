import { defineNuxtPlugin } from "#app";
import { useRouter } from "vue-router";

export default defineNuxtPlugin(() => {
  const router = useRouter();

  router.beforeEach((to) => {
    if (to.path !== "/auths/login") {
      localStorage.setItem("lastVisitedRoute", to.fullPath);
    }
  });
});
