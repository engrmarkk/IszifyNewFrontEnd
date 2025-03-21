<template>
  <section class="pt-24 md:pt-20">
    <!-- Loading section -->
    <section v-if="loading">
      <p>Loading...</p>
    </section>
    <div v-else class="relative">
      <!-- Header -->
      <div class="px-5 md:px-10">
        <HeaderComponent :title="'Select Your QR Code Type'" :subTitle="''" />
      </div>
      <!-- Main content -->
      <div class="flex flex-col lg:flex-row gap-5 mt-5 p-5 md:p-10">
        <!-- QR Code Categories and Dynamic Form -->
        <div class="flex-1 overflow-y-scroll h-full">
          <div @click="toggleItems" class="border border-accent rounded-md p-3">
            <p>{{ itemName }}</p>
          </div>
          <div v-if="items" class="gap-5 border h-[300px] overflow-y-scroll">
            <div v-for="category in categories" :key="category.name">
              <div
                @click="handleCats(category.name)"
                class="flex border-b rounded-md p-3 gap-3 items-center hover:cursor-pointer"
                :class="activeCat === category.name ? 'bg-info-tint' : ''"
              >
                <img :src="getIconSrc(category.name)" alt="" />
                <p class="font-bold">{{ category.name }}</p>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <p class="text-xs font-bold">Title (Optional)</p>
            <input
              v-model="qrDataUdated.title"
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
        </div>
      </div>
    </div>
    <div
      class="fixed bg-white right-0 left-0 pb-5 px-0 bottom-0 w-full shadow-xl"
    >
      <div class="flex justify-between w-full px-10">
        <div class="w-full"></div>
        <button
          @click="openModal"
          class="px-3 bg-info text-xs btn hover:bg-info-tint hover:text-info font-bold py-2 text-white rounded-md capitalize flex justify-center mx-auto mt-3"
        >
          Design your code
        </button>
      </div>
    </div>

    <!-- QR Code Customization Modal -->
    <QrStyle v-if="qrModal" :initialData="qrDataUdated" @close="closeQrModal" />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "#imports";
import QRCode from "qrcode";
const { $toast } = useNuxtApp();
import HeaderComponent from "@/components/HeaderComponent.vue";
import QrStyle from "@/components/modals/QrStyle.vue";
import UrlForm from "@/components/inputs/UrlForm.vue";
import EmailForm from "@/components/inputs/EmailForm.vue";
import AppForm from "@/components/inputs/AppForm.vue";
import FormEvents from "@/components/inputs/FormEvents.vue";
import GpsForm from "@/components/inputs/GpsForm.vue";
import SmsForm from "@/components/inputs/SmsForm.vue";
import TelPhone from "@/components/inputs/TelPhone.vue";
import WifiForm from "@/components/inputs/WifiForm.vue";
import VcardForm from "@/components/inputs/VcardForm.vue";
import BitcoinForm from "@/components/inputs/BitcoinForm.vue";

definePageMeta({
  layout: "user",
  middleware: "auth-route",
});

// Categories definition
const categories = ref([
  { name: "Url" },
  { name: "Sms" },
  { name: "Vcard" },
  { name: "Tel" },
  { name: "Wi-Fi" },
  { name: "Gps" },
  { name: "Email" },
  { name: "Bitcoin" },
  { name: "Barcode" },
  { name: "App" },
]);

// State
const categoryType = ref("Url");
const activeCat = ref("Url");
const qrCodeDataUrl = ref<string | null>(null);
const items = ref(false);
const itemName = ref("Select type of Qr code");
const loading = ref(false);
const qrModal = ref(false);
const qrData: any = ref("");
const qrDataUdated: any = ref({
  category: "",
  items: "",
  title: "",
});

// Get the current form component dynamically based on category type
const currentFormComponent = computed(() => {
  switch (categoryType.value) {
    case "Url":
      return UrlForm;
    case "Email":
      return EmailForm;
    case "Bitcoin":
      return BitcoinForm;
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

// Function to toggle items selection
const toggleItems = () => {
  items.value = !items.value;
};
// Function to handle category selection
const handleCats = (cat: string) => {
  categoryType.value = cat;
  activeCat.value = cat;
  itemName.value = cat;
  items.value = false;
};

// Function to generate the QR code based on the emitted value
const generateQRCode = async () => {
  let value = "https://www.iszify.com/";
  try {
    if (value) {
      qrCodeDataUrl.value = await QRCode.toDataURL(value);
    }
    // Convert string to object if needed
    qrData.value = { data: qrData.value };
  } catch (error) {
    console.log("Error generating QR code:", error);
  }
};

const handlePostQrCode = (value: any) => {
  qrDataUdated.value.category = categoryType.value;
  qrDataUdated.value.items = value;
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
    Bitcoin: "/icons/bitcoin.svg",
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
