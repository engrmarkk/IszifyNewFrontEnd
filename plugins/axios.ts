import { defineNuxtPlugin } from "#app";
import axios from "axios";
import { useRuntimeConfig } from "#app";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBaseUrl;

  const apiClient = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });

  return {
    provide: {
      axiosHelper: {
        get: (point: string, token: string) =>
          apiClient.get(point, {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
          }),
        post: (point: string, data: any, token: string) =>
          apiClient.post(point, data, {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
          }),
        patch: (point: string, data: any, token: string) =>
          apiClient.patch(point, data, {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
          }),
        delete: (point: string, token: string) =>
          apiClient.delete(point, {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
          }),
        // Add other methods as needed
      },
    },
  };
});
