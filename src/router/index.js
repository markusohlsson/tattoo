import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Portfolio from '../pages/Portfolio.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/portfolio', component: Portfolio, name: 'Portfolio'},
    { path: '/about', component: About, name: 'About'},
    { path: '/contact', component: Contact, name: 'Contact'}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;