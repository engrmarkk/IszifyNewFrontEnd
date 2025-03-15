<template>
  <section class="min-h-screen bg-white flex">
    <section class="w-full md:w-[60%] px-10 sm:px-20 pt-20 md:pt-5 md:p-10">
      <div class="flex flex-col justify-between h-full w-full mx-auto">
        <NuxtLink to="/">
          <div class="md:flex gap-2 w-full items-center hidden">
            <img src="/icons/logo.svg" alt="Logo" />
            <h1 class="text-xl font-extrabold text-black">ISZIFY</h1>
          </div>
        </NuxtLink>

        <div class="w-full self-center h-full">
          <div class="mx-auto mt-10 md:mt-20 md:w-[400px]">
            <h2 class="text-info text-2xl md:text-3xl font-bold text-center">
              Login
            </h2>
            <form @submit.prevent="login" class="flex flex-col gap-8 mt-10">
              <div>
                <p class="text-accent font-bold text-sm">Email</p>
                <input
                  v-model.trim="email"
                  class="v-input"
                  type="email"
                  required
                />
              </div>

              <div>
                <p class="text-accent font-bold text-sm">Password</p>
                <div class="flex relative w-full">
                  <img
                    @click="toggleLoginPassword"
                    :src="`/icons/${switchLoginImage}`"
                    alt="Toggle Password"
                    class="absolute right-2 cursor-pointer top-5"
                  />
                  <input
                    v-model.trim="password"
                    class="v-input"
                    :type="inputLogin"
                    required
                  />
                </div>
                <NuxtLink to="/auths/forgot-password">
                  <p
                    class="capitalize text-end mt-4 text-xs text-accent cursor-pointer hover:text-primary"
                  >
                    Forgot password?
                  </p>
                </NuxtLink>
              </div>

              <div>
                <button
                  type="submit"
                  class="btn-full flex gap-2 justify-center items-center"
                  :disabled="isLoading"
                >
                  <ButtonLoader v-if="isLoading" color="success" />
                  <span v-else class="text-sm md:text-base">Login</span>
                </button>
              </div>
            </form>
          </div>
          <p class="pt-5 text-center text-sm">
            Don't have an account?
            <NuxtLink to="/auths/signup">
              <span class="font-bold text-primary underline cursor-pointer">
                SIGNUP
              </span>
            </NuxtLink>
          </p>
        </div>

        <div class="w-full">
          <p class="text-center">
            &copy; {{ new Date().getFullYear() }}.
            <span class="text-info font-bold">Iszify.com.</span> All Rights
            Reserved
          </p>
        </div>
      </div>
    </section>

    <!-- Right Section -->
    <section class="bg-primary hidden md:flex w-[40%]">
      <div
        class="flex justify-center h-full items-center w-[400px] text-center mx-auto"
      >
        <div>
          <h2 class="text-white text-xl md:text-2xl font-bold">
            You don't have an account?
          </h2>
          <p class="py-2 text-sm md:text-base text-white">
            Initiate your marketing campaign today and actively connect with
            your customers.
          </p>

          <div class="mt-5">
            <NuxtLink to="/auths/signup">
              <button class="btnn-sm">Sign Up</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { useAuthStore } from "@/store/auth";
import ButtonLoader from "@/components/actions/ButtonLoader.vue";

definePageMeta({
  layout: false,
  middleware: "guest",
});

// Setup
const router = useRouter();
const toast = useToast();
const store = useAuthStore();
const { $auth } = useNuxtApp();

// Reactive Data
const email = ref("olajideseyi8181@gmail.com");
const password = ref("Lamide@1234");
const isLoading = ref(false);
const inputLogin = ref("password");
const switchLoginImage = ref("eye-close.svg");

// Toggle Password Visibility
const toggleLoginPassword = () => {
  inputLogin.value = inputLogin.value === "password" ? "text" : "password";
  switchLoginImage.value =
    switchLoginImage.value === "eye-close.svg"
      ? "eye-open.svg"
      : "eye-close.svg";
};

const login = async () => {
  isLoading.value = true;
  const response = await $fetch("/api/auth/login", {
    method: "POST",
    body: {
      email: email.value.toLowerCase(),
      password: password.value,
    },
  });

  if (!response?.error) {
    $auth.setSession({
      access_token: response?.data?.access_token,
    }),
      store.setAdminProfile({ access_token: response?.data?.access_token });
    toast.success("Login successful");
    const lastVisitedRoute =
      localStorage.getItem("lastVisitedRoute") || "/user";
    router.replace(lastVisitedRoute);
    isLoading.value = false;
  } else {
    if (response?.error) {
      if (response?.error?.email_verified === false) {
        handleLoginError(response?.error);
      } else {
        toast.error(response?.error?.message || "Network Error");
        isLoading.value = false;
      }
    }
  }
};

// Handle Login Errors
const handleLoginError = (error: any) => {
  if (error?.email_verified === false) {
    router.push("/auths/otp-verify");
  } else {
    toast.error(error?.message || "Login failed");
  }
};
</script>
