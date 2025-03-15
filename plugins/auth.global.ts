// plugins/auth.global.ts
import { defineNuxtPlugin } from "#app";
import { useUserSession } from "@/composables/useUserSession";

export default defineNuxtPlugin((nuxtApp) => {
  const { getStoredSession } = useUserSession();

  // Initialize session on app startup
  getStoredSession();

  // Provide the session globally
  nuxtApp.provide("auth", useUserSession());
});
