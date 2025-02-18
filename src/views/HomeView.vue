<template>
  <div class="bg-gray-100">
    <AppBar />

    <div class="py-24 md:py-36">
      <div class="px-3">
        <h1
          class="text-center font-bold text-4xl md:text-6xl text-black-shades"
        >
          Make every connection count
        </h1>
        <p
          class="text-center text-base sm:text-lg md:text-xl mt-4 md:w-[50%] mx-auto text-gray-500"
        >
          Create shortcut links, Qr Codes, Share them on any Platform. Track
          your Metrics. All inside the
          <span class="font-bold text-info">Iszify Connections Platform.</span>
        </p>
      </div>
      <div class="mt-10 md:w-[70%] px-5 mx-auto">
        <div class="flex items-center justify-center">
          <button
            @click="toggleTab('link')"
            class="text-base md:text-lg text-accent flex items-center gap-2 px-5 py-3 rounded-t-lg"
            :class="
              tab === 'link' ? 'bg-white font-bold text-info' : 'bg-gray-100'
            "
          >
            <ion-icon
              name="link-outline"
              size="small"
              class="rotate-45 hidden md:block"
            ></ion-icon>
            Short link
          </button>
          <button
            @click="toggleTab('qr')"
            class="text-base md:text-lg text-accent flex items-center gap-2 px-5 py-3 rounded-t-lg"
            :class="
              tab === 'qr' ? 'bg-white font-bold text-info' : 'bg-gray-100'
            "
          >
            <ion-icon
              name="qr-code-outline"
              size="small"
              class="hidden md:block"
            ></ion-icon>
            QR code
          </button>
          <button
            @click="toggleTab('bio')"
            class="text-base md:text-lg flex text-accent items-center gap-2 px-5 py-3 rounded-t-lg"
            :class="
              tab === 'bio' ? 'bg-white font-bold text-info' : 'bg-gray-100'
            "
          >
            <ion-icon
              name="phone-portrait-outline"
              size="small"
              class="hidden md:block"
            ></ion-icon>
            Link in bio
          </button>
        </div>

        <!-- If tab is link -->
        <div class="bg-white p-5 rounded-2xl shadow">
          <div v-if="tab === 'link'">
            <div class="sm:p-5 md:p-10 space-y-5">
              <div>
                <p class="font-bold">Paste a long URL</p>
                <input
                  type="text"
                  class="w-full v-input"
                  placeholder="https://your-long-domain-url"
                />
              </div>

              <div class="flex items-center gap-1 sm:gap-5">
                <div class="w-full">
                  <p class="font-bold">Domain</p>
                  <input
                    type="text"
                    class="w-full v-input bg-gray-50"
                    placeholder="Izz.ly"
                    disabled
                  />
                </div>
                <div class="h-full mt-5 text-xl">/</div>
                <div class="w-full">
                  <p class="font-bold">Enter a back-half</p>
                  <input
                    type="text"
                    class="w-full v-input"
                    placeholder="Favorite-link"
                  />
                </div>
              </div>

              <p>
                By clicking Shorten URL, you agree to Iszify's
                <span>Terms of Use</span> and <span>Privacy Policy</span>
              </p>

              <div>
                <button class="btnn">Shorten Url</button>
              </div>
            </div>
          </div>
          <div v-if="tab === 'qr'">
            <StaticQrcode />
          </div>
          <div v-if="tab === 'bio'">
            <div class="sm:p-5 md:p-10 space-y-5">
              <div>
                <p class="font-bold">Input Your Username</p>
                <div
                  class="flex items-center mt-3 border-[0.5px] border-accent hover:border-info rounded"
                >
                  <div class="flex items-center gap-1 w-full">
                    <span class="pl-2 font-bold text-black">izz.ly/</span>
                    <input
                      type="text"
                      id="input-9"
                      class="w-full h-10 text-sm text-gray-700 focus:outline-none"
                      placeholder="User"
                    />
                  </div>
                </div>
              </div>

              <p>
                By Creating Link in Bio, you agree to Iszify's
                <span>Terms of Use</span> and <span>Privacy Policy</span>
              </p>

              <div>
                <button class="btnn">CREATE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- features -->
    <div class="mx-auto w-[85%] py-1- sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between gap-20"
      >
        <div class="flex gap-4 items-start w-full">
          <span class="text-neutral-600 bg-neutral-500/10 p-3 rounded-full">
            <ion-icon name="share-social" size="small"></ion-icon
          ></span>
          <div>
            <h3 class="font-black text-black-shades text-xl md:text-2xl">
              Share Link
            </h3>
            <p class="text-base md:text-lg pt-1.5 text-gray-500">
              Iszify can sreamline your social media channels so your followers
              can take action.
            </p>
          </div>
        </div>
        <div class="flex gap-4 items-start w-full">
          <span class="text-neutral-600 bg-neutral-500/10 p-3 rounded-full">
            <ion-icon name="bar-chart" size="small"></ion-icon
          ></span>
          <div>
            <h3 class="font-black text-black-shades text-xl md:text-2xl">
              Drive Conversions
            </h3>
            <p class="text-base md:text-lg pt-1.5 text-gray-500">
              Using short links to share intresting pages from around the world.
            </p>
          </div>
        </div>
        <div class="flex gap-4 items-start w-full">
          <span class="text-neutral-600 bg-neutral-500/10 p-3 rounded-full">
            <ion-icon name="sparkles"></ion-icon
          ></span>
          <div>
            <h3 class="font-black text-black-shades text-xl md:text-2xl">
              Track Metrics
            </h3>
            <p class="text-base md:text-lg pt-1.5 text-gray-500">
              Use the link management platform to track your metrics for each
              custom URL.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Explore -->
    <div class="mx-auto max-w-6xl sm:px-6 py-12 lg:px-8 md:py-28">
      <div
        class="relative isolate overflow-hidden bg-primary/10 px-6 py-6 text-center sm:rounded-3xl sm:px-16"
      >
        <h2
          class="mx-auto max-w-xl text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-black"
        >
          Explore features <br />
          for more
          <span>
            <ion-icon
              name="extension-puzzle"
              color="warning"
              size="large"
            ></ion-icon>
          </span>
          efficiency
        </h2>
        <p class="mx-auto mt-3 max-w-2xl text-xl lg:text-2xl font-medium">
          Use Iszify to save your hours of work
        </p>
        <div class="mt-5 md:mt-10 flex items-center justify-center gap-x-6">
          <div
            class="font-medium text-white bg-primary rounded-full py-1 px-2 relative"
          >
            <div
              class="flex items-center justify-center gap-2 text-lg transition"
            >
              <ion-icon
                name="link-outline"
                size="small"
                class="rotate-45 text-primary bg-white rounded-full p-1.5"
              ></ion-icon>
              <span class="text-base md:text-lg font-bold py-0.5"
                >Short links</span
              >
            </div>
          </div>
          <div
            class="font-medium text-primary border border-primary rounded-full py-1 px-2 relative"
          >
            <div
              class="flex items-center justify-center gap-2 text-lg transition"
            >
              <ion-icon
                name="qr-code-outline"
                size="small"
                class="text-white bg-primary rounded-full p-1.5"
              ></ion-icon>
              <span class="text-base md:text-lg font-bold py-0.5"
                >Generate QR codes</span
              >
            </div>
          </div>
          <div
            class="font-medium text-primary border border-primary rounded-full py-1 px-2 relative"
          >
            <div
              class="flex items-center justify-center gap-2 text-lg transition"
            >
              <ion-icon
                name="bar-chart"
                size="small"
                class="text-white bg-primary rounded-full p-1.5"
              ></ion-icon>
              <span class="text-base md:text-lg font-bold py-0.5"
                >Manage your links</span
              >
            </div>
          </div>
        </div>

        <div>
          <div>
            <h2 class="text-4xl font-bold">Campaign Monitoring & Analytics</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- CTAAA -->
    <div class="mx-auto max-w-6xl sm:px-6 py-12 lg:px-8 md:py-28">
      <div
        class="relative isolate overflow-hidden bg-green-700 px-6 py-16 text-center shadow-2xl sm:rounded-3xl sm:px-16"
      >
        <h2
          class="mx-auto max-w-2xl text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white"
        >
          Get closer
          <span
            ><ion-icon name="happy" color="warning" size="large"></ion-icon>
          </span>
          to your audience and customer today
        </h2>
        <p
          class="mx-auto mt-6 max-w-2xl text-lg lg:text-xl leading-8 text-white"
        >
          Connect to your audience with branded links, Qr Code and a Link-in-bio
          that will get their attention and help you grow your business.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            class="rounded-md bg-white px-3.5 py-2.5 font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >Start for free
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script>
import FooterSection from "@/components/FooterSection.vue";
// import TestimonialSection from "@/components/TestimonialSection.vue";
import StaticQrcode from "@/components/qrcodes/StaticQrcode.vue";
import AppBar from "@/components/AppBar.vue";

