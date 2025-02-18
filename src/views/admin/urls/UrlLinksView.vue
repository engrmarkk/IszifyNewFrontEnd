<template>
  <section class="min-h-full px-5 md:px-10 pt-20 md:t-24 bg-accent-tint">
    <div class="flex flex-col md:flex-row md:items-center justify-between">
      <div class="flex justify-between md:justify-start items-center gap-5">
        <HeaderComponent :title="'My Links'" />
        <router-link :to="{ name: 'NewUrlLink' }">
          <button
            class="btn-green-sm py-2 text-xs md:text-sm px-1 pr-3 flex items-center"
          >
            <img src="/icons/add-white.svg" alt="" />
            <span> Create Link</span>
          </button></router-link
        >
      </div>
      <div class="flex gap-3 self-end md:items-center mt-5">
        <div>
          <button
            class="border px-5 rounded text-xs md:text-sm py-2 btnn-sm-outline border-accent text-accent"
          >
            Export
          </button>
        </div>

        <div>
          <popper>
            <div
              class="border text-xs md:text-sm rounded flex justify-between items-center bg-white w-[150px] px-3 py-1.5 md:py-2 font-bold"
            >
              <p>Status: {{ filteredStatus }}</p>
              <div class="h-[20px] w-[20px]">
                <img src="/icons/chevron-down.svg" alt="" />
              </div>
            </div>
            <template #content>
              <div class="shadow bg-white w-[150px] rounded-md">
                <div
                  @click="handleFilterStatus(status)"
                  v-for="(status, index) in statuss"
                  :key="index"
                  class="cursor-pointer hover:bg-accent-tint"
                >
                  <p class="py-2 px-3 font-medium">{{ status }}</p>
                </div>
              </div>
            </template>
          </popper>
        </div>
      </div>
    </div>

    <section class="h-full">
      <div
        v-if="loading"
        class="flex min-h-[500px] justify-center items-center"
      >
        <div>
          <img src="/icons/logo.svg" alt="" />
        </div>
      </div>

      <div v-else v-for="link in links" :key="link.id">
        <!-- <h2 class="fony-bold text-2xl">There is no active QR Codes</h2> -->
        <div
          class="flex flex-col md:flex-row justify-between my-5 p-5 md:p-10 bg-white rounded-md"
        >
          <div class="flex gap-5">
            <div
              class="h-[40px] w-[40px] border p-2 rounded-full flex justify-between items-center"
            >
              <img
                :src="getFaviconUrl(link.url)"
                class="h-full w-full"
                @error="handleFaviconError($event, link)"
                :alt="link?.title"
              />
            </div>
            <div class="space-y-1">
              <h1
                @click="handleViewDetails(link?.id)"
                class="text-xl capitalize font-extrabold text-black hover:text-accent cursor-pointer"
              >
                {{ link?.title }}
              </h1>

              <p class="text-accent flex">
                {{ link?.url }}
              </p>

              <p
                class="flex gap-2 items-center font-bold text-base md:text-lg text-teal"
              >
                {{ link?.short_url }}
              </p>

              <div class="flex gap-10 pt-5">
                <div class="flex gap-2 items-center">
                  <img
                    src="/icons/chart.svg"
                    alt=""
                    class="h-[16px] w-[16px]"
                  />
                  <p
                    class="p-1 bg-accent-tint text-xs rounded text-accent font-medium"
                  >
                    Click data
                  </p>
                </div>
                <div
                  class="flex gap-2 text-xs sm:text-sm items-center text-black"
                >
                  <img
                    src="/icons/calender.svg"
                    alt=""
                    class="h-[16px] w-[16px]"
                  />
                  Sep 9, 2024
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-5 self-end md:self-start mt-5">
            <div
              @click="OpenEditModal(link)"
              class="p-2 hover:bg-accent-tint cursor-pointer rounded border border-accent-shades"
            >
              <ion-icon
                name="create-outline"
                class="text-black-tint"
                size="small"
              ></ion-icon>
            </div>
            <div
              @click="handleCopyLink(link)"
              class="p-2 hover:bg-accent-tint cursor-pointer rounded border border-accent-shades"
            >
              <ion-icon
                name="copy-outline"
                class="text-black-tint"
                size="small"
              ></ion-icon>
            </div>
            <div
              @click="handleShareLink(link)"
              class="p-2 hover:bg-accent-tint cursor-pointer rounded border border-accent-shades font-semibold flex gap-2 items-center"
            >
              <ion-icon
                name="share-social-outline"
                class="text-black-tint"
                size="small"
              ></ion-icon>
            </div>
            <div
              @click="handleDeleteLink(link)"
              class="p-2 hover:bg-accent-tint cursor-pointer rounded border border-accent-shades font-semibold flex gap-2 items-center"
            >
              <ion-icon
                name="trash-outline"
                class="text-black-tint"
                size="small"
              ></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Edit Short Link -->
    <div
      v-if="modal"
      class="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
    >
      <div
        class="relative top-20 mx-auto shadow-xl rounded-md bg-white md:max-w-[70%] p-5 pb-5 md:pb-10"
      >
        <div class="flex justify-end p-2">
          <button
            @click="closeEditModal"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div class="w-[80%] mx-auto">
          <h2 class="text-xl lg:text-2xl font-bold text-black uppercase">
            Edit Link
          </h2>

          <div class="pt-10">
            <div class="space-y-4">
              <h3 class="font-bold">Destination URL</h3>
              <p class="text-black-shades text-sm md:text-base">
                {{ editLink.url }}
              </p>
            </div>

            <div class="space-y-4 pt-10">
              <h3 class="font-bold">Short Link</h3>

              <div v-if="!toEditShortLink" class="flex items-center gap-5">
                <p class="">{{ editLink.short_url }}</p>
                <div
                  @click="editShortLink"
                  class="flex items-center gap-1 border py-2 cursor-pointer hover:bg-accent-tint rounded-md px-5 text-info font-semibold text-sm md:text-base"
                >
                  <div class="w-[14px]">
                    <img
                      src="/icons/edit-blue.svg"
                      alt=""
                      class="object-cover"
                    />
                  </div>
                  <p>Edit</p>
                </div>
              </div>

              <div v-else class="flex items-center gap-2">
                <div class="w-full">
                  <input
                    type="text"
                    :value="editLink.host_url"
                    class="v-input bg-accent-tint"
                  />
                </div>
                /
                <div class="w-full">
                  <input
                    type="text"
                    v-model="editLink.short_link"
                    class="v-input text-black-shades"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="pt-10 font-bold text-black text-lg md:text-xl">
            Other details (Optional)
          </div>

          <div class="space-y-4 pt-5">
            <h3 class="font-bold">Title</h3>
            <input
              type="text"
              v-model="editLink.title"
              class="v-input capitalize text-black-shades"
            />
          </div>

          <div class="mt-10 flex justify-end">
            <button
              @click="handleEditLink(editLink)"
              class="btn-green-sm py-2 text-xs md:text-sm px-3 flex gap-1 items-center"
            >
              <span v-if="onLoading"><LoadingSpinner /></span>
              <span> Update Link</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Share Link -->
    <section
      v-if="shareLinkModal"
      class="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
    >
      <div
        class="rounded w-full px-3 mx-auto flex items-center h-full justify-center"
      >
        <div class="rounded-md bg-white md:max-w-[50%] pt-5 pb-5 md:pb-10">
          <div class="flex justify-end p-2">
            <button
              @click="closeShareModal"
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <ShareModal :urlToShare="shareLink" :headerTitle="HeadTitle" />
        </div>
      </div>
    </section>

    <!-- PAgination -->
    <div v-if="total_items >= 5" class="flex justify-end px-5">
      <div class="example-one">
        <vue-awesome-paginate
          :total-items="total_items"
          :items-per-page="per_page"
          :max-pages-shown="5"
          v-model="page"
          @click="onClickHandler"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getAllLinks, EditUrlLink } from "@/services/link.service";
