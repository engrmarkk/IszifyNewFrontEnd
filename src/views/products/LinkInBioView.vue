<template>
  <AppBar />

  <!-- hero page -->
  <section class="px-2 pb-20 pt-32 md:py-40 bg-white md:px-0">
    <div class="items-center md:max-w-[90%] px-5 mx-auto xl:px-5">
      <div class="flex items-center sm:-mx-3">
        <div class="w-full md:w-[40%] md:px-3">
          <div
            class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"
          >
            <h1
              class="text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              <span class="block xl:inline"
                >Everything you are, all in one
              </span>
              <span class="block text-primary xl:inline"
                >Simple link in bio.</span
              >
            </h1>
            <p
              class="mx-auto text-sm text-gray-500 sm:max-w-md lg:text-base md:max-w-3xl"
            >
              Our Link in Bio allows you to share all your social media
              profiles, pages and important links with just one simple url.
            </p>

            <div class="">
              <div
                class="flex items-center mt-1 border border-primary rounded shadow-sm"
              >
                <div class="flex items-center gap-1 w-full">
                  <span class="pl-2 font-bold text-black">issly.link/</span>
                  <input
                    type="text"
                    id="input-9"
                    class="w-full h-10 text-sm text-gray-700 focus:outline-none"
                    placeholder="User"
                  />
                </div>
                <button
                  class="h-10 w-[200px] text-sm bg-primary border border-l-0 border-primary rounded-r shadow-sm text-green-50 bold font-semibold hover:text-white hover:bg-green-400 hover:border-green-400 focus:outline-none"
                >
                  CREATE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-[60%] hidden md:block md:px-3">
          <div class="w-full h-auto overflow-hidden">
            <video autoplay muted playsinline>
              <source src="/images/bio.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--  -->
  <section
    class="md:max-w-[90%] px-5 mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3"
  >
    <div class="relative overflow-hidden p-2">
      <div class="flex flex-col justify-between rounded-md p-6">
        <div>
          <img src="/icons/create-doc.svg" alt="create doc" />
        </div>
        <div class="space-y-3 mt-3">
          <h3 class="font-bold text-lg text-black-shades md:text-xl">Create</h3>
          <p class="text-sm md:text-base">
            Easily create & manage all your links in one place: personal
            website, store, recent video or social post.
          </p>
        </div>
      </div>
    </div>
    <div class="relative overflow-hidden p-2">
      <div class="flex flex-col justify-between rounded-md p-3 md:p-6">
        <div>
          <img src="/icons/design-pencil.svg" alt="design" />
        </div>
        <div class="space-y-3 mt-3">
          <h3 class="font-bold text-lg text-black-shades md:text-xl">
            Customize
          </h3>
          <p class="text-sm md:text-base">
            Customize your page with themes, colors, and fonts to match your
            brand.
          </p>
        </div>
      </div>
    </div>
    <div class="relative overflow-hidden p-2">
      <div class="flex flex-col justify-between rounded-md p-6">
        <div>
          <img src="/icons/share-doc.svg" alt="design" />
        </div>
        <div class="space-y-3 mt-3">
          <h3 class="font-bold text-lg text-black-shades md:text-xl">Share</h3>
          <p class="text-sm md:text-base">
            Share your link in bio with your audience and track link clicks.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section
    class="md:w-[90%] mx-auto flex px-5 flex-col md:flex-row items-center justify-center py-32 md:py-40 gap-10 md:gap-20 bg-white"
  >
    <div class="md:w-1/2 h-full">
      <img src="/images/access.png" alt="access" />
    </div>
    <div class="md:w-1/2 h-full">
      <img src="/images/socials.png" alt="access" />
    </div>
  </section>

  <!-- CTA -->
  <div
    class="max-w-[90%] mx-auto bg-gradient-to-br from-green-200 to-green-100 py-10 px-4 sm:px-6 lg:py-14 rounded-lg lg:px-8"
  >
    <div class="flex flex-col md:flex-row items-center gap-5 justify-between">
      <div class="">
        <h3 class="text-2xl font-extrabold sm:text-4xl lg:text-5xl text-black">
          Take control of your links
        </h3>
        <p class="mt-3 text-sm sm:mt-5 md:text-base flex-wrap text-accent">
          You are one click away from taking control of all of your links, and
          instantly get better results.
        </p>
      </div>

      <div class="rounded-md shadow">
        <button
          href=""
          class="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary hover:bg-primary/80 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        >
          Get started
        </button>
      </div>
    </div>
  </div>

  <!-- FAQ -->
  <div>
    <div
      class="flex flex-col md:flex-row md:max-w-[80%] mx-auto p-5 w-full gap-10 md:gap-20 py-10 md:pt-20"
    >
      <div class="md:w-[40%]">
        <h2 class="text-black text-2xl sm:text-3xl md:text-4xl mt-5 font-bold">
          Frequently Asked Questions
        </h2>
      </div>
      <div class="space-y-4 mt-5 md:mt-0 w-full">
        <div v-for="(item, index) in items" :key="index" class="border-t">
          <button
            @click="toggle(index)"
            class="flex justify-between w-full p-4 text-left text-lg font-medium text-gray-700 rounded-lg focus:outline-none"
          >
            <span class="font-medium hover:text-info text-base md:text-lg">{{
              item.title
            }}</span>
            <span v-if="activeIndex === index">-</span>
            <span v-else>+</span>
          </button>
          <div>
            <div
              v-show="activeIndex === index"
              class="p-4 text-accent rounded-lg transition ease-in-out text-sm md:text-base"
            >
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <FooterSection />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useHead } from "@vueuse/head";
import AppBar from "@/components/AppBar.vue";
import FooterSection from "@/components/FooterSection.vue";

// Dynamically set title and meta tags for this component
useHead({
  title: "BIO LINK - All your profile pages in one smart link",
  meta: [
    {
      name: "description",
      content:
        "Our Link in Bio allows you to share all your social media profiles, pages and important links with just one simple url. You can iszzly customize and track link clicks.",
    },
    {
      name: "keywords",
      content:
        "Create bio page, free bio link page, create link in bio, link in bio, customize link in bio for free",
    },
    {
      property: "og:title",
      content: "BIO LINK - All your profile pages in one smart link",
    },
    {
      property: "og:description",
      content:
        "Our Link in Bio allows you to share all your social media profiles, pages and important links with just one simple url. You can iszzly customize and track link clicks.",
    },
  ],
});
const activeIndex = ref(null);

const items = [
  {
    title: "How does it work?",
    content:
      "Our Link in Bio allows you to share all your social media profiles, pages and important links with just one simple url. You can iszzly customize and track link clicks.",
  },
  {
    title: "How do I get started?",
    content:
      "Our Link in Bio allows you to share all your social media profiles, pages and important links with just one simple url. You can iszzly customize and track link clicks.",
  },
  {
    title: "Can I customize my link in bio?",
    content:
      "Our Link in Bio allows you to share all your social media profiles, pages and important links with just one simple url. You can iszzly customize and track link clicks.",
  },
  {
    title: "Can I track link clicks?",
    content:
      "Our Link in Bio allows you to share all your social media profiles, pages and important links with just one simple url. You can iszzly customize and track link clicks.",
  },
];

const toggle = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  }
};
</script>

<style lang="scss" scoped></style>
