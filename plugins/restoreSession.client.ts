import { defineNuxtPlugin } from "#app";
import { useRouter } from "vue-router";
import { useUserSession } from "@/composables/useUserSession";

export default defineNuxtPlugin(() => {
  const { $auth } = useNuxtApp();
  const router = useRouter();

  const lastVisitedRoute = localStorage.getItem("lastVisitedRoute");

  if ($auth.isAuthenticated.value && lastVisitedRoute) {
    router.replace(lastVisitedRoute);
  } else {
    router.push("/auths/login");
  }
});
