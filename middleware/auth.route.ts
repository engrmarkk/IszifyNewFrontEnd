import { defineNuxtRouteMiddleware, navigateTo } from "#app";
import { useUserSession } from "@/composables/useUserSession";

export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return; // Prevent middleware from running on the server
  const { $auth } = useNuxtApp();

  // const token: string = session.value.access_token;

  if (!$auth.isAuthenticated.value) {
    return navigateTo("/auths/login");
  }
});
