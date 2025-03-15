<template>
  <div class="pt-20 px-10">
    <div>
      <HeaderComponent :title="'Dashboard'" :subTitle="''" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-10">
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-xl font-semibold mb-2">Total Qr codes</h3>
        <p class="text-3xl font-bold">1,234</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-xl font-semibold mb-2">Bio Links</h3>
        <p class="text-3xl font-bold">2,345</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-xl font-semibold mb-2">Active Links</h3>
        <p class="text-3xl font-bold">10,000</p>
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
