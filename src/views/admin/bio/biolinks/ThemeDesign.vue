<template>
  <div>
    <div class="border mt-8 md:mt-10 border-accent p-5 rounded-md">
      <h2 class="capitalize text-xl font-bold">profile</h2>
      <div class="flex gap-10 mt-5 items-center">
        <div
          class="w-36 h-36 flex justify-center items-center rounded-full border-2 border-accent border-dotted"
        >
          <img src="/icons/avatar.svg" alt="avatar" />
        </div>

        <div class="space-y-2 flex-1">
          <p><input type="textt" class="v-input" /></p>
          <p><input type="text" class="v-input" /></p>
        </div>
      </div>
      <div class="mt-5">
        <button
          class="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 w-full text-lg uppercase px-4 rounded"
        >
          save
        </button>
      </div>
    </div>

    <!-- Themes -->

    <div class="border mt-8 border-accent p-5 rounded-md">
      <h2 class="capitalize text-xl font-bold">Themes</h2>

      <div class="mt-5"><ThemesStaticDesigns /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ThemesStaticDesigns from "@/views/admin/bio/Themes/ThemesStaticDesigns";

const tabs = ref("link");

const toggleTab = (tab: any) => {
  tabs.value = tab;
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
