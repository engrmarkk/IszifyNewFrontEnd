<template>
  <div
    class="flex flex-col items-center space-y-1 border-4 border-black rounded-md"
  >
    <!-- QR Code Frame -->
    <div
      class="relative w-24 h-24 rounded-md flex items-center justify-center bg-white"
    >
      <!-- QR Code Canvas -->
      <div :id="'canvas-container-' + code?.id"></div>
    </div>
    <!-- Scan Me Text -->
    <p
      class="font-semibold text-center text-[8px]"
      :class="code?.frame_color || 'text-black'"
    >
      {{ code?.host_url / code?.short_link || "iszz.ly/backhalf" }}
    </p>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  code: Object,
});
</script>
