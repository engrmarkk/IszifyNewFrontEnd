<template>
  <div
    class="flex justify-center min-h-screen items-center mt-10 bg-accent-tint"
  >
    <div>
      <div class="text-center">
        <h1 class="text-black text-2xl md:text-3xl font-bold">
          Setup your page
        </h1>
        <p class="text-accent text-base md:text-lg">
          Let's setup your page to suit your taste.
        </p>
      </div>

      <div class="w-[600px] mt-5 md:mt-8 bg-white p-5 rounded-md">
        <div class="flex gap-5 md:gap-10">
          <div>
            <div
              class="w-36 h-36 flex justify-center items-center rounded-full border-2 border-accent border-dotted"
            >
              <img src="/icons/avatar.svg" alt="" />
            </div>
          </div>
          <div>
            <div class="space-y-5">
              <input
                type="text"
                class="bg-accent-tint focus:bg-accent-shades outline-none focus:outline-none placeholder:font-semibold w-full py-3 indent-2 rounded-sm"
                placeholder="Biolink Name"
              />
              <input
                type="text"
                class="bg-accent-tint focus:bg-accent-shades outline-none focus:outline-none placeholder:font-semibold w-full py-3 indent-2 rounded-sm"
                placeholder="Fullname"
              />
              <input
                type="text"
                class="bg-accent-tint focus:bg-accent-shades outline-none focus:outline-none placeholder:font-semibold w-full py-3 indent-2 rounded-sm"
                placeholder="Bio"
              />
            </div>
          </div>
        </div>
        <div class="my-5">
          <h3 class="text-xl font-bold text-black">Add your First Link</h3>
        </div>
        <div class="p-2 space-y-5">
          <p>
            <input
              type="text"
              placeholder="Link Name (Tiktok)"
              class="v-input"
            />
          </p>
          <p>
            <input
              type="url"
              placeholder="URL (https://tiktok.com/yourname)"
              class="v-input"
            />
          </p>
        </div>
        <div class="mt-5 md:mt-8">
          <router-link to="/admin/bio/links">
            <button
              class="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 w-full text-lg uppercase px-4 rounded"
            >
              get started
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "user",
  middleware: "auth-route",
});
</script>

<style scoped></style>
