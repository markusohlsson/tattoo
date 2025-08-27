<script setup>
import Navigation from './components/Navigation.vue';
import Foot from './components/Foot.vue';

</script>

<template>
  <Navigation/>
  <div class="parallax">
  <div class="content">
    <router-view></router-view>
    </div>
  </div>

  <Foot/>
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
  background-color: rgba(0, 0, 0, 0.8); /* Optional: adds a translucent background to content */
}
</style>
