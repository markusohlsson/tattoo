<template>
  <div class="info-list">
    <h2 data-aos="fade-up">{{ title }}</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <div class="item-left">
          <h3 data-aos="fade-up">{{ item.name }}</h3>
          <span data-aos="fade-up" class="location">{{ item.location }}</span>
        </div>
        <span class="years" data-aos="fade-up">{{ item.years || item.year }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  items: { name: string; location: string; years?: string; year?: string }[];
}>();
</script>