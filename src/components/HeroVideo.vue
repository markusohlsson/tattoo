<script setup>
import { ref } from "vue"
import { PlayIcon, PauseIcon } from "lucide-vue-next"

// Props
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  videoSrc: {
    type: String,
    required: true
  }
})

const videoEl = ref(null)
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

    <div
      class="intro-video"
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <video
        ref="videoEl"
        :src="videoSrc"
        autoplay
        muted
        loop
        playsinline
        class="video"
      />

      <div
        class="pause-container"
        :class="{ 'hidden': !isHovering }"
      >
        <button
          class="pause-btn"
          @click="togglePlay"
        >
          <component
            :is="isPlaying ? PauseIcon : PlayIcon"
            class="pause-icon"
          />
        </button>
      </div>
    </div>
  </section>
</template>