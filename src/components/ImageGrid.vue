<template>
  <div class="container">
    <h2
      v-if="title"
      class="grid-title"
      data-aos="fade-up"
    >
      {{ title }}
    </h2>

    <div class="image-grid">
      <div
        v-for="(item, index) in visibleImages"
        :key="index"
        class="grid-item"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
        data-aos-offset="100"
        data-aos-duration="500"
        @click="openModal(item)"
      >
        <img
          :src="item.image"
          class="grid-image"
          :alt="item.title || 'image'"
        >
      </div>
    </div>

    <div
      v-if="images.length > visibleCount"
      class="load-more"
      data-aos="fade-up"
    >
      <button
        class="btn"
        @click="loadMore"
      >
        Load More
      </button>
    </div>

    <div
      v-if="selectedImage"
      class="modal"
      @click.self="closeModal"
    >
      <div class="modal-content">
        <button
          class="close-btn"
          @click="closeModal"
        >
          <X class="icon" />
        </button>
        <img
          :src="selectedImage.image"
          class="modal-image"
          :alt="selectedImage.title || 'image'"
        >
        <p
          v-if="selectedImage.title"
          class="image-title"
        >
          {{ selectedImage.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
import { X } from "lucide-vue-next";

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: false,
    default: '',
  },
  step: {
    type: Number,
    default: 6
  }
});

const selectedImage = ref(null)
const visibleCount = ref(props.step)

const visibleImages = computed(() => {
  return props.images.slice(0, visibleCount.value)
})

function openModal(image) {
  selectedImage.value = image
}

function closeModal() {
  selectedImage.value = null
}

function loadMore() {
  visibleCount.value = Math.min(visibleCount.value + props.step, props.images.length)
}
</script>
