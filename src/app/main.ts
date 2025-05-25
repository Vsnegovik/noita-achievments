import './ui/index.css';

import { createApp } from 'vue';

import App from './ui/App.vue';
import router from './router';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import { createI18n } from 'vue-i18n';
const i18n = createI18n({
  locale: 'ru', // <--- это важно
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: false,
});

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(pinia);
app.use(i18n);
app.mount('#app');
