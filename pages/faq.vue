<template>
  <section class="min-h-screen">
    <div class="bg-primary pt-10 md:pt-20">
      <div class="w-full h-full relative md:container mx-auto px-5">
        <div class="w-full h-[200px] md:h-[300px]">
          <div class="flex h-full items-center">
            <div class="w-full px-5">
              <h2
                class="text-white text-[30px] sm:text-[50px] lg:text-[70px] 2xl:text-[90px] font-extrabold capitalize"
              >
                {{ "FAQs" }}
              </h2>

              <p class="mt-10 text-sm md:text-lg text-white md:xl 2xl:text-2xl">
                {{ "End your curiosity" }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- main -->
    <div class="mt-10 md:mt-20">
      <h2 class="text-accent text-5xl mt-5 text-center pt-5 md:pt-8 font-bold">
        Frequently Asked Questions
      </h2>
      <div
        class="flex flex-col md:flex-row items-center container mx-auto p-5 w-full gap-10 md:gap-20 py-10 md:py-20"
      >
        <div class="w-full">
          <div class="w-[700px] h-[700px]">
            <img
              src="/icons/faq.svg"
              alt=""
              title="https://storyset.com/people"
            />
          </div>
        </div>
        <div class="space-y-4 mt-5 md:mt-0 w-full">
          <div v-for="(item, index) in items" :key="index" class="border-t">
            <button
              @click="toggle(index)"
              class="flex justify-between w-full p-4 text-left text-lg font-medium text-gray-700 rounded-lg focus:outline-none"
            >
              <span class="font-medium">{{ item.title }}</span>
              <span v-if="activeIndex === index">-</span>
              <span v-else>+</span>
            </button>
            <div>
              <div
                v-show="activeIndex === index"
                class="p-4 text-gray-600 bg-gray-50 rounded-lg transition ease-in-out"
              >
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
const activeIndex = ref(null);
const items = ref([
  {
    title: "",
    content: "",
  },
  {
    title: "",
    content: "",
  },
  {
    title: "",
    content: "",
  },
  {
    title: "",
    content: "",
  },
]);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style>
/* Add any additional custom styles here */
</style>
