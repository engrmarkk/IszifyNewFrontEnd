import { defineNuxtRouteMiddleware, navigateTo } from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
  const { $auth } = useNuxtApp();

  // Redirect to login if the route requires authentication and the user is not authenticated
  if (!$auth.isAuthenticated.value) {
    return navigateTo("/auths/login");
  }
});
