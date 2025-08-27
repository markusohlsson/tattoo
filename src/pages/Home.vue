<script setup lang="ts">
import Hero from '../components/Hero.vue';
import Instagram from '../components/Instagram.vue';

</script>

<template>
    <Hero/>
    <div class="test">
        <div class="about">
            <img src="../assets/img/vktr.jpeg" alt="">
            <div class="about-text">
                <h2>Who am i?</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla alias optio inventore explicabo aspernatur nihil deleniti necessitatibus facere? Quibusdam unde pariatur iure quisquam error asperiores vero autem dolorum nesciunt praesentium.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse accusantium vitae laborum! Repellendus, ratione illum error incidunt a nam, aliquam alias quia natus nesciunt voluptas blanditiis ex quidem minus.</p>
                <router-link to="/contact">Contact Me</router-link>
            </div>
        </div>
    </div>
    <div class="test">
        <div class="about">
            <div class="about-text">
                <h2>Previously worked at</h2>
                <ul>
                    <li>Salong Blåkulla <span style="font-style: italic;">Jönköping, Sweden</span></li>
                    <li>Subterra Tattoo <span style="font-style: italic;">Stockholm, Sweden</span></li>
                </ul>
            </div>
            <img src="../assets/img/prev.jpg" alt="">
        </div>
    </div>

    <div class="test">
        <Instagram/>
    </div>
</template>

<style> 
.test {
    padding: 10px;
    margin-top: 25px;
  background-color: rgba(0, 0, 0, 0.5);

}
.about {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    gap: 20px;
    img {
        height:500px;
    }
    .about-text {
        h2 {
            text-align: center;
        }
        display:flex;
        flex-direction: column;
        justify-content: start;
    }
}
</style>