<template>
  <div class="event-card">
    <img
      :src="event.image"
      alt=""
      class="event-image"
    >
    <div class="overlay">
      <h2 class="event-year">
        {{ event.year }}
      </h2>
    </div>
  </div>
</template>

<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>
