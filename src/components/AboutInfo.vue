<script setup>
import InfoBox from '../components/InfoBox.vue';
import InfoList from '../components/InfoList.vue';
import { studios, events } from '../data/content';

const texts = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla alias optio inventore explicabo aspernatur nihil deleniti necessitatibus facere? Quibusdam unde pariatur iure quisquam error asperiores vero autem dolorum nesciunt praesentium.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse accusantium vitae laborum! Repellendus, ratione illum error incidunt a nam, aliquam alias quia natus nesciunt voluptas blanditiis ex quidem minus.'
]
</script>
<template>
  <div class="about-text">
    <InfoBox
      :title="'Who am i?'"
      :texts="texts"
      btn-text="More about me"
      btn-link="/about"
    />
    <InfoList
      :title="'Studios I’ve Worked At'"
      :items="studios"
    />
    <InfoList
      :title="'Events I’ve Attended'"
      :items="events"
    />
  </div>
</template>