<template>
  <div
    class="h-[600px] w-[300px] bg-gradient-to-tr mx-auto bg-accent p-1 shadow-lg rounded-3xl"
  >
    <div class="bg-white h-full rounded-3xl px-5 py-10 overflow-auto">
      <div class="flex flex-col gap-2 justify-center items-center">
        <div class="h-20 w-20 rounded-full shadow-accent-tint drop-shadow-md">
          <img src="/images/pic.jpg" class="rounded-full" />
        </div>
        <p class="text-black font-bold">Olajide Olamide</p>
        <p class="text-black font-semibold">Software Developer</p>
      </div>
      <div class="mt-10 overflow-y-scroll">
        <div
          v-for="item in items"
          :key="item.id"
          class="rounded-full mb-4 p-2 bg-white"
          :class="
            item.flag !== 'header'
              ? 'bg-white border border-transparent shadow-slate-50 theme-box-shadow'
              : ''
          "
        >
          <div class="flex gap-3 items-center">
            <div class="w-8 h-8 rounded-full flex justify-center items-center">
              <img
                v-if="item.img"
                :src="item.img"
                alt="Image"
                class="w-full h-full object-cover bg-gray-100 rounded-full"
              />
            </div>
            <div class="flex-1">
              <p
                v-if="item.flag === 'header'"
                class="font-medium text-xs clear-start text-black uppercase"
              >
                {{ item.title }}
              </p>
              <div v-else>
                <a
                  v-if="item.title"
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs"
                >
                  <p class="font-medium clear-start text-black">
                    {{ item.title }}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  items: Object,
});
</script>

<style lang="scss" scoped></style>
