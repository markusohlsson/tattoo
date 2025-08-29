<script setup>
import Timeline from '../components/Timeline.vue';
import HeroVideo from '../components/HeroVideo.vue';
import wideVideo from '../assets/vid/wide.mp4';
import { studios, events } from '../data/content';
import PosterCard from '../components/PosterCard.vue';
import LinkSection from '../components/LinkSection.vue';
const texts = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquid placeat maxime quae ipsam dolor accusantium nemo accusamus aspernatur sequi quaerat, a, qui nihil? Amet quo sit vitae ex consequuntur.',
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aliquam reiciendis, voluptate, exercitationem excepturi dolor similique ad optio at cumque enim sint inventore eligendi. Quaerat ex provident consectetur atque tempore.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni natus ab eius, nulla debitis consequuntur excepturi id iusto quos. Quia quis, saepe nam magni quae voluptatum eum temporibus voluptatem.',
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ad facere reiciendis excepturi recusandae est soluta, sunt numquam corrupti! Laboriosam, debitis? Ipsam suscipit molestiae amet a ipsum cumque fuga tempora.'
]
</script>

<template>
  <HeroVideo
    :title="'Hi, Im Viktor'"
    :text="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, esse. Est delectus officiis quo iure culpa asperiores, harum quod, mollitia, reiciendis inventore debitis. Facilis molestiae saepe quia nesciunt ab dolores!'"
    :video-src="wideVideo"
  />
  <div class="container">
    <div class="about-me-columns">
      <div class="about-image">
        <img
          src="../assets/img/vktr.jpeg"
          alt="Viktor portrait"
        >
      </div>
      <div class="about-text">
        <h2 data-aos="fade-up">
          Who Am I?
        </h2>
        <p
          v-for="(text, index) in texts"
          :key="text"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <Timeline />
  </div>
  <div class="container">
    <div class="evst">
      <div class="about-section">
        <h2 class="title">
          Studios I’ve Worked At
        </h2>
        <div class="card-grid">
          <PosterCard
            v-for="(studio, index) in studios"
            :key="studio.name"
            :img="studio.img"
            :name="studio.name"
            :location="studio.location"
            :year="studio.year"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          />
        </div>
      </div>
      <div class="about-section">
        <h2 class="title">
          Events I’ve Attended
        </h2>
        <div class="card-grid">
          <PosterCard
            v-for="(event, index) in events"
            :key="event.name"
            :img="event.img"
            :name="event.name"
            :location="event.location"
            :year="event.years"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="certificate-card">
      <h2
        class="title"
        data-aos="fade-up"
      >
        Certificate
      </h2>
      <p
        class="subtitle"
        data-aos="fade-up"
      >
        Certificate for Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere ducimus.
      </p>
      <div
        class="certificate-image"
        data-aos="fade-up"
      >
        <img
          src="../assets/img/cert.jpg"
          alt="Certificate preview"
        >
      </div>
    </div>
  </div>
  <LinkSection
    :title="'Still got questions about me?'"
    :button-text="'Let me know!'"
    :link="'/contact'"
  />
</template>
