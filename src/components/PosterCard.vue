<template>
  <div class="info-card">
    <img :src="img" :alt="name" />
    <div class="card-info">
      <h3>{{ name }}</h3>
      <p>{{ location }}</p>
      <span class="year">{{ year }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  img: string
  name: string
  location: string
  year: string | number | string[]
}>()
</script>

<style>
</style>