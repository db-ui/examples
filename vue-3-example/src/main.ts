import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import {createWebHistory, createRouter, RouteRecordRaw} from 'vue-router'
import HomeView from "./view/HomeView.vue";
import ColorsView from "./view/ColorsView.vue";
import AccordionView from "./view/AccordionView.vue";
import FormView from "./view/FormView.vue";

const routes: RouteRecordRaw[] = [
    { path: '/', component: HomeView, name: 'home' },
    { path: '/colors', component: ColorsView, name: 'colors' },
    { path: '/accordion', component: AccordionView, name: 'accordion' },
    { path: '/form', component: FormView, name: 'form' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app');
