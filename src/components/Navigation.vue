<template>
  <nav class="navigation">
    <div class="nav-container">
      <div class="navigation-left">
        <h1>
          <router-link to="/">
            Ohlsson Tattoo
          </router-link>
        </h1>
      </div>

      <!-- Desktop nav -->
      <div class="navigation-right desktop-nav">
        <router-link
          to="/"
          class="nav-link"
        >
          <HomeIcon class="icon" /> Home
        </router-link>
        <router-link
          to="/portfolio"
          class="nav-link"
        >
          <ImageIcon class="icon" /> Portfolio
        </router-link>
        <router-link
          to="/about"
          class="nav-link"
        >
          <UserIcon class="icon" /> About
        </router-link>
        <router-link
          to="/contact"
          class="nav-link"
        >
          <MailIcon class="icon" /> Contact
        </router-link>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="hamburger"
        @click="menuOpen = !menuOpen"
      >
        <component
          :is="menuOpen ? XIcon : MenuIcon"
          class="icon"
        />
      </button>
    </div>

    <!-- Mobile dropdown -->
    <transition name="slide-down">
      <div
        v-if="menuOpen"
        class="mobile-menu"
      >
        <router-link
          to="/"
          class="nav-link"
        >
          <HomeIcon class="icon" /> Home
        </router-link>
        <router-link
          to="/portfolio"
          class="nav-link"
        >
          <ImageIcon class="icon" /> Portfolio
        </router-link>
        <router-link
          to="/about"
          class="nav-link"
        >
          <UserIcon class="icon" /> About
        </router-link>
        <router-link
          to="/contact"
          class="nav-link"
        >
          <MailIcon class="icon" /> Contact
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { HomeIcon, ImageIcon, UserIcon, MailIcon, MenuIcon, XIcon } from 'lucide-vue-next'

const menuOpen = ref(false)
</script>