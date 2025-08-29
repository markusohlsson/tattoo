<script setup lang="ts">
import { ref } from "vue"
import { PlayIcon, PauseIcon } from "lucide-vue-next"

// Props
defineProps<{
  title: string,
  text: string,
  videoSrc: string
}>()

const videoEl = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(true)
const isHovering = ref(false)

const togglePlay = () => {
  if (!videoEl.value) return

  if (videoEl.value.paused) {
    videoEl.value.play()
    isPlaying.value = true
  } else {
    videoEl.value.pause()
    isPlaying.value = false
  }
}
</script>

<template>
  <section class="intro-section">
    <div class="intro-text">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </div>

    <div class="intro-video" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
      <video
        ref="videoEl"
        :src="videoSrc"
        autoplay
        muted
        loop
        playsinline
        class="video"
      ></video>

      <div class="pause-container" :class="{ 'hidden': !isHovering }">
        <button class="pause-btn" @click="togglePlay">
          <component class="pause-icon" :is="isPlaying ? PauseIcon : PlayIcon" />
        </button>
      </div>
    </div>
  </section>
</template>

<style>

</style>