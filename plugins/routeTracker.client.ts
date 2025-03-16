import { defineNuxtPlugin } from "#app";
import { useRouter } from "vue-router";

export default defineNuxtPlugin(() => {
  const router = useRouter();
  const { $auth } = useNuxtApp();

  router.beforeEach((to, from) => {
    const isLeavingAuthRoute = from.path.startsWith("/user"); // Define authenticated routes

    if ($auth.isAuthenticated.value && isLeavingAuthRoute) {
      localStorage.setItem("lastVisitedRoute", from.fullPath);
    }
  });
});
