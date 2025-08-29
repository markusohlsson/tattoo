<template>
  <div class="container">
    <div class="instagram"> 
      <h2 style="text-align: center;">
        Instagram
      </h2>
      <p style="text-align: center;">
        Check out my instagram for more updates
      </p>
      <!-- Lazy-loaded Elfsight widget -->
      <div
        ref="container"
        :class="`elfsight-app-${widgetId}`"
        data-elfsight-app-lazy
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const widgetId = '4f3aee5a-348a-4a63-86cc-38c7050e95f6';

onMounted(() => {
  if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }
});
</script>
