<template>
  <div class="info-list">
    <h2 data-aos="fade-up">
      {{ title }}
    </h2>
    <p
      v-for="text in texts"
      :key="text"
      data-aos="fade-up"
    >
      {{ text }}
    </p>
    <span
      data-aos="fade-up"
      class="text-right"
    ><router-link
      class="text-right"
      :to="btnLink"
    >{{ btnText }}</router-link></span>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  texts: { type: Array, default: () => [] },
  btnText: { type: String, default: '' },
  btnLink: { type: String, default: '' }
});
</script>