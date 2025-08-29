<template>
  <div class="event-card">
    <img :src="event.image" alt="" class="event-image" />
    <div class="overlay">
      <h2 class="event-year">{{ event.year }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ event: { year: string; title: string; description: string; image: string } }>()
</script>

<style>

</style>
