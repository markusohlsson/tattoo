<template>
  <div class="footer-disclaimer">
    <span>Work is currently under progress — images are placeholders and only used for development purposes.</span>
  </div>
  <footer class="footer">
    <div class="footer-left">
      <span>© 2025 Ohlsson Tattoo</span>
    </div>
    <div class="footer-right">
      <a
        href="https://instagram.com/o.h.tattoo"
        target="_blank"
        rel="noopener"
      >
        <InstagramIcon />
      </a>
      <a href="mailto:info@ohlssontattoo.com">
        <MailIcon />
      </a>
    </div>
  </footer>
</template>

<script setup>
import { InstagramIcon, MailIcon } from "lucide-vue-next"
</script>
