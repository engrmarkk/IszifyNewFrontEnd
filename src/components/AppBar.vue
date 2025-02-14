<template>
  <section>
    <header
      :class="{ scrolled: isScrolled }"
      ref="header"
      class="fixed top-0 right-0 left-0 z-50 bg-white animate__animated animate__fadeInDown"
    >
      <div
        class="h-full py-5 flex justify-between items-center container mx-auto px-5"
      >
        <div class="flex items-center gap-10">
          <router-link to="/"
            ><div class="flex gap-2 items-center">
              <img src="/icons/logo.svg" alt="" />
              <h1 class="text-xl font-extrabold text-black">ISZIFY</h1>
            </div></router-link
          >
        </div>

        <nav class="flex items-center md:gap-20">
          <ul class="hidden md:flex gap-10 font-light uppercase items-center">
            <popper
              :hover="true"
              :placement="'bottom'"
              class="cursor-pointer w-full"
            >
              <div class="pl-2 py-2 flex w-full">
                <div class="flex items-center py-2 space-x-3">
                  <img
                    :src="'/icons/create.svg'"
                    class="h-[20px] w-[20px]"
                    alt=""
                  />
                  <span class="text-sm text-primary font-bold">PRODUCTS</span>
                </div>
              </div>
              <template #content>
                <div class="w-[150px] md:w-[200px] my-2 bg-white shadow-md">
                  <div
                    class="text-sm py-3 px-5 font-bold cursor-pointer hover:text-primary"
                    :class="
                      active === 'pricing'
                        ? 'text-primary underline underline-offset-4 decoration-4 decoration-primary'
                        : 'text-accent '
                    "
                  >
                    Qr Codes
                  </div>
                  <div
                    class="text-sm py-3 px-5 font-bold cursor-pointer hover:text-primary"
                    :class="
                      active === 'pricing'
                        ? 'text-primary underline underline-offset-4 decoration-4 decoration-primary'
                        : 'text-accent '
                    "
                  >
                    Url Shortner
                  </div>
                  <div
                    class="text-sm py-3 px-5 font-bold cursor-pointer hover:text-primary"
                    :class="
                      active === 'pricing'
                        ? 'text-primary underline underline-offset-4 decoration-4 decoration-primary'
                        : 'text-accent '
                    "
                  >
                    Link in Bio
                  </div>
                </div>
              </template>
            </popper>

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
        </nav>
        <div class="flex gap-2 items-center">
          <div class="hidden md:block">
            <router-link to="/login">
              <button class="btnn-sm">Login</button></router-link
            >
          </div>
          <div class="hidden md:block">
            <router-link to="/signup">
              <button class="btnn-sm-outline">Sign Up</button></router-link
            >
          </div>
          <div v-if="modal !== true" @click="openNav" class="md:hidden">
            <img src="/icons/menu.svg" alt="" />
          </div>
          <div v-else @click="closeNav" class="md:hidden">
            <img src="/icons/close.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    let isButtonVisible = ref(false);
    const header = ref(null);
    const router = useRouter();
    const spacer = ref("shadow-md");
    const isScrolled = ref("shadow-none");
    const modal = ref(false);
    const active = ref("home");

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

    return {
      header,
      spacer,
      isScrolled,
      active,
      activeLink,
      modal,
      openNav,
      closeNav,
    };
  },
};
</script>

<style>
header.scrolled {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.spacer {
  height: 50vh;
}
</style>
