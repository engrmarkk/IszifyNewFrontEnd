<template>
  <section class="">
    <section class="relative bg-emerald-50 pt-40 md:pt-48 2xl:pt-64">
      <!-- we make qr codes -->
      <div class="w-[80%] mx-auto">
        <div class="z-10 relative">
          <h1
            class="text-3xl md:text-5xl 2xl:text-6xl font-bold text-black text-center"
          >
            We make <span class="text-primary">QR codes </span> easy
          </h1>

          <div
            class="flex flex-col md:flex-row justify-center mt-10 gap-5 items-center"
          >
            <div class="flex gap-2 items-center">
              <div><img src="/icons/check.svg" alt="check qr code" /></div>
              <p class="text-sm font-bold">
                Generate dynamic, editable QR codes
              </p>
            </div>
            <div class="flex gap-2 items-center">
              <div><img src="/icons/check.svg" alt="check qr code" /></div>
              <p class="text-sm font-bold">Track performance with analytics</p>
            </div>
            <div class="flex gap-2 items-center">
              <div><img src="/icons/check.svg" alt="check qr code" /></div>
              <p class="text-sm font-bold">
                Design QR codes with Logo, Colors & Shapes
              </p>
            </div>
          </div>

          <div class="flex justify-center mt-10">
            <div
              class="flex items-center gap-3 bg-primary rounded-full justify-center cursor-pointer py-2.5 px-4"
            >
              <div><img src="/icons/add-qr.svg" alt="add-qr" /></div>
              <p class="text-xs md:text-sm font-bold text-white">
                Create QR code
              </p>
            </div>
          </div>
        </div>
        <div class="mt-10 md:mt-20 flex gap-5 z-20 relative">
          <div>
            <img src="/images/screen-dsk.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <!-- Steps QR code generator -->

    <div class="pt-20 md:pt-32 px-5 sm:w-[80%] 2xl:w-[70%] mx-auto space-y-8">
      <div class="space-y-8">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center"
        >
          Create your <br />
          QR code in three <span class="text-primary">simple steps </span>
        </h2>
      </div>

      <div class="py-10 md:py-20">
        <div
          class="flex flex-col md:flex-row gap-10 md:gap-5 justify-center items-center"
        >
          <div class="space-y-5 text-center">
            <div
              class="rounded-2xl bg-primary shadow-xl shadow-primary/25 w-[50px] h-[50px] md:w-[80px] md:h-[80px] mx-auto"
            >
              <img
                src="/icons/doc.svg"
                alt=""
                class="w-[50px] h-[50px] md:w-[80px] md:h-[80px] p-3"
              />
            </div>
            <h4 class="font-bold text-black text-base md:text-lg">
              Choose your QR Code content
            </h4>
            <p class="text-sm md:text-base">
              Decide what you want to share. You can use URLs, text, Vcard and
              more!
            </p>
          </div>
          <div class="hidden md:block">
            <img src="/icons/line-1.svg" alt="" />
          </div>
          <div class="space-y-3 text-center">
            <div
              class="rounded-2xl bg-[#790efd] shadow-xl shadow-[#790efd4b] w-[50px] h-[50px] md:w-[80px] md:h-[80px] mx-auto"
            >
              <img
                src="/icons/brush.svg"
                alt=""
                class="w-[50px] h-[50px] md:w-[80px] md:h-[80px] p-3"
              />
            </div>
            <h4 class="font-bold text-black text-base md:text-lg">
              Choose your QR Code content
            </h4>
            <p class="text-sm md:text-base">
              Decide what you want to share. You can use URLs, text, Vcard and
              more!
            </p>
          </div>
          <div class="hidden md:block">
            <img src="/icons/line-2.svg" alt="" />
          </div>
          <div class="space-y-3 text-center">
            <div
              class="rounded-2xl bg-[#2396ed] shadow-xl shadow-[#2395ed4a] w-[50px] h-[50px] md:w-[80px] md:h-[80px] mx-auto"
            >
              <img
                src="/icons/printer.svg"
                alt=""
                class="w-[50px] h-[50px] md:w-[80px] md:h-[80px] p-3"
              />
            </div>
            <h4 class="font-bold text-black text-base md:text-lg">
              Choose your QR Code content
            </h4>
            <p class="text-sm md:text-base">
              Decide what you want to share. You can use URLs, text, Vcard and
              more!
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced QR code generator  -->
    <div class="py-14 md:py-32 px-5 md:w-[80%] mx-auto">
      <div class="w-full md:max-w-[70%] mx-auto">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center"
        >
          Experience the most Advanced <br class="hidden sm:block" />
          QR Code
          <span class="text-primary">generator </span>
        </h2>
        <p class="px-5 text-center text-sm md:text-base 2xl:text-lg mt-3">
          Create high-performing QR codes that accurately represent your brand
          and design, resulting in high scan rate
        </p>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 pt-10 gap-5"
      >
        <div
          v-for="(content, idx) in contents"
          :key="idx"
          class="text-xs sm:text-sm md:text-base 2xl:text-lg shadow-lg border shadow-slate-50 p-5 rounded-xl hover:cursor-pointer"
        >
          <div class="space-y-3">
            <div class="w-8 h-8 rounded-md shadow" :class="content.color">
              <img
                :src="content.icon"
                alt="content.title"
                class="w-8 h-8 p-1"
              />
            </div>
            <h4 class="font-bold text-black-shades">{{ content.title }}</h4>
            <p class="text-sm">{{ content.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section for registration -->
    <section class="py-10 md:py-20">
      <div class="relative py-10">
        <div aria-hidden="true" class="hidden sm:block">
          <!-- <div
            class="absolute inset-y-0 left-0 w-1/2 bg-green-600 rounded-r-3xl"
          ></div> -->
          <svg
            class="absolute top-8 left-1/2 -ml-3"
            width="404"
            height="300"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-300"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="392"
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            ></rect>
          </svg>
        </div>
        <div
          class="mx-auto max-w-2xl px-4 sm:max-w-3xl sm:px-6 lg:max-w-[85%] lg:px-8"
        >
          <div
            class="relative rounded-2xl px-6 py-10 bg-primary overflow-hidden shadow-xl"
          >
            <div
              aria-hidden="true"
              class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                class="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  class="text-primary-shades text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                ></path>
                <path
                  class="text-primary-shades text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                ></path>
              </svg>
            </div>
            <div
              class="flex w-full flex-wrap items-center justify-between gap-4 px-8 py-5 2xl:py-10 sm:px-16 lg:flex-nowrap"
            >
              <div class="lg:max-w-xl">
                <h2
                  class="block w-full pb-2 text-white bg-clip-text font-bold text-transparent text-3xl sm:text-4xl"
                >
                  Ready to get started?
                </h2>
                <p
                  class="my-4 bg-transparent font-medium text-sm md:text-base 2xl:text-lg tracking-wide text-white"
                >
                  Sign up today to build your customizable and fully trackable
                  Qr Codes. Unlock advanced insights, implement your branding
                  and make updates to your QR codes at anytime
                </p>
              </div>
              <div
                class="flex flex-wrap items-center justify-center gap-6 z-10"
              >
                <button
                  class="flex items-center justify-center cursor-pointer border whitespace-nowrap rounded-full transition-all duration-300 md:p-3 text-xs sm:text-sm"
                >
                  <img src="/icons/arrow-right.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <div>
      <div
        class="flex flex-col md:flex-row md:max-w-[80%] mx-auto p-5 w-full gap-10 md:gap-20 py-10 md:pt-20"
      >
        <div class="md:w-[40%]">
          <h2
            class="text-black text-2xl sm:text-3xl md:text-4xl mt-5 font-bold"
          >
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
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Dynamically set title and meta tags for this component
useHead({
  title:
    "QR CODE GENERATOR - Create free qrcode and customize it with advanced analytics.",
  meta: [
    {
      name: "description",
      content:
        "Create free qr code in seconds using Iszify QR Code generator. Customize and share qr code. Get code scans analytics and download qr code in high quality.",
    },
    {
      name: "keywords",
      content:
        "qr code generator, create qr codes, qr code maker, qr generator, qr code creator, qr code, qr code with logo, free qr codes, qr code generator free",
    },
    {
      property: "og:title",
      content:
        "QR CODE GENERATOR - Create free qrcode and customize it with advanced analytics.",
    },
    {
      property: "og:description",
      content:
        "Create free qr code in seconds using Iszify QR Code generator. Customize and share qr code. Get code scans analytics and download qr code in high quality.",
    },
  ],
});
const activeIndex = ref(null);

const items = ref([
  {
    title: "What is a QR code?",
    content:
      "A QR code is a type of matrix barcode that is machine-readable and can store information. QR codes are often used to direct users to a website or app, but they can also be used to store contact information, text, or other data.",
  },
  {
    title: "How do I scan a QR code?",
    content:
      "To scan a QR code, you'll need a smartphone or tablet with a camera and a QR code reader app. Open the app and point your device's camera at the QR code. The app will automatically scan the code and direct you to the associated content.",
  },
  {
    title: "How do I create a QR code?",
    content:
      "To create a QR code, you'll need a QR code generator tool. Simply enter the information you want to encode in the QR code, customize the design if desired, and generate the code. You can then download the code and use it as needed.",
  },
  {
    title: "How can I customize a QR code?",
    content:
      "You can customize a QR code by changing its color, adding a logo or image, and adjusting the design elements. Many QR code generator tools offer customization options that allow you to create a unique and branded code.",
  },
]);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const contents = ref([
  {
    color: "bg-[#7180ba3a]",
    icon: "/icons/contents/pic-1.svg",
    title: "High-tech QR codes",
    text: "Access advanced functionalities with Online QR Generator, Customize colors, layout, and logo on various QR code types and easily scan them on any device",
  },
  {
    color: "bg-[#4cdb333a]",
    icon: "/icons/contents/pic-2.svg",
    title: "High Conversion Rate",
    text: "Create high-performing QR codes that accurately represent your brand and design, resulting in high scan rate",
  },
  {
    color: "bg-[#3276c33a]",
    icon: "/icons/contents/pic-3.svg",
    title: "Real-Time Analytics",
    text: "Boost your marketing campaigns with access to real-time analytics for each generated QR code that shows when, where how many times your QR codes were scanned",
  },
  {
    color: "bg-[#d8a27f3a]",
    icon: "/icons/contents/pic-4.svg",
    title: "Easy landing pages",
    text: "There's no need for you to build a website, Our QR code plateform help you quickly and easily create customizable landing pages for all of your QR code needs",
  },
  {
    color: "bg-[#4cdb333a]",
    icon: "/icons/contents/pic-5.svg",
    title: "Multiple types of QR code",
    text: "Easily creates various QR code types with customize options to meet your specific needs.From vcard, app, to url, you'll find the right QR code for you",
  },
  {
    color: "bg-[#d8a27f3a]",
    icon: "/icons/contents/pic-6.svg",
    title: "Full Customization",
    text: "Bring your QR codes to life by customizing them with our endless array of easy-to-use options.",
  },
  {
    color: "bg-[#7180ba3a]",
    icon: "/icons/contents/pic-7.svg",
    title: "Easy Download, Edit & Share",
    text: "Keep the highest resolution for your QR codes, no matter what medium you print or display them on.",
  },
  {
    color: "bg-[#30a1c33a]",
    icon: "/icons/contents/pic-8.svg",
    title: "Get started for free",
    text: "Ready to create your first QR code? Take advantage of our free trial by signing up today!",
  },
]);
</script>

<style lang="scss" scoped></style>
