<template>
  <div class="info-list">
    <h2 data-aos="fade-up">{{ title }}</h2>
    <p data-aos="fade-up" v-for="text in texts">{{ text }}</p>
    <span data-aos="fade-up" class="text-right"><router-link class="text-right" :to="btnLink">{{ btnText }}</router-link></span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  texts: Array;
  btnText: string;
  btnLink: string;
}>();
</script>