export default {
  components: {
    FooterSection,
    // TestimonialSection,
    StaticQrcode,
    AppBar,
  },

  data() {
    return {
      tab: "link",
      activeIndex: null,
      items: [
        {
          title: "What is  Workspace?",
          content:
            " Workspace is a coworking space that provides meeting and training spaces, coworking spaces, private offices, executive offices, and virtual offices tailored to the needs of freelancers, startups, small businesses, and corporate teams.",
        },
        {
          title: "Where is  Workspace located?",
          content:
            " 2nd Floor, Wing 5, 4C Idowu Martins Street, Victoria Island. Lagos.",
        },
        {
          title: "What are your operating hours?",
          content:
            "Our general operating hours are Monday - Sunday, but members with 24/7 access can use the facilities at any time.",
        },
        {
          title: "How can I contact  Workspace?",
          content:
            "You can contact us via phone numbers, emails, or through our contact form on the website.",
        },
        {
          title: "How do I sign up for a private office or book a tour?",
          content:
            "You can  book a tour through our website or by contacting our team directly.",
        },
        {
          title: "What is included with a private office rental?",
          content:
            "Private offices come fully furnished with desks and chairs. They include access to all common areas, meeting rooms, and office amenities.",
        },
        {
          title: "What size private offices are available?",
          content:
            "We offer a range of private office sizes, from single-person offices to larger spaces suitable for teams. Please contact us for availability and more details.",
        },
        {
          title: "Are the executive offices different from private offices?",
          content:
            "Yes, executive offices are typically larger, with premium furnishings and additional services such as dedicated phone lines and enhanced administrative support.",
        },
        {
          title: "Do you provide any business services?",
          content:
            "Yes, we offer various business services including mail handling, receptionist services, and administrative support.",
        },
        {
          title: "What types of events can be held at  Workspace?",
          content:
            "Our spaces are suitable for meetings, training sessions, workshops, seminars, and networking events. We also host community events for our members.",
        },
        {
          title: "Are there any shared spaces included each services?",
          content:
            "Yes, every services have access to shared spaces such as lounges, kitchen areas, and common areas for relaxation and informal meetings.",
        },
      ],
    };
  },
  methods: {
    toggleTab(tab) {
      this.tab = tab;
    },

    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped></style>
