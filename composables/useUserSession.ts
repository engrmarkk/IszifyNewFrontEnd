// composables/useUserSession.ts
import { computed } from "vue";

export function useUserSession() {
  const session = useState("session", () => null);

  const getStoredSession = () => {
    const storedSession = process.client
      ? localStorage.getItem("sessionData")
      : null;
    if (storedSession) {
      session.value = JSON.parse(storedSession);
    }
  };

  const setSession = (sessionData: { access_token: string }) => {
    session.value = sessionData;
    if (process.client) {
      localStorage.setItem("sessionData", JSON.stringify(sessionData));
    }
  };

  const clearSession = () => {
    session.value = null;
    if (process.client) {
      localStorage.removeItem("sessionData");
    }
  };

  const isAuthenticated = computed(() => !!session.value?.access_token);

  return {
    session,
    setSession,
    clearSession,
    isAuthenticated,
    getStoredSession,
  };
}
