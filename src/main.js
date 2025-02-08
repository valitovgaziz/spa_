import './assets/main.css';

import { createApp } from 'vue';
import SPA_VUE_App from './App.vue';
import router from './router';
import i18n from './locales/i18n.js';

const spaAppVue3 = createApp(SPA_VUE_App);

spaAppVue3.use(router);
spaAppVue3.use(i18n);

spaAppVue3.mount('#app');
