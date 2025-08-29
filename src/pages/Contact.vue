<script setup>
import ContactForm from '../components/ContactForm.vue';
import pokeVideo from '../assets/vid/poke.mp4';
import HeroVideo from "../components/HeroVideo.vue";

</script>

<template>
  <HeroVideo
    :title="'Got any questions?'"
    :text="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas nemo...'"
    :video-src="pokeVideo"
  />
  
  <div class="container">
    <ContactForm />
  </div>
</template>