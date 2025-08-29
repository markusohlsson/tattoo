<template>
  <h2 class="timeline-title" data-aos="fade-up">Timeline</h2>
  <div class="timeline-container">
    <!-- Left: Event Cards -->
    <div class="cards-column">
      <EventCard
        v-for="(event, index) in timeline"
        :key="index"
        :event="event"
        @click="selectedIndex = index"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
        data-aos-offset="100"
      />
    </div>

    <!-- Right: Info Box -->
    <div class="info-box">
      <template v-if="selectedIndex !== null">
        <h2 class="timeline-selected-year" data-aos="fade-up">{{ timeline[selectedIndex].year }}</h2>
        <div class="timeline-selected-image-container" data-aos="fade-up">
        <img class="timeline-selected-image" :src="timeline[selectedIndex].image" alt="" data-aos="fade-up">
        </div>
        <h3 data-aos="fade-up">{{ timeline[selectedIndex].title }}</h3>
        <p data-aos="fade-up">{{ timeline[selectedIndex].description }}</p>
      </template>
      <template v-else>
        <p>Select a year for more information</p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EventCard from './EventCard.vue'
import { timeline } from '../data/content'

const selectedIndex = ref(0)
</script>

<style>
</style>