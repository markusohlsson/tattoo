<script setup lang="ts">
import Load from './Load.vue';

</script>

<template>
  <section class="hero-container">
    <div class="hero-overlay">
      <h1 class="hero-title">Ohlsson Tattoo</h1>
      <p class="hero-subtitle">Art that stays forever</p>
      <Load/>
    </div>
  </section>
</template>

<style>
.hero-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #F5F5F5;

  z-index: 2;
}

.hero-title {
  font-size: 10rem;
  margin: 0;
}

.hero-subtitle {
  font-size: 4rem;
  margin:0;
}
</style>
