<template>
  <div class="flex flex-col items-center space-y-1">
    <!-- QR Code Frame -->
    <div
      class="relative w-24 h-24 border border-accent rounded-md flex items-center justify-center bg-white shadow"
    >
      <!-- QR Code Canvas -->
      <div :id="'canvas-container-' + code?.id"></div>
    </div>
    <!-- Scan Me Text -->
    <p
      class="text-lg font-semibold text-accent border px-2 text-center border-gray-300 rounded-md"
      :class="code?.frame_color"
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
