<script setup>
import Navigation from './components/Navigation.vue';
import Foot from './components/Foot.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({      
  duration: 800,
    offset: 90,
      once: false,
      mirror: true,
    })

</script>

<template>
  <Navigation />
  <div class="parallax">
    <div class="content">
      <router-view />
    </div>
  </div>

  <Foot />
</template>

<style scoped>
.parallax {
  position: relative;
  min-height: 100vh; /* Full viewport height */
  background-image: url('./assets/img/hero.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Ensure content is scrollable */
.content {
  position: relative;
  z-index: 1; /* Places content above the background */
  background-color: rgb(0 0 0 / 80%); /* Optional: adds a translucent background to content */
}
</style>
