<template>
  <div class="flex flex-col items-center space-y-1">
    <!-- QR Code Frame -->
    <div
      class="relative w-24 h-24 border-2 border-accent rounded-md flex items-center justify-center bg-white shadow"
    >
      <!-- QR Code Canvas -->
      <div :id="'canvas-container-' + code.id"></div>
    </div>
    <!-- Scan Me Text -->
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  code: Object,
});
</script>
