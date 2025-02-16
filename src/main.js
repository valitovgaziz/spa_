import './assets/main.css';
import { createApp } from 'vue';
import SPA_VUE_App from './App.vue';
import appRouter from './router/index.js';
import i18n from './locales/i18n.js';
import { createPinia } from 'pinia';
import store from '@/auth/stores/store.js';
import axios from '@/auth/axios.js';

const spaAppVue3 = createApp(SPA_VUE_App);
const pinia = createPinia();

spaAppVue3.use(store);
spaAppVue3.config.globalProperties.$axios = axios;
spaAppVue3.use(pinia);
spaAppVue3.use(appRouter);
spaAppVue3.use(i18n);

spaAppVue3.mount('#app');
