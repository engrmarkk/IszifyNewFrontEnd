<template>
  <section>
    <header
      :class="{ scrolled: isScrolled }"
      ref="header"
      class="fixed top-0 right-0 left-0 z-50 bg-white"
    >
      <div
        class="h-full py-5 flex justify-between items-center container mx-auto px-5"
      >
        <div class="flex items-center gap-10">
          <NuxtLink to="/"
            ><div class="flex gap-2 items-center">
              <img src="/icons/logo.svg" alt="" />
              <h1 class="text-xl font-extrabold text-black">ISZIFY</h1>
            </div></NuxtLink
          >
        </div>

        <nav class="flex items-center md:gap-20">
          <ul class="hidden md:flex gap-10 font-light uppercase items-center">
            <clientOnly>
              <popper
                :hover="true"
                :placement="'bottom'"
                class="cursor-pointer w-full"
              >
                <div class="pl-2 py-2 flex w-full">
                  <div class="flex items-center py-2 space-x-3">
                    <span
                      class="text-sm text-primary font-bold"
                      :class="
                        active === 'products/page/qr-code' ||
                        active === 'products/page/shortlinks' ||
                        active === 'products/page/link-in-bio'
                          ? 'text-primary underline underline-offset-4 decoration-4 decoration-primary'
                          : 'text-accent '
                      "
                      >PRODUCTS</span
                    >
                  </div>
                </div>
                <template #content>
                  <div
                    class="w-[150px] md:w-[200px] shadow-inner rounded-md bg-white"
                  >
                    <div
                      @click="activeLink('products/page/qr-code')"
                      class="text-sm py-3 px-5 font-bold cursor-pointer hover:text-primary"
                      :class="
                        active === 'products/page/qr-code'
                          ? 'text-primary'
                          : 'text-accent '
                      "
                    >
                      Qr Codes
                    </div>
                    <div
                      @click="activeLink('products/page/shortlinks')"
                      class="text-sm py-3 px-5 font-bold cursor-pointer hover:text-primary"
                      :class="
                        active === 'products/page/shortlinks'
                          ? 'text-primary'
                          : 'text-accent '
                      "
                    >
                      Url Shortner
                    </div>
                    <div
                      @click="activeLink('products/page/link-in-bio')"
                      class="text-sm py-3 px-5 font-bold cursor-pointer hover:text-primary"
                      :class="
                        active === 'products/page/link-in-bio'
                          ? 'text-primary'
                          : 'text-accent '
                      "
                    >
                      Link in Bio
                    </div>
                  </div>
                </template>
              </popper>
            </clientOnly>

            <li
              @click="activeLink('pricing')"
              class="text-sm font-bold cursor-pointer hover:text-accent"
              :class="
                active === 'pricing'
                  ? 'text-accent underline underline-offset-4 decoration-4 decoration-primary'
                  : 'text-primary '
              "
            >
              Pricing
            </li>
            <li
              @click="activeLink('faq')"
              class="text-sm font-bold cursor-pointer hover:text-accent"
              :class="
                active === 'faq'
                  ? 'text-accent underline underline-offset-4 decoration-4 decoration-primary'
                  : 'text-primary '
              "
            >
              FAQ
            </li>
            <li
              @click="activeLink('support')"
              class="text-sm font-bold cursor-pointer hover:text-accent"
              :class="
                active === 'support'
                  ? 'text-accent underline underline-offset-4 decoration-4 decoration-primary'
                  : 'text-primary '
              "
            >
              Support
            </li>
          </ul>
        </nav>

        <div class="flex gap-2 items-center">
          <div class="hidden md:block">
            <NuxtLink to="/auths/login">
              <button class="btnn-sm">Login</button></NuxtLink
            >
          </div>
          <div class="hidden md:block">
            <NuxtLink to="/auths/signup">
              <button class="btnn-sm-outline">Sign Up</button></NuxtLink
            >
          </div>
          <div v-if="modal !== true" @click="openNav" class="md:hidden">
            <img src="/icons/menu.svg" alt="" />
          </div>
          <div v-else @click="closeNav" class="md:hidden">
            <img src="/icons/close-black.svg" alt="" />
          </div>
        </div>
      </div>

      <nav v-if="modal" class="md:hidden items-center md:gap-20 pl-5 pb-8">
        <ul class="flex-col space-y-4 font-light uppercase items-center">
          <li>
            <details class="group">
              <summary
                class="flex items-center gap-10 font-medium marker:content-none hover:cursor-pointer"
              >
                <span
                  class="flex gap-2 text-sm font-bold cursor-pointer hover:text-accent"
                >
                  <span
                    :class="
                      active === 'products'
                        ? 'text-accent underline underline-offset-4 decoration-4 decoration-primary'
                        : 'text-primary '
                    "
                  >
                    Products
                  </span>
                </span>

                <ion-icon
                  name="chevron-down-outline"
                  size="small"
                  class="transition group-open:rotate-180"
                  :color="active === 'products' ? 'accent' : 'success'"
                ></ion-icon>
              </summary>

              <article class="py-4">
                <div class="flex flex-col gap-3">
                  <div
                    class="text-sm px-5 font-bold cursor-pointer hover:text-primary"
                    :class="
                      active === 'pricing'
                        ? 'text-primary underline underline-offset-4 decoration-4 decoration-primary'
                        : 'text-accent '
                    "
                  >
                    Qr Codes
                  </div>
                  <div
                    class="text-sm px-5 font-bold cursor-pointer hover:text-primary"
                    :class="
                      active === 'pricing'
                        ? 'text-primary underline underline-offset-4 decoration-4 decoration-primary'
                        : 'text-accent '
                    "
                  >
                    Url Shortner
                  </div>
                  <div
                    class="text-sm px-5 font-bold cursor-pointer hover:text-primary"
                    :class="
                      active === 'pricing'
                        ? 'text-primary underline underline-offset-4 decoration-4 decoration-primary'
                        : 'text-accent '
                    "
                  >
                    Link in Bio
                  </div>
                </div>
              </article>
            </details>
          </li>

          <li
            @click="activeLink('plans-and-pricing')"
            class="text-sm font-bold cursor-pointer hover:text-accent"
            :class="
              active === 'pricing'
                ? 'text-accent underline underline-offset-4 decoration-4 decoration-primary'
                : 'text-primary '
            "
          >
            Pricing
          </li>
          <li
            @click="activeLink('faq')"
            class="text-sm font-bold cursor-pointer hover:text-accent"
            :class="
              active === 'faq'
                ? 'text-accent underline underline-offset-4 decoration-4 decoration-primary'
                : 'text-primary '
            "
          >
            FAQ
          </li>
          <li
            @click="activeLink('support')"
            class="text-sm font-bold cursor-pointer hover:text-accent"
            :class="
              active === 'support'
                ? 'text-accent underline underline-offset-4 decoration-4 decoration-primary'
                : 'text-primary '
            "
          >
            Support
          </li>
        </ul>
        <div class="md:hidden mt-5">
          <NuxtLink to="/auths/login">
            <button class="btnn-sm-outline border-success text-success">
              Login
            </button></NuxtLink
          >
        </div>
      </nav>
    </header>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Popper from "vue3-popper";

const isButtonVisible = ref(false);
const header = ref(null);
const router = useRouter();
const spacer = ref("shadow-md");
const isScrolled = ref("shadow-none");
const modal = ref(false);
const active = ref("");

const activeLink = (item) => {
  active.value = item;
  router.push(`/${item}`);
};

const openNav = () => {
  modal.value = true;
};
const closeNav = () => {
  modal.value = false;
};
</script>

<style>
header.scrolled {
  box-shadow: 0 4px 6px -1px rgba(125, 125, 125, 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.spacer {
  height: 50vh;
}
</style>
