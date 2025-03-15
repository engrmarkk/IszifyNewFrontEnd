export const getStorageData = (): Record<string, any> => {
  try {
    if (typeof window === "undefined") return {}; // Prevent SSR errors
    const storageData = sessionStorage.getItem("sessionData");
    return storageData ? JSON.parse(storageData) : {};
  } catch (error) {
    console.error("Error parsing session storage data:", error);
    return {};
  }
};

export const session = {
  get<T = any>(key: string): T | null {
    if (typeof window === "undefined") return null; // Prevent SSR errors
    try {
      const data = sessionStorage.getItem(key);
      return data ? (JSON.parse(data) as T) : null;
    } catch (error) {
      console.error(
        `Error retrieving key "${key}" from sessionStorage:`,
        error
      );
      return null;
    }
  },

  set<T>(key: string, data: T): void {
    if (typeof window === "undefined") return; // Prevent SSR errors
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`Error setting key "${key}" in sessionStorage:`, error);
    }
  },

  clear(): void {
    if (typeof window !== "undefined") {
      sessionStorage.clear();
    }
  },

  logout(): void {
    if (typeof window !== "undefined") {
      sessionStorage.clear();
      window.location.reload(); // This ensures sessionStorage is cleared and user is logged out
    }
  },

  exists(key: string): boolean {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(key) !== null;
  },
};
