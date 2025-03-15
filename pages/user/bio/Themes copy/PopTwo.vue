<template>
  <div class="h-[600px] w-[300px] mx-auto bg-white p-1 shadow-lg rounded-3xl">
    <div class="bg-red-950 h-full rounded-3xl px-5 py-10 overflow-auto">
      <div class="flex flex-col gap-2 justify-center items-center">
        <div class="h-20 w-20 rounded-full">
          <img src="/images/pic.jpg" class="rounded-full" />
        </div>
        <p class="text-white font-bold">Olajide Olamide</p>
        <p class="text-white font-bold">Software Developer</p>
      </div>
      <div class="mt-10 overflow-y-scroll">
        <div
          v-for="item in items"
          :key="item.id"
          class="rounded-lg mb-4 p-2"
          :class="item.flag !== 'header' ? 'bg-white shadow-md' : ''"
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
                class="font-medium text-xs clear-start text-white uppercase"
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
                  <p class="font-medium clear-start bg-white text-black">
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
const props = defineProps({
  items: Object,
});
</script>

<style lang="scss" scoped></style>
