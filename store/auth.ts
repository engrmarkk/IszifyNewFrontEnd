import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    adminProfile: {} as any,
    reset: false,
    isLoading: false,
    isLoadingReset: false,
    isLoadingForgot: false,
    token: null as string | null, // Store the token
    form: {
      otp: "",
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  }),
  actions: {
    setAdminProfile(profile: any) {
      this.adminProfile = profile;
    },
  },
});
