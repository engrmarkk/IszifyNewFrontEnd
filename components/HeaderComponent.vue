<template>
  <div>
    <h2 class="text-base md:text-xl lg:text-2xl font-bold text-black uppercase">
      {{ title }}
    </h2>
    <p class="text-xs text-accent capitalize">{{ subTitle }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  subTitle: string;
}>();
</script>
