<script setup>
import ImageGrid from '../components/ImageGrid.vue';
import Instagram from '../components/Instagram.vue';
import { arts, tattoos, designs } from '../data/content';
import peonyVid from '../assets/vid/peony.mp4';
import HeroVideo from '../components/HeroVideo.vue';
import LinkSection from '../components/LinkSection.vue';

</script>

<template>
  <!-- Intro Section -->
  <HeroVideo
    :title="'Welcome to my portfolio'"
    :text="'Here you will find most of my tattoos, along with some of my arts & crafts and sketches. The video beside shows a timelapse of a peony sketch.'"
    :video-src="peonyVid"
  />

  <!-- Portfolio Grids -->
  <div class="about-page">
    <ImageGrid
      :images="tattoos"
      :title="'Tattoos'"
    />
    <ImageGrid
      :images="designs"
      :title="'Designs'"
    />
    <ImageGrid
      :images="arts"
      :title="'Arts'"
    />
    <Instagram />
    <LinkSection
      :link="'/about'"
      :title="'Want to learn more about me?'"
      :button-text="'Click here!'"
    />
  </div>
</template>