import { useToast } from "vue-toastification";
import HeaderComponent from "@/components/HeaderComponent.vue";
import LoadingSpinner from "@/components/actions/LoadingSpinner.vue";
import ShareModal from "@/components/modals/ShareModal.vue";
import Popper from "vue3-popper";

const loading = ref(false);
const page = ref(1);
const queryObject = ref({});
const per_page = ref(5);
const total_pages = ref(0);
const total_items = ref(0);
const onLoading = ref(false);
const toEditShortLink = ref(false);
const shareLinkModal = ref(false);
const modal = ref(false);
const toast = useToast();
const router = useRouter();
const HeadTitle = ref("Share your Iszzly Link");
const links = ref([]);
const editLink = ref({});
const shareLink = ref({});
const filteredStatus = ref("active");
const statuss = ref(["active", "hidden"]);

const getLinks = async () => {
  loading.value = true;
  const result = await getAllLinks(
    queryObject.value,
    page.value,
    per_page.value
  );
  if (!result.error) {
    loading.value = false;
    links.value = result.data.data;
    page.value = result?.data?.page;
    per_page.value = result?.data?.per_page;
    total_pages.value = result?.data?.total_pages;
    total_items.value = result?.data?.total_items;
  } else {
    console.log(result.error.message);
    loading.value = false;
  }
};
const handleEditLink = async (item: any) => {
  onLoading.value = true;
  const result = await EditUrlLink(item.id, {
    title: item.title,
    short_link: item.short_link,
  });
  if (!result?.error) {
    onLoading.value = false;
    toast.success(result.data.message);
    closeEditModal();
    getLinks();
  } else {
    console.log(result?.error?.message);
    onLoading.value = false;
  }
};

const handleFilterStatus = (status: string) => {
  queryObject.value.status = status;
  getLinks();
};

const OpenEditModal = (data) => {
  console.log(data);
  modal.value = true;
  editLink.value = data;
};
const closeEditModal = () => {
  modal.value = false;
};
const editShortLink = () => {
  toEditShortLink.value = true;
};
const getFaviconUrl = (url) => {
  try {
    const parsedUrl = new URL(url); // Parse the URL
    return `${parsedUrl.origin}/favicon.ico`; // Generate favicon URL
  } catch (error) {
    console.log("Invalid URL", error);
    return "/icons/website.svg"; // Fallback favicon
  }
};

const handleFaviconError = (event, link) => {
  event.target.src = "/icons/website.svg"; // Replace broken favicon with default
  console.log(`Favicon not found for: ${link.url}`);
};

const handleCopyLink = (link) => {
  navigator.clipboard
    .writeText(link.short_url)
    .then(() => {
      toast.success("Short link copied to clipboard!");
    })
    .catch((err) => {
      toast.error("Failed to copy: ", err);
    });
};
const handleShareLink = (item: any) => {
  shareLinkModal.value = true;
  shareLink.value = item;
};
const closeShareModal = () => {
  shareLinkModal.value = false;
};
const handleViewDetails = (id: string) => {
  router.push(`links/detail/${id}`);
};

onMounted(async () => {
  await getLinks();
});
</script>
