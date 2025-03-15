<template>
  <div class="flex flex-col items-center">
    <!-- QR Code Frame -->
    <div
      class="relative w-24 h-24 border border-accent rounded-md flex items-center justify-center bg-white shadow"
    >
      <!-- QR Code Canvas -->
      <div :id="'canvas-container-' + code?.id"></div>
    </div>
    <!-- Scan Me Text -->
    <p
      class="text-lg font-semibold bg-black text-accent border px-2 text-center border-gray-300 rounded-full"
      :class="code?.frame_color || 'text-white'"
    >
      {{ code?.frameText || "Scan me" }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  code: Object,
});
</script>
