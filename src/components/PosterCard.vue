<template>
  <div class="info-card">
    <img
      :src="img"
      :alt="name"
    >
    <div class="card-info">
      <h3>{{ name }}</h3>
      <p>{{ location }}</p>
      <span class="year">{{ year }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  year: { type: [String, Number, Array], required: true }
});
</script>