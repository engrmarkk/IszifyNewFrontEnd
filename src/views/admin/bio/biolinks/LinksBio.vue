<template>
  <div class="mt-5 md:mt-7">
    <div class="flex gap-5">
      <button
        @click="openModal('link')"
        class="border-2 shadow-sm py-2 rounded-2xl px-2 text-xs font-bold text-white hover:bg-info/90 bg-info"
      >
        Add New Link
      </button>
      <button
        @click="openModal('social')"
        class="border-2 shadow-sm py-2 rounded-2xl px-2 text-xs font-bold text-black bg-success-shades hover:bg-success/90"
      >
        Add Social Icons
      </button>
      <button
        @click="openModal('header')"
        class="border-2 shadow-sm shadow-accent py-2 rounded-2xl px-2 text-xs font-bold text-black hover:bg-accent-shades/90"
      >
        Add Header
      </button>
    </div>

    <div class="mt-10">
      <div
        class="flex gap-5 items-center"
        v-for="(item, index) in items"
        :key="item.id"
        @dragover.prevent
        @drop="onDrop(index)"
      >
        <div
          class="cursor-grab"
          draggable="true"
          @dragstart="onDragStart(index)"
        >
          <img src="/icons/drag.svg" alt="" />
        </div>
        <div
          class="p-5 bg-white-shades flex justify-between items-center shadow-md mb-3 w-full rounded-md"
        >
          <div class="flex item-center gap-5 cursor-pointer flex-1">
            <div class="w-8 h-8 bg-accent-shades rounded-full p-1">
              <img :src="item.img ? item.img : '/icons/img.svg'" alt="image" />
            </div>
            <div>
              <p class="text-xs md:text-sm font-bold">{{ item.title }}</p>
              <p class="text-xs pt-1">{{ item.url }}</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-[24px] h-[24px cursor-pointer">
              <img src="/icons/eye-open.svg" class="w-[24px] h-[24px]" />
            </div>
            <div class="w-[20px] h-[20px] cursor-pointer">
              <img src="/icons/delete.svg" class="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Links....... -->
    <div
      v-if="linkModal"
      class="fixed inset-0 bg-black/85 flex items-center justify-center"
    >
      <div
        class="bg-white rounded-lg w-full md:w-[500px] pt-5 relative shadow-md"
      >
        <div class="px-5 flex justify-between items-center">
          <div class="text-black capitalize text-base md:text-lg font-bold">
            {{ linkTitle }}
          </div>
          <button
            @click="closeModal"
            class="border px-2.5 bg-accent-shades rounded-full py-1 cursor-pointer text-gray-500 hover:text-white hover:bg-primary"
          >
            x
          </button>
        </div>
        <div class="flex gap-5 mt-10 items-center px-10">
          <div class="w-[100px]">
            <div
              class="w-[100px] h-[100px] border flex justify-center items-center cursor-pointer border-dashed hover:border-dotted border-accent"
            >
              <div>
                <img src="/icons/image-grey.svg" alt="" class="" />
                <p class="text-xs">Picture</p>
              </div>
            </div>
          </div>
          <div class="flex-1">
            <p>
              <input type="text" class="v-input w-full" placeholder="Title" />
            </p>
            <p class="mt-3">
              <input type="url" class="v-input w-full" placeholder="URL" />
            </p>
          </div>
        </div>

        <div class="flex justify-between items-center mt-8 px-10">
          <p class="text-sm md:text-base text-accent">
            Bring attention to this link
          </p>
          <p><input type="checkbox" class="toggle" /></p>
        </div>

        <div class="mt-10">
          <button
            class="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 w-full text-lg uppercase px-4 rounded"
          >
            save
          </button>
        </div>
      </div>
    </div>

    <!-- Socials..... -->
    <div>
      <div
        v-if="socialModal"
        class="fixed inset-0 bg-black/85 flex justify-center"
      >
        <div class="rounded-lg bg-white w-[600px] h-[700px] mt-20">
          <div class="flex justify-between items-center px-5 py-5 border-b">
            <div
              class="text-black flex capitalize text-base md:text-lg font-bold"
            >
              Socials
            </div>
            <button
              @click="closeModal"
              class="border px-2.5 bg-accent-shades rounded-full py-1 cursor-pointer text-gray-500 hover:text-white hover:bg-primary"
            >
              x
            </button>
          </div>

          <div
            class="px-10 py-5 flex flex-col gap-3 h-[600px] overflow-y-auto no-scrollbar;"
          >
            <div
              @click="openSocialForm(social)"
              v-for="social in allSocials"
              :key="social.id"
              class="flex justify-between items-center border shadow-sm p-2 rounded-md cursor-pointer"
            >
              <div class="flex items-center gap-3">
                <div class="w-[24px] h-[24px]">
                  <img :src="`/socials/${social.icon}.svg`" alt="" />
                </div>
                <p class="capitalize font-semibold">{{ social.title }}</p>
              </div>
              <div>
                <button class="text-info font-bold">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- inner socials -->
      <div
        v-if="innerSocialModal"
        class="fixed inset-0 bg-black/85 flex items-center justify-center"
      >
        <div
          class="bg-white rounded-lg w-full md:w-[500px] pt-5 relative shadow-md"
        >
          <div class="px-5 border-b pb-3 flex justify-between items-center">
            <div
              @click="closeInnerSocial"
              class="capitalize cursor-pointer hover:text-primary text-base md:text-sm"
            >
              back
            </div>
            <div class="text-black capitalize text-base md:text-lg font-bold">
              {{ dataSocial.title }}
            </div>
            <button
              @click="closeModal"
              class="border px-2.5 bg-accent-shades rounded-full py-1 cursor-pointer text-gray-500 hover:text-white hover:bg-primary"
            >
              x
            </button>
          </div>

          <div class="px-10 mt-5">
            <p class="mt-3">
              <input
                v-model="sociaTitle"
                type="text"
                :placeholder="
                  dataSocial.placeholder ? dataSocial.placeholder : 'app url'
                "
                class="v-input w-full"
              />
            </p>

            <div class="flex justify-between items-center mt-8">
              <p class="text-sm md:text-base text-accent">
                Bring attention to this link
              </p>
              <p><input type="checkbox" class="toggle" /></p>
            </div>
          </div>

          <div class="mt-10">
            <button
              class="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 w-full text-lg uppercase px-4 rounded"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Headers........ -->
    <div
      v-if="headerModal"
      class="fixed inset-0 bg-black/85 flex items-center justify-center"
    >
      <div
        class="bg-white rounded-lg w-full md:w-[500px] pt-5 relative shadow-md"
      >
        <div class="px-5 flex justify-between items-center">
          <div class="text-black capitalize text-base md:text-lg font-bold">
            Add header
          </div>
          <button
            @click="closeModal"
            class="border px-2.5 bg-accent-shades rounded-full py-1 cursor-pointer text-gray-500 hover:text-white hover:bg-primary"
          >
            x
          </button>
        </div>
        <div class="mt-10 px-10">
          <div class="flex-1">
            <p>
              <input
                type="text"
                class="v-input w-full"
                placeholder="Header title"
              />
            </p>
          </div>
        </div>

        <div class="mt-10">
          <button
            class="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 w-full text-lg uppercase px-4 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { allSocials } from "@/utils/socials";

const linkTitle = ref("add");
const linkModal = ref(false);
const socialModal = ref(false);
const innerSocialModal = ref(false);
const headerModal = ref(false);

const sociaTitle = ref("");
const dataSocial: any = ref();

const items = ref([
  {
    id: 1,
    img: "",
    title: "New music is out",
    url: "https://www.youtube.com/watch?v=yBoGd-9uVBU",
    flag: "link",
  },
  {
    id: 2,
    img: "",
    title: "Sign up for my newsletter",
    url: "https://medium.com/@faith_55729",
    flag: "link",
  },
  {
    id: 3,
    img: "",
    title: "Next livestream",
    url: "https://livestream.com/accounts/89344/panorama",
    flag: "link",
  },
  { id: 4, img: "", title: "Show your support", url: "", flag: "header" },
  {
    id: 4,
    img: "",
    title: "Buy me a coffee",
    url: "https://buybetter.ng/shop/",
    flag: "link",
  },
]);

const socials = ref([
  {
    title: "github",
    url: "https://github.com/",
  },
  {
    title: "instagram",
    url: "https://www.instagram.com/",
  },
  {
    title: "facebbok",
    url: "https://www.facebook.com/",
  },
]);

const draggedItemIndex = ref(null);

const onDragStart = (index) => {
  draggedItemIndex.value = index;
};

const onDrop = (index) => {
  if (draggedItemIndex.value !== null) {
    const draggedItem = items.value[draggedItemIndex.value];
    items.value.splice(draggedItemIndex.value, 1); // Remove the dragged item
    items.value.splice(index, 0, draggedItem); // Insert it at the new index
    draggedItemIndex.value = null;
  }
};

const openModal = (type) => {
  if (type === "link") {
    linkModal.value = true;
  }
  if (type === "social") {
    socialModal.value = true;
  }
  if (type === "header") {
    headerModal.value = true;
  }
};

const closeModal = () => {
  linkModal.value = false;
  socialModal.value = false;
  headerModal.value = false;
  innerSocialModal.value = false;
};

const openSocialForm = (item) => {
  dataSocial.value = item;
  socialModal.value = false;
  innerSocialModal.value = true;
};
const closeInnerSocial = () => {
  socialModal.value = true;
  innerSocialModal.value = false;
};
</script>

<style scoped></style>
