<template>
  <div>
    <div class="mt-5 md:mt-8">
      <button
        @click="openModal"
        class="py-3 rounded-2xl px-6 text-sm font-bold text-white hover:bg-success/90 bg-success"
      >
        Add New Shop
      </button>
    </div>
    <div class="relative mt-8">
      <div
        class="absolute left-1/2 top-[18px] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[4px] bg-white"
      ></div>
      <div class="mt-4 flex items-center gap-6 rounded-md bg-white p-4">
        <picture class="relative max-w-48"
          ><source
            media="(max-width: 768px)"
            srcset="
              https://mfe-commerce.production.linktr.ee/images/5578.414a0ddb7b8772835655.webp
            " />
          <source
            media="(min-width: 769px)"
            srcset="
              https://mfe-commerce.production.linktr.ee/images/8838.8ff9be9c41d637cbd0dd.webp
            " />
          <img
            src="https://mfe-commerce.production.linktr.ee/images/8838.8ff9be9c41d637cbd0dd.webp"
            alt="products placeholder"
            role="presentation"
            class="h-full w-full object-contain"
        /></picture>
        <div class="text-pretty md:pr-8">
          <h1 class="text-black text-lg leading-heading mb-2 font-semibold">
            Kick things off by listing your products.
          </h1>
          <p class="text-black text-md text-sm">
            Easily copy and paste links from any source.
          </p>
        </div>
      </div>
    </div>

    <!-- shop modal -->
    <div
      v-if="shopModal"
      class="fixed inset-0 bg-black/85 flex items-center justify-center"
    >
      <div
        class="bg-white rounded-lg w-full md:w-[60%] py-5 md:py-8 relative shadow-md"
      >
        <div class="px-5 flex justify-between items-center">
          <div class="text-black capitalize text-base md:text-lg font-bold">
            Add to your shop
          </div>
          <button
            @click="closeModal"
            class="border px-3.5 bg-accent-shades rounded-full py-2 cursor-pointer text-gray-500 hover:text-white hover:bg-primary"
          >
            x
          </button>
        </div>
        <div class="space-y-3 px-5">
          <div
            class="bg-accent-tint p-5 rounded-lg mt-8 cursor-pointer hover:bg-accent-shades"
          >
            <div>
              <h2 class="text-black font-bold text-base md:text-lg">Product</h2>
              <p>Add a product to your shop.</p>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <!-- <div
            class="bg-accent-tint p-5 rounded-lg cursor-pointer hover:bg-accent-shades"
          >
            <div>
              <h2 class="text-black font-bold text-base md:text-lg">
                Collection
              </h2>
              <p>Organize products into a collection.</p>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const shopModal = ref(true);

const openModal = () => {
  shopModal.value = true;
};
</script>

<style lang="scss" scoped></style>
