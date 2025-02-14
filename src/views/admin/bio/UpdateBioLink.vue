<template>
  <div class="bg-[#e8edf1] min-h-screen pt-20 md:pt-24 2xl:pt-32 px-5 md:px-10">
    <div class="flex gap-20">
      <div class="w-[60%]">
        <!-- <h1 class="text-xl font-medium text-accent">
          Hi Laemmy, Welcome to Iszify
          <span class="text-black font-bold">Linktree</span>
        </h1> -->
        <div class="mt-8">
          <div class="flex w-full border-b-2 border-white">
            <div
              @click="toggleTab('linkked')"
              class="border-b-4 pr-5 pb-3 text-sm md:text-base cursor-pointer font-medium"
              :class="active.includes('/linkked') ? 'border-primary' : ''"
            >
              Links
            </div>
            <div
              @click="toggleTab('design')"
              class="border-b-4 px-5 pb-3 text-sm md:text-base cursor-pointer font-medium"
              :class="active.includes('/design') ? 'border-primary' : ''"
            >
              Design
            </div>
            <div
              @click="toggleTab('shop')"
              class="border-b-4 px-5 pb-3 text-sm md:text-base cursor-pointer font-medium"
              :class="active.includes('/shop') ? 'border-primary' : ''"
            >
              Shop
            </div>
            <div
              @click="toggleTab('analytics')"
              class="border-b-4 px-5 pb-3 text-sm md:text-base cursor-pointer font-medium"
              :class="active.includes('/analytics') ? 'border-primary' : ''"
            >
              Analytics
            </div>
            <div
              @click="toggleTab('settings')"
              class="border-b-4 px-5 pb-3 text-sm md:text-base cursor-pointer font-medium"
              :class="active.includes('/settings') ? 'border-primary' : ''"
            >
              Settings
            </div>
          </div>

          <!-- Router view for other pages -->
          <div class="overflow-y-scroll h-[600px]">
            <router-view></router-view>
          </div>
        </div>
      </div>

      <!-- Preview of the links -->
      <div class="w-[40%] border-l-2 border-white">
        <h2
          class="text-center flex gap-4 items-center justify-center font-bold text-accent text-sm md:text-base"
        >
          <p class="text-info border border-accent w-[200px] px-5 rounded">
            iszy.ly/laemmy
          </p>
          <p @click="copyUrl" class="w-5 h-5">
            <img src="/icons/copy-grey.svg" alt="" />
          </p>
          <p class="w-5 h-5"><img src="/icons/dots.svg" alt="" /></p>
        </h2>
        <div class="mt-5 md:mt-10 2xl:mt-20">
          <BasicTheme v-if="theme === 'BasicTheme'" :items="items" />
          <PopOne v-if="theme === 'PopOne'" :items="items" />
          <PopTwo v-if="theme === 'PopTwo'" :items="items" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import PopOne from "@/views/admin/bio/Themes/PopOne";
import PopTwo from "@/views/admin/bio/Themes/PopTwo";
import BasicTheme from "@/views/admin/bio/Themes/BasicTheme";

const router = useRouter();
const route = useRoute();
const tabs = ref("linkked");
const theme = ref("BasicTheme");

const items = ref([
  {
    id: 1,
    img: "/icons/image-grey.svg",
    title: "New music is out",
    url: "https://www.youtube.com/watch?v=yBoGd-9uVBU",
    flag: "link",
  },
  {
    id: 2,
    img: "/icons/image-grey.svg",
    title: "Sign up for my newsletter",
    url: "https://medium.com/@faith_55729",
    flag: "link",
  },
  {
    id: 3,
    img: "/icons/image-grey.svg",
    title: "Next livestream",
    url: "https://livestream.com/accounts/89344/panorama",
    flag: "link",
  },
  { id: 4, img: "", title: "Show your support", url: "", flag: "header" },
  {
    id: 4,
    img: "/icons/image-grey.svg",
    title: "Buy me a coffee",
    url: "https://buybetter.ng/shop/",
    flag: "link",
  },
]);

const active = computed(() => {
  return route.path;
});

const toggleTab = (tab: any) => {
  router.push(`/admin/bio/1/links/${tab}`);
};

const copyUrl = () => {
  //
};
</script>

<style scoped></style>
