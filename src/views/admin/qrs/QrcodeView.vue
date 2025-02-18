<template>
  <section
    class="min-h-screen overflow-hidden p-3 md:p-10 bg-white-tint pt-20 md:pt-24"
  >
    <div
      class="flex flex-col md:flex-row items-start md:items-center justify-between"
    >
      <div>
        <HeaderComponent :title="'My QR Codes'" />
      </div>
      <div class="flex py-5 md:pt-0 gap-3 items-center">
        <div>
          <button
            class="border px-5 text-xs md:text-sm rounded py-2 btnn-sm-outline border-accent text-accent"
          >
            Export
          </button>
        </div>

        <div>
          <popper>
            <div
              class="border cursor-pointer rounded flex text-xs md:text-sm justify-between items-center bg-white w-[150px] px-3 py-2.5 font-bold"
            >
              <p class="capitalize">Status: {{ filteredStatus }}</p>
              <div class="h[20px] w-[20px]">
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
                  <p
                    class="py-2 px-3 capitalize font-medium text-xs md:text-sm"
                  >
                    {{ status }}
                  </p>
                </div>
              </div>
            </template>
          </popper>
        </div>
      </div>
    </div>

    <section class="h-[650px] scrollbar-hide overflow-y-auto">
      <div>
        <!-- <h2 class="fony-bold text-2xl">There is no active QR Codes</h2> -->
        <div class="">
          <div
            v-if="loading"
            class="flex min-h-[500px] justify-center items-center"
          >
            <div>
              <img src="/icons/logo.svg" alt="" />
            </div>
          </div>
          <div v-else v-for="code in generatedCodes" :key="code.id">
            <div
              class="flex flex-col lg:flex-row justify-between my-5 p-2 md:p-8 bg-white overflow-x-scroll shadow-sm rounded-md"
            >
              <div
                class="flex flex-col lg:flex-row items-start md:items-center gap-1 md:gap-5"
              >
                <!-- <FrameOne :code="code" /> -->
                <!-- <FrameTwo :code="code" /> -->
                <!-- <FrameThree :code="code" /> -->
                <!-- <FrameFour :code="code" /> -->
                <!-- <FrameFive :code="code" /> -->
                <!-- <FrameSix :code="code" /> -->
                <FrameSeven :code="code" />
                <!-- <div class="h-[80px] w-[80px] md:h-[100px] md:w-[100px]">
                  <div
                    :id="'canvas-container-' + code.id"
                    class="h-[80px] w-[80px] md:h-[100px] md:w-[100px]"
                  ></div>
                </div> -->
                <div class="space-y-1">
                  <h1
                    class="text-lg md:text-xl w-full md:w-[500px] capitalize font-extrabold capital text-black"
                  >
                    {{ code?.title ? code?.title : "Untitled" }}
                  </h1>
                  <p class="text-black font-bold text-xs md:text-sm">
                    {{ code?.category === "url" ? "website" : code?.category }}
                  </p>
                  <div class="text-black flex gap-1">
                    <div>
                      <ion-icon
                        name="return-down-forward"
                        class="text-black-tint"
                        size="small"
                      ></ion-icon>
                    </div>
                    <p class="text-xs md:text-sm truncate w-[400px]">
                      {{ code?.url }}
                    </p>
                  </div>

                  <div class="flex flex-col sm:flex-row gap-3 md:gap-7 pt-2">
                    <div class="flex gap-2 items-center">
                      <div>
                        <ion-icon
                          name="stats-chart"
                          class="text-black-tint"
                          size="small"
                        ></ion-icon>
                      </div>
                      <p
                        class="p-2 bg-accent-tint text-xs rounded text-accent font-medium"
                      >
                        Scan data
                      </p>
                    </div>
                    <div class="flex gap-2 items-center text-black">
                      <div>
                        <ion-icon
                          name="calendar-outline"
                          size="small"
                        ></ion-icon>
                      </div>
                      <p class="text-xs">
                        {{ code?.created }}
                      </p>
                    </div>
                    <div class="flex gap-2 items-center text-black">
                      <div>
                        <ion-icon name="link-outline" size="small"></ion-icon>
                      </div>
                      <p class="font-bold text-xs md:text-sm text-teal">
                        {{ code?.short_url }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex py-5 pl-2 md:pl-0 md:py-0 gap-5 self-start sm:mt-5 lg:mt-0"
              >
                <div class="hover:bg-accent-tint hover:cursor-pointer">
                  <Popper
                    :hover="true"
                    :placement="'bottom'"
                    class="animate__animated animate__zoomIn"
                  >
                    <div
                      class="w-[30px] md:w-[35px] h-full p-2 rounded border border-accent-shades"
                    >
                      <ion-icon
                        name="ellipsis-horizontal"
                        class="text-black-tint"
                        size="small"
                      ></ion-icon>
                    </div>

                    <template #content>
                      <div
                        class="w-[200px] py-1 border bg-white rounded-lg shadow-lg z-30"
                      >
                        <!-- <div
                          class="text-accent py-2 px-5 cursor-pointer hover:bg-accent-tint capitalize font-semibold hover:border-l hover:border-black"
                        >
                          duplicate
                        </div> -->
                        <div
                          @click="handleDownload(code.id)"
                          class="text-accent py-2 px-5 cursor-pointer hover:bg-accent-tint capitalize font-medium hover:border-l hover:border-black flex items-center gap-2"
                        >
                          <div>
                            <ion-icon
                              name="cloud-download-outline"
                              class="text-black-tint"
                              size="small"
                            ></ion-icon>
                          </div>
                          <div>Download</div>
                        </div>
                        <div
                          class="text-accent py-2 px-5 cursor-pointer hover:bg-accent-tint capitalize font-medium hover:border-l hover:border-black"
                        >
                          <div
                            v-if="!code.hidden"
                            class="flex items-center gap-2"
                            @click="handlehiddenQrcode(code, true)"
                          >
                            <div>
                              <ion-icon
                                name="eye-off-outline"
                                class="text-black-tint"
                                size="small"
                              ></ion-icon>
                            </div>
                            <div>hide QR Code</div>
                          </div>
                          <div
                            v-else
                            class="flex items-center gap-2"
                            @click="handlehiddenQrcode(code, false)"
                          >
                            <div>
                              <ion-icon
                                name="eye-outline"
                                class="text-black-tint"
                                size="small"
                              ></ion-icon>
                            </div>
                            <div>Show QR Code</div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </Popper>
                </div>
                <div
                  class="p-2 h-full hover:bg-accent-tint cursor-pointer rounded border border-accent-shades hover:cursor-pointer"
                  @click="handleCustomiseQrcode(code)"
                >
                  <div>
                    <ion-icon
                      name="color-palette-outline"
                      class="text-black-tint"
                      size="small"
                    ></ion-icon>
                  </div>
                </div>
                <div
                  class="p-2 h-full hover:bg-accent-tint cursor-pointer rounded border border-accent-shades hover:cursor-pointer"
                  @click="handleEditQrcode(code.id)"
                >
                  <div>
                    <ion-icon
                      name="create-outline"
                      class="text-black-tint"
                      size="small"
                    ></ion-icon>
                  </div>
                </div>

                <div
                  @click="handleGoQrcode(code.id)"
                  class="p-2 h-full hover:bg-accent-tint cursor-pointer rounded border border-accent-shades font-semibold flex gap-2 items-center hover:cursor-pointer"
                >
                  <div>
                    <ion-icon
                      name="stats-chart"
                      class="text-black-tint"
                      size="small"
                    ></ion-icon>
                  </div>
                  <p class="text-xs">view</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </div>
    </section>

    <UpdateQrStyle
      :onLoading="onLoading"
      v-if="qrModal"
      :qrCodeData="selectedQrCode"
      @close="closeQrModal"
      @onSave="handleQrStylingSave"
    />

    <div v-if="modal">
      <DeleteModal
        @close-modall="closeModal"
        :data="data"
        :isLoading="isLoading"
        @delete-data="handleDeleteCode"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from "vue";
import { useRouter } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
import QRCodeStyling from "qr-code-styling";
import {
  getAllQrCodes,
  deleteSingleQrcode,
  postStyleQrCode,
  updateQrCode,
} from "@/services/qrcode.service";
import DeleteModal from "@/components/modals/DeleteModal.vue";
import UpdateQrStyle from "@/components/modals/UpdateQrStyle.vue";
import { useToast } from "vue-toastification";
import moment from "moment";
import FrameOne from "@/components/frames/qrcodes/FrameOne";
import FrameTwo from "@/components/frames/qrcodes/FrameTwo";
import FrameThree from "@/components/frames/qrcodes/FrameThree";
import FrameFour from "@/components/frames/qrcodes/FrameFour";
import FrameFive from "@/components/frames/qrcodes/FrameFive";
import FrameSix from "@/components/frames/qrcodes/FrameSix";
import FrameSeven from "@/components/frames/qrcodes/FrameSeven";

const loading = ref(false);
const page = ref(1);
const queryObject = ref({});
const per_page = ref(5);
const total_pages = ref(0);
const total_items = ref(0);
const isLoading = ref(false);
const onLoading = ref(false);
const modal = ref(false);
const data = ref();
const qrModal = ref(false);
const router = useRouter();
const qrCode = ref<QRCodeStyling | null>(null);
const generatedCodes = ref([]);
const filteredStatus = ref("active");
const toast = useToast();
const selectedQrCode = ref(null);
const statuss = ref(["active", "hidden", "customized"]);

// Function to generate and append QR codes
const generateQRCodes = () => {
  generatedCodes.value.forEach((code: any) => {
    const qrCodeInstance = new QRCodeStyling({
      width: 80,
      height: 80,
      data: code.short_url,
      frameOptions: code.qr_style.frameOptions,
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
      canvasContainer.innerHTML = ""; // Clear any previous QR codes
      qrCodeInstance.append(canvasContainer);
    } else {
      console.log(`Canvas container for code ID ${code.id} not found`);
    }
  });
};

// Fetch all QR codes
const getAllQrCode = async () => {
  loading.value = true;
  const result = await getAllQrCodes(
    queryObject.value,
    page.value,
    per_page.value
  );
  if (!result.error) {
    generatedCodes.value = result?.data?.data;
    page.value = result?.data?.page;
    per_page.value = result?.data?.per_page;
    total_pages.value = result?.data?.total_pages;
    total_items.value = result?.data?.total_items;
    loading.value = false;
  } else {
    toast.error(result.error.message);
    loading.value = false;
  }
};

const handleFilterStatus = (status: string) => {
  queryObject.value.status = status;
  getAllQrCode();
};

// Re-generate QR codes when `generatedCodes` updates
watch(generatedCodes, () => {
  nextTick(() => {
    generateQRCodes();
  });
});

// Handle edit and delete functions
const handleEditQrcode = (id: any) => {
  router.push(`qrcode/edit/${id}`);
};

const handleGoQrcode = (id: any) => {
  router.push(`qrcode/view/${id}`);
};

const closeModal = () => {
  modal.value = false;
};

// Function to handle pagination
const onClickHandler = async () => {
  getAllQrCode();
  page.value = 1;
};

const handlehiddenQrcode = async (code: any, type: boolean) => {
  isLoading.value = true;
  const result = await updateQrCode(code.id, {
    hide: type,
  });
  if (!result.error) {
    toast.success(result.data.message);
    getAllQrCode();
    isLoading.value = false;
  } else {
    if (result?.error) {
      toast.error(result?.error?.message);
      isLoading.value = false;
    }
  }
};

// const handleDeleteCode = async (item: any) => {
//   isLoading.value = true;
//   const response = await deleteSingleQrcode(item.id);
//   if (!response?.error) {
//     toast.success(response?.data?.msg || "QR code deleted successfully");
//     isLoading.value = false;
//     data.value = "";
//     modal.value = false;
//     await getAllQrCode(); // Re-fetch QR codes after deletion
//   } else {
//     toast.error(response?.error?.msg || "Error! Try again");
//     isLoading.value = false;
//   }
// };

const closeQrModal = () => {
  qrModal.value = false;
};

const handleCustomiseQrcode = (code: any) => {
  if (code && code.short_url) {
    selectedQrCode.value = code;
    qrModal.value = true;
  } else {
    console.log("QR code data is missing or incomplete", code);
  }
};

// Handle saving updated QR code styles
const handleQrStylingSave = async (updatedStyles: any) => {
  onLoading.value = true;
  const result = await postStyleQrCode(
    updatedStyles.id,
    updatedStyles.updatedData.qr_style
  );
  if (!result.error) {
    onLoading.value = false;
    toast.success(result.data.message);
    qrModal.value = false;
    await getAllQrCode(); // Re-fetch QR codes after saving
  } else {
    toast.error(result.error.message);
    onLoading.value = false;
  }
};

// Handle download function for QR code
const handleDownload = (id: any) => {
  const selectedCode = generatedCodes.value.find((code: any) => code.id === id);
  if (selectedCode) {
    const qrCodeInstance = new QRCodeStyling({
      width: 300,
      height: 300,
      data: selectedCode.short_url,
      dotsOptions: selectedCode.qr_style.dotsOptions,
      backgroundOptions: selectedCode.qr_style.backgroundOptions,
      image: selectedCode.qr_style.image,
      imageOptions: selectedCode.qr_style.imageOptions,
      qrOptions: selectedCode.qr_style.qrOptions,
    });

    qrCodeInstance.download({
      name: `qrcode-${selectedCode.title || "untitled"}`,
      extension: "png",
    });
  } else {
    toast.error("QR code not found.");
  }
};

// MOUNTED
onMounted(async () => {
  await getAllQrCode(); // Fetch initial QR codes

  // Ensure QR codes are generated once the DOM is ready
  nextTick(() => {
    generateQRCodes();
  });
});
</script>

<style scoped></style>
