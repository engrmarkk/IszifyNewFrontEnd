<template>
  <section class="min-h-screen flex">
    <section class="w-full px-10 sm:px-20 py-5 md:p-10">
      <div class="flex flex-col justify-between h-full w-full mx-auto">
        <nuxt-link to="/"
          ><div class="flex gap-2 items-center">
            <img src="/icons/logo.svg" alt="" />
            <h1 class="text-xl font-extrabold text-black">ISZIFY</h1>
          </div></nuxt-link
        >

        <div
          class="w-full md:w-[500px] flex flex-col mt-10 md:mt-20 gap-3 mx-auto h-full"
        >
          <h2 class="font-extrabold text-primary text-xl md:text-2xl">
            Forgot Password
          </h2>
          <p class="text-base md:text-lg lg:text-xl">
            A link to change password has been sent to your email
          </p>
          <form
            @submit.prevent
            class="rounded-md w-full md:w-[500px] mx-auto mt-5"
          >
            <div>
              <p class="text-sm md:text-base lg:text-lg font-bold text-accent">
                Email
              </p>
              <input
                v-model="email"
                class="v-input w-full"
                type="'email'"
                name="email"
                required
              />
            </div>

            <div class="pt-10">
              <button
                class="btn-full flex gap-2 justify-center items-center"
                @click="handleForgotPassword"
                @keydown.enter="handleForgotPassword"
              >
                <span v-if="isLoadingForgot"
                  ><button-loader :color="'white'"></button-loader
                ></span>
                <span class="text-sm">Send Email</span>
              </button>
            </div>
          </form>

          <p class="pt-5 text-center text-sm">
            Already has an account
            <router-link to="login">
              <span
                class="font-bold text-primary underline underline-offset-1 underline-primary cursor-pointer"
                >LOGIN</span
              ></router-link
            >
          </p>
        </div>

        <div>
          <p class="text-center">
            &copy; {{ new Date().getFullYear() }}.
            <span class="text-info font-bold">Iszify.com. </span> All Rights
            Reversed
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import ButtonLoader from "@/components/actions/ButtonLoader.vue";

definePageMeta({
  layout: false,
});

const toast = useToast();
const inputLogin = ref("password");
const switchLoginImage = ref("eye-close.svg");
const email = ref("");
const isLoadingForgot = ref(false);

const handleForgotPassword = async () => {
  isLoadingForgot.value = true;
  const response = await $fetch("/api/auth/passwords?type=forgot-password", {
    method: "PATCH",
    body: {
      frontend_url: "https://iszify.com/reset-password",
      // frontend_url: "http://localhost:3000/auths/reset-password",
      email: email.value.toLowerCase(),
    },
  });

  if (response && response.status === 200) {
    toast.success(response?.data?.message);
    isLoadingForgot.value = false;
  } else {
    toast.error(response?.error?.message || "Network Error, try again.");
    isLoadingForgot.value = false;
  }
};
</script>

<style scoped></style>
