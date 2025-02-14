<!-- eslint-disable vue/no-side-effects-in-computed-properties -->
<template>
  <section class="pt-14 container mx-auto">
    <!-- Loading section -->
    <section v-if="loading">
      <p>Loading...</p>
    </section>
    <div v-else class="relative">
      <!-- Header -->
      <div
        class="block w-full bg-gradient-to-b from-primary-shades text-center px-5 to-primary bg-clip-text font-bold text-transparent text-3xl sm:text-4xl"
      >
        QR Code Generator: Create your Free QR Code
      </div>
      <!-- Main content -->
      <div
        class="flex flex-col lg:flex-row gap-5 mt-5 p-5 md:p-10 mx-auto w-[80%]"
      >
        <!-- QR Code Categories and Dynamic Form -->
        <div class="flex-1 overflow-y-scroll h-full">
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            <div v-for="category in categories" :key="category.name">
              <div
                @click="handleCats(category.name)"
                class="flex border rounded-md p-3 gap-3 items-center hover:cursor-pointer"
                :class="
                  activeCat === category.name ? 'bg-info-tint text-info' : ''
                "
              >
                <img :src="getIconSrc(category.name)" alt="" />
                <p class="font-bold">{{ category.name }}</p>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <p class="text-xs font-bold">Title (Optional)</p>
            <input
              v-model="qrDataUpdated.title"
              type="text"
              class="v-input"
              id="title"
              required
            />
          </div>

          <!-- Dynamic Form Component -->
          <section class="mt-5">
            <component
              :is="currentFormComponent"
              @handle-submit="handlePostQrCode"
            />
          </section>
        </div>

        <!-- QR Code Display and Options -->
        <div
          class="w-full pb-10 md:pb-0 mb-10 md:mb-0 md:w-[350px] h-full md:h-[80vh]"
        >
          <h2
            class="text-center pb-5 font-semibold capitalize text-base md:text-lg"
          >
            Preview
          </h2>
          <div
            v-if="qrCodeDataUrl"
            class="w-[200px] md:w-[300px] h-[200px] md:h-[300px] z-10 flex justify-center mx-auto border shadow-sm"
          >
            <img :src="qrCodeDataUrl" alt="QR Code" />
          </div>
          <button
            @click="handlePostQr"
            class="px-3 bg-info w-full md:w-[300px] text-xs btn hover:bg-info-tint hover:text-info font-bold py-2 text-white rounded-md capitalize flex justify-center mx-auto mt-3"
          >
            Design your code
          </button>
        </div>
      </div>
    </div>

    <!-- QR Code Customization Modal -->
    <HomeQrStyle v-if="qrModal" @close="closeQrModal" />

    <section v-if="loginModal">
      <div
        class="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-white bg-opacity-50 backdrop-blur-sm"
      >
        <div class="relative mx-auto px-6 max-w-lg">
          <div class="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl">
            <div class="p-8">
              <div class="flex justify-end">
                <span
                  @click="closeModal"
                  class="cursor-pointer text-lg hover:text-info"
                  >x</span
                >
              </div>
              <div class="text-center space-y-4">
                <h2
                  class="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                >
                  Sign in to access <br />
                  all the content.
                </h2>
              </div>
              <div class="mt-8 space-y-4">
                <button
                  class="group w-full h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-500 focus:bg-blue-50 active:bg-blue-100"
                >
                  <router-link to="/login">
                    <div class="flex items-center justify-center space-x-4">
                      <span
                        class="font-semibold text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600"
                      >
                        Sign In
                      </span>
                    </div>
                  </router-link>
                </button>
              </div>
              <div class="mt-12 text-center text-gray-600 dark:text-gray-400">
                <p class="text-xs">
                  By proceeding, you agree to our
                  <a href="/terms-of-service/" class="underline text-blue-600"
                    >Terms of Service</a
                  >
                  and confirm you have read our
                  <a href="/privacy-policy/" class="underline text-blue-600"
                    >Privacy Policy</a
                  >.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import QRCode from "qrcode";
import axios from "axios";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import { session } from "@/utils";
import { UnAuthpostQrCode } from "@/services/qrcode.service";
import HeaderComponent from "@/components/HeaderComponent.vue";
import HomeQrStyle from "@/components/modals/HomeQrStyle.vue";
import UrlForm from "@/components/inputs/UrlForm.vue";
import EmailForm from "@/components/inputs/EmailForm.vue";
import AppForm from "@/components/inputs/AppForm.vue";
import FormEvents from "@/components/inputs/FormEvents.vue";
import GpsForm from "@/components/inputs/GpsForm.vue";
import SmsForm from "@/components/inputs/SmsForm.vue";
import TelPhone from "@/components/inputs/TelPhone.vue";
import WifiForm from "@/components/inputs/WifiForm.vue";
import VcardForm from "@/components/inputs/VcardForm.vue";

// Categories definition
const categories = ref([
  { name: "Url" },
  { name: "Sms" },
  { name: "Vcard" },
  { name: "Tel" },
  { name: "Wi-Fi" },
  { name: "Gps" },
  { name: "Email" },
  { name: "Barcode" },
  { name: "App" },
]);

// User authentication state (example using a simple ref)
const userLoggedIn = ref(false); // Change this based on actual login state (could be from Vuex, etc.)

// State
let baseUrl = process.env.VUE_APP_AUTH;
const toast = useToast();
const router = useRouter();
const categoryType = ref("Url");
const activeCat = ref("Url");
const qrCodeDataUrl = ref<string | null>(null);
const loading = ref(false);
const loginModal = ref(false);
const qrModal = ref(false);
const onloading = ref(false);
const qrData: any = ref("");
const data: any = ref();
const qrDataUpdated: any = ref({
  category: "",
  items: "",
  title: "",
});

// Get the current form component dynamically based on category type
const currentFormComponent = computed(() => {
  if (!userLoggedIn.value && categoryType.value !== "Url") {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    loginModal.value = true;
    return null;
  }

  switch (categoryType.value) {
    case "Url":
      return UrlForm;
    case "Email":
      return EmailForm;
    case "App":
      return AppForm;
    case "Barcode":
      return FormEvents;
    case "Gps":
      return GpsForm;
    case "Sms":
      return SmsForm;
    case "Tel":
      return TelPhone;
    case "Vcard":
      return VcardForm;
    case "Wi-Fi":
      return WifiForm;
    default:
      return UrlForm;
  }
});

// Function to handle category selection
const handleCats = (cat: string) => {
  categoryType.value = cat;
  activeCat.value = cat;
};

const closeModal = (cat: string) => {
  loginModal.value = false;
};

// Function to generate the QR code based on the emitted value
const generateQRCode = async (value) => {
  let prevalue = "https://www.iszify.com/";
  try {
    if (value) {
      qrCodeDataUrl.value = await QRCode.toDataURL(value);
    } else {
      qrCodeDataUrl.value = await QRCode.toDataURL(prevalue);
    }
    // Convert string to object if needed
    qrData.value = { data: qrData.value };
  } catch (error) {
    console.error("Error generating QR code:", error);
  }
};

const handlePostQrCode = (value: any) => {
  qrDataUpdated.value.category = categoryType.value;
  qrDataUpdated.value.items = value;
  generateQRCode(qrDataUpdated.value.items);
};

const handlePostQr = async () => {
  let point = `unauth_qr_code/qrcode`;
  onloading.value = true;
  if (qrDataUpdated.value.items == "") {
    toast.error("There is empty input, the title is optional");
    return;
  }
  const result = await axios.post(baseUrl + point, {
    title: qrDataUpdated.value.title,
    url: qrDataUpdated.value.items,
    category: qrDataUpdated.value.category,
  });

  if (!result.error) {
    toast.success(result.data.message);
    qrModal.value = true;
    session.set("shortUrl", {
      shortUrl: result.data.data.short_url,
      title: result.data.data.title,
    });
    onloading.value = false;
  } else {
    onloading.value = false;
    toast.error(result.error.message);
  }
};

// Function to get the correct icon source based on category
const getIconSrc = (categoryName: string) => {
  const iconMap: Record<string, string> = {
    App: "/icons/app.svg",
    Url: "/icons/url-link.svg",
    Email: "/icons/email.svg",
    Event: "/icons/event.svg",
    Gps: "/icons/gps.svg",
    Sms: "/icons/sms.svg",
    Tel: "/icons/phone.svg",
    Vcard: "/icons/v-card.svg",
    "Wi-Fi": "/icons/wi-fi.svg",
    Barcode: "/icons/barcode.svg",
  };

  return iconMap[categoryName] || "";
};

const openModal = () => {
  qrModal.value = true;
};

const closeQrModal = () => {
  qrModal.value = false;
};

onMounted(() => {
  generateQRCode();
});
</script>
