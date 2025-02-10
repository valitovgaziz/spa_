import './assets/main.css';

import { createApp } from 'vue';
import SPA_VUE_App from './App.vue';
import appRouter from './router/index.js';
import i18n from './locales/i18n.js';
import './assets/fonts.css';

const spaAppVue3 = createApp(SPA_VUE_App);

spaAppVue3.use(appRouter);
spaAppVue3.use(i18n);

spaAppVue3.mount('#app');
