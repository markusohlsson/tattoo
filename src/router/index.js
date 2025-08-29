import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Portfolio from '../pages/Portfolio.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';

const routes = [
    { path: '/', component: Home, name: 'Home'},
    { path: '/portfolio', component: Portfolio, name: 'Portfolio'},
    { path: '/about', component: About, name: 'About'},
    { path: '/contact', component: Contact, name: 'Contact'}
]

const router = createRouter({

    // temp, update to createWebHistory
    history: createWebHashHistory(),
         scrollBehavior() {
    return { top: 0 }
  },
    routes,
})

export default router;