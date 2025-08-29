<template>
  <div class="container">
    <div class="contact">
      <h3 data-aos="fade-up">
        {{ title }}
      </h3>
      <router-link
        :to="link"
        class="btn"
        data-aos="fade-up"
      >
        {{ buttonText }}
      </router-link>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: 'Contact me'
  },
  link: {
    type: String,
    required: true
  }
})
</script>