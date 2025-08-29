<script setup>
import AboutSection from '../components/AboutSection.vue';
import LinkSection from '../components/LinkSection.vue';
import Hero from '../components/Hero.vue';
import ImageGrid from '../components/ImageGrid.vue';
import { tattoos, favorites } from '../data/content';
</script>

<template>
  <Hero />
  <AboutSection />
  <ImageGrid
    :images="tattoos"
    :title="'Recent Tattoos'"
  />
  <ImageGrid
    :images="favorites"
    :title="'Favourite Art & Tattoos'"
  />
  <LinkSection
    :title="'Dont forget to check my portfolio'"
    :link="'/portfolio'"
    :button-text="'Click here!'"
  />
</template>
