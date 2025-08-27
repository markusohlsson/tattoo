<template>
  <div class="instagram">
    <!-- Widget container -->
    <div
      class="elfsight-app-4f3aee5a-348a-4a63-86cc-38c7050e95f6"
      data-elfsight-app-lazy
    ></div>
  </div>
</template>

<script>
export default {
  name: "InstagramFeed",
  mounted() {
    // Check if the Elfsight script is already loaded
    if (!document.getElementById("elfsight-script")) {
      const script = document.createElement("script");
      script.id = "elfsight-script";
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If already loaded, trigger Elfsight to render
      if (window.ElfsightApp) {
        window.ElfsightApp.init();
      }
    }
  },
};
</script>

<style>
.instagram {
    width: 80vw;
    margin: 0 auto;
}</style>