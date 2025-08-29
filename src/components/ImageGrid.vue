<template>
  <div class="container">
    <h2 v-if="title" class="grid-title" data-aos="fade-up">{{ title }}</h2>

    <div class="image-grid">
      <div
        v-for="(item, index) in visibleImages"
        :key="index"
        class="grid-item"
        @click="openModal(item)"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
        data-aos-offset="100"
        data-aos-duration="500"
      >
        <img
          :src="item.image"
          class="grid-image"
          :alt="item.title || 'image'"
        />
      </div>
    </div>

    <div v-if="images.length > visibleCount" class="load-more" data-aos="fade-up">
      <button class="btn" @click="loadMore">Load More</button>
    </div>

    <!-- Modal -->
    <div v-if="selectedImage" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">
          <X class="icon" />
        </button>
        <img
          :src="selectedImage.image"
          class="modal-image"
          :alt="selectedImage.title || 'image'"
        />
        <p v-if="selectedImage.title" class="image-title">
          {{ selectedImage.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { X } from "lucide-vue-next";

export default {
  name: "ImageGrid",
  components: { X },
  props: {
    images: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    step: {
      type: Number,
      default: 6, // number of images to show per batch
    },
  },
  data() {
    return {
      selectedImage: null,
      visibleCount: this.step,
    };
  },
  computed: {
    visibleImages() {
      return this.images.slice(0, this.visibleCount);
    },
  },
  methods: {
    openModal(image) {
      this.selectedImage = image;
    },
    closeModal() {
      this.selectedImage = null;
    },
    loadMore() {
      this.visibleCount = Math.min(
        this.visibleCount + this.step,
        this.images.length
      );
    },
  },
};
</script>

<style>

</style>
