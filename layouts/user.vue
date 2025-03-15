<template>
  <ClientOnly>
    <div>
      <div>
        <div
          class="fixed top-0 w-full py-2 px-5 flex justify-between items-center border-b shadow z-50 bg-white"
        >
          <div class="flex gap-2 items-center">
            <div @click="openNavDrawer" class="md:hidden">
              <img src="/icons/menu.svg" alt="" class="cursor-pointer" />
            </div>
            <router-link to="/user"
              ><div class="flex gap-2 h-full items-center">
                <img src="/icons/logo.svg" alt="" class="hidden md:flex" />
                <img
                  src="/icons/logo.svg"
                  alt=""
                  class="md:hidden w-[20px] h-[20px]"
                />
                <h1 class="md:text-xl font-extrabold text-black text-sm">
                  ISZIFY
                </h1>
              </div></router-link
            >
          </div>
          <div
            class="flex gap-2 items-center cursor-pointer hover:bg-secondary px-5 py-2 rounded-lg"
          >
            <div class="rounded-full border h-[30px] w-[30px]">
              <img
                :src="'/icons/avatar.svg'"
                alt=""
                class="h-[30px] w-[30px] rounded-full object-cover"
              />
            </div>
            <div class="">
              <p class="font-extrabold text-info text-sm md:text-base">
                Account
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex">
        <div class="hidden md:flex flex-col w-64">
          <AdminNav />
        </div>
        <div
          @click="closeNavDrawer"
          v-if="drawerModal"
          class="lg:hidden fixed h-screen top-0 z-50 bg-black bg-opacity-45 w-full animate__animated animate__slideInLeft"
        >
          <AdminNav @close-drawer="closeNavDrawer" />
        </div>
        <div class="flex flex-col flex-1 overflow-y-auto">
          <slot></slot>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref } from "vue";

const drawerModal = ref(false);

// Function to open navigation drawer
const openNavDrawer = () => {
  drawerModal.value = true;
};

// Function to close navigation drawer
const closeNavDrawer = () => {
  drawerModal.value = false;
};
</script>
