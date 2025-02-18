<template>
  <section class="min-h-full px-5 md:px-10 pt-20 md:pt-24 bg-accent-tint">
    <div
      @click="router.go(-1)"
      class="flex items-center gap-1 h-full cursor-pointer hover:text-primary"
    >
      <div>
        <ion-icon name="arrow-back-circle-outline" size="large"></ion-icon>
      </div>
      <div class="font-bold text-sm md:text-base">Back</div>
    </div>

    <section class="p-4 mt-5 bg-white rounded-md">
      <section class="h-full">
        <div
          v-if="loading"
          class="flex min-h-[200px] justify-center items-center"
        >
          <div>
            <img src="/icons/logo.svg" alt="" />
          </div>
        </div>

        <div v-else>
          <!-- <h2 class="fony-bold text-2xl">There is no active QR Codes</h2> -->
          <div
            class="flex flex-col md:flex-row justify-between my-5 bg-white rounded-md"
          >
            <div class="flex gap-5">
              <div
                class="h-[40px] w-[40px] border p-2 rounded-full flex justify-between items-center"
              >
                <img
                  :src="getFaviconUrl(linkDetails?.url)"
                  class="h-full w-full"
                  @error="handleFaviconError($event, linkDetails.url)"
                  :alt="linkDetails?.title"
                />
              </div>
              <div class="space-y-1">
                <h1 class="text-xl capitalize font-extrabold text-black">
                  {{ linkDetails?.title }}
                </h1>

                <p class="text-accent flex">
                  {{ linkDetails?.url }}
                </p>

                <p
                  class="flex gap-2 items-center font-bold text-base md:text-lg text-teal"
                >
                  {{ linkDetails?.short_url }}
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
                @click="OpenEditModal(linkDetails)"
                class="p-2 hover:bg-accent-tint cursor-pointer rounded border border-accent-shades"
              >
                <ion-icon
                  name="create-outline"
                  class="text-black-tint"
                  size="small"
                ></ion-icon>
              </div>
              <div
                @click="handleCopyLink(linkDetails)"
                class="p-2 hover:bg-accent-tint cursor-pointer rounded border border-accent-shades"
              >
                <ion-icon
                  name="copy-outline"
                  class="text-black-tint"
                  size="small"
                ></ion-icon>
              </div>
              <div
                @click="handleShareLink(linkDetails)"
                class="p-2 hover:bg-accent-tint cursor-pointer rounded border border-accent-shades font-semibold flex gap-2 items-center"
              >
                <ion-icon
                  name="share-social-outline"
                  class="text-black-tint"
                  size="small"
                ></ion-icon>
              </div>
              <div
                @click="handleDeleteLink(linkDetails)"
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
    </section>

    <div class="grid grid-col-1 md:grid-cols-2 gap-10 mt-5">
      <div class="bg-white p-5 md:p-8 rounded-md">
        <h2 class="text-xl text-black-shades font-bold">QR Code</h2>

        <div
          v-if="!linkDetails?.want_qr_code"
          class="flex gap-5 mt-5 flex-col md:flex-row"
        >
          <div class="w-[150px] h-[150px] border rounded-md">
            <img src="/icons/qrcode.svg" alt="" />
          </div>
          <div>
            <button
              @click="handleCreateQrcode(linkDetails.id)"
              class="border rounded-md py-2 px-3 font-semibold hover:bg-accent-tint text-sm md:text-base"
            >
              Create QR Code
            </button>
          </div>
        </div>
        <div v-else class="flex flex-col md:flex-row gap-5 mt-5">
          <div class="">
            <div :id="'canvas-container-' + details?.id"></div>
          </div>
          <div>
            <button
              class="border rounded-md py-2 px-3 font-semibold hover:bg-accent-tint text-sm md:text-base"
            >
              View QR Code
            </button>
          </div>
        </div>
      </div>

      <div class="bg-white p-5 md:p-8 rounded-md">
        <h2 class="text-xl text-black-shades font-bold">Isszly Page</h2>

        <div
          v-if="!linkDetails?.isszly_page"
          class="flex gap-5 mt-5 flex-col md:flex-row"
        >
          <div class="w-[150px] h-[150px] border-2 border-dashed rounded-full">
            <img
              src="/icons/mockup.svg"
              class="w-[80px] h-full mx-auto"
              alt=""
            />
          </div>
          <div>
            <button
              class="border rounded-md py-2 px-3 font-semibold hover:bg-accent-tint text-sm md:text-base"
            >
              Add to a page
            </button>
          </div>
        </div>
        <div v-else class="flex flex-col md:flex-row gap-5 mt-5">
          <div class="w-[150px] h-[150px] border-2 border-dashed rounded-full">
            <img src="/icons/mockup.svg" alt="" class="" />
          </div>
          <div>
            <button
              class="border rounded-md py-2 px-3 font-semibold hover:bg-accent-tint text-sm md:text-base"
            >
              Add to a page
            </button>
          </div>
        </div>
      </div>
    </div>

    <LinkQrcode
      :onLoading="onLoading"
      v-if="qrModal"
      :initialData="selectedQrCode"
      @close="closeQrModal"
      @onSave="handleQrStylingSave"
    />

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
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import LinkQrcode from "@/components/links/LinkQrcode.vue";
import { useRouter, useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import HeaderComponent from "@/components/HeaderComponent.vue";
import LoadingSpinner from "@/components/actions/LoadingSpinner.vue";
import QRCodeStyling from "qr-code-styling";
import { getSingleUrlLink, EditUrlLink } from "@/services/link.service.ts";
import ShareModal from "@/components/modals/ShareModal.vue";

const router = useRouter();
const route = useRoute();
const toast = useToast();
const modal = ref(false);
const qrModal = ref(false);
const loading = ref(false);
const linkDetails: any = ref();
const editLink = ref({});
const onLoading = ref(false);
const shareLink = ref({});
const selectedQrCode = ref(null);
const toEditShortLink = ref(false);
const shareLinkModal = ref(false);
const qrCode: any = ref<QRCodeStyling | null>(null);
const details: any = ref(null); // Updated to null for handling
const HeadTitle = ref("Share your Iszzly Link");

const codeId = route.params.id; // props id from the route

// Function to edit url link
const handleEditLink = async (item: any) => {
  onLoading.value = true;
  const result = await EditUrlLink(item.id, {
    title: item.title,
    short_link: item.short_link,
  });
  if (!result?.error) {
    toast.success(result.data.message);
    closeEditModal();
    handelGetSingleLink();
    onLoading.value = false;
  } else {
    console.log(result?.error?.message);
    onLoading.value = false;
  }
};

// Function to get a single url link
const handelGetSingleLink = async () => {
  loading.value = true;
  const result = await getSingleUrlLink(codeId);
  if (!result.error) {
    linkDetails.value = result.data.data;
    details.value = result?.data?.data?.qr_code;
    loading.value = false;
  } else {
    if (result.error) {
      toast.error(result.error.message);
      loading.value = false;
    }
  }
};

// Function to open modal for edit
const OpenEditModal = (data) => {
  console.log(data);
  modal.value = true;
  editLink.value = data;
};

// Function to close modal for edit
const closeEditModal = () => {
  modal.value = false;
};

// Function to edit short link
const editShortLink = () => {
  toEditShortLink.value = true;
};

// Function to get the favicon images for the link
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

// Function to copy link to clipboard
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

//  Function to share links with social icons
const handleShareLink = (item: any) => {
  shareLinkModal.value = true;
  shareLink.value = item;
};

// Function to close share modal
const closeShareModal = () => {
  shareLinkModal.value = false;
};

// Function to create Qrcode for link
const handleCreateQrcode = (item: any) => {
  selectedQrCode.value = item;
  qrModal.value = true;
};

// Function to mount all get function at inital load
onMounted(async () => {
  await handelGetSingleLink();

  // Ensure the DOM is fully updated before generating QR code
  nextTick(() => {
    if (details.value) {
      const code = details.value;
      qrCode.value = new QRCodeStyling({
        width: 150,
        height: 150,
        data: code.short_url,
        dotsOptions: code.qr_style.dotsOptions,
        image: code.qr_style.image,
        backgroundOptions: code.qr_style.backgroundOptions,
        cornersSquareOptions: code.qr_style.cornersSquareOptions,
        cornersDotOptions: code.qr_style.cornersDotOptions,
        imageOptions: code.qr_style.imageOptions,
        qrOptions: code.qr_style.qrOptions,
      });

      const canvasContainer = document.getElementById(
        `canvas-container-${code.id}`
      );
      if (canvasContainer) {
        qrCode.value.append(canvasContainer);
      } else {
        console.log(`Canvas container for code ID ${code.id} not found`);
      }
    }
  });
});
</script>

<style scoped></style>
