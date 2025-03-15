import { defineNuxtPlugin } from "#app";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default defineNuxtPlugin(() => {
  // Create a wrapper function to set default toast options
  const customToast = {
    success: (message: string, options = {}) =>
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        ...options,
      }),

    error: (message: string, options = {}) =>
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        ...options,
      }),

    info: (message: string, options = {}) =>
      toast.info(message, {
        position: "top-right",
        autoClose: 5000,
        ...options,
      }),

    warning: (message: string, options = {}) =>
      toast.warning(message, {
        position: "top-right",
        autoClose: 5000,
        ...options,
      }),
  };

  return {
    provide: {
      toast: customToast,
    },
  };
});
