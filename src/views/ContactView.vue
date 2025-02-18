<template>
  <div class="bg-white">
    <AppBar />

    <section class="text-center container mx-auto pt-20 xl:pt-40 py-20 px-5">
      <h2 class="text-5xl font-semibold">Get In Touch</h2>
      <p class="mt-4 text-gray-700 max-w-2xl mx-auto">
        We are here to help you. Reach out to us via any of the following
        methods.
      </p>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 animate-fadeIn"
      >
        <div
          class="px-4 py-8 shadow-lg rounded-lg bg-primary-tint transition-colors"
        >
          <h3 class="text-xl text-white font-bold">Call Us</h3>
          <p class="text-gray-700 mt-2">+1 123 456 7890</p>
        </div>
        <div
          class="px-4 py-8 shadow-lg rounded-lg bg-primary-tint transition-colors"
        >
          <h3 class="text-xl text-white font-bold">Email Us</h3>
          <p class="text-gray-700 mt-2">contact@wisedoctors.com</p>
        </div>
        <div
          class="px-4 py-8 shadow-lg rounded-lg bg-primary-tint transition-colors"
        >
          <h3 class="text-xl text-white font-bold">Visit Us</h3>
          <p class="text-gray-700 mt-2">123 Health St, Wellness City</p>
        </div>
      </div>
    </section>
    <section
      class="grid md:grid-cols-2 gap-16 mb-10 md:mb-20 items-center relative overflow-hidden p-8 shadow-primary-tint rounded-3xl max-w-6xl mx-auto bg-white mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-primary-tint before:h-full max-md:before:hidden"
    >
      <div>
        <h2 class="text-gray-800 text-3xl font-extrabold">Get In Touch</h2>
        <p class="text-sm text-gray-500 mt-4 leading-relaxed">
          Have a specific inquiry or looking to explore new opportunities? Our
          experienced team is ready to engage with you.
        </p>

        <form>
          <div class="space-y-4 mt-8">
            <input
              type="text"
              placeholder="Full Name"
              class="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primary-tint outline-none"
            />
            <input
              type="text"
              placeholder="Street"
              class="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primary-tint outline-none"
            />
            <div class="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="City"
                class="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primary-tint outline-none"
              />

              <input
                type="text"
                placeholder="Postcode"
                class="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primary-tint outline-none"
              />
            </div>
            <input
              type="number"
              placeholder="Phone No."
              class="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primary-tint outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              class="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primary-tint outline-none"
            />

            <textarea
              placeholder="Write Message"
              class="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primary-tint outline-none"
            ></textarea>
          </div>

          <button
            type="button"
            class="mt-8 flex items-center justify-center btn-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="#fff"
              class="mr-2"
              viewBox="0 0 548.244 548.244"
            >
              <path
                fill-rule="evenodd"
                d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                clip-rule="evenodd"
                data-original="#000000"
              />
            </svg>
            Send Message
          </button>
        </form>
      </div>
      <div class="z-10 relative h-full max-md:min-h-[350px]">
        <iframe
          src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import FooterSection from "@/components/FooterSection.vue";
import AppBar from "@/components/AppBar.vue";
</script>

<style lang="scss" scoped></style>
