import 'floating-vue/dist/style.css';
import './ui/index.css';

import { createApp } from 'vue';

import App from './ui/App.vue';
import router from './router';
import FloatingVue from 'floating-vue';

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
app.use(FloatingVue, {
  themes: {
    note: {
      $extend: 'tooltip',
      delay: {
        show: 0,
        hide: 0,
      },
      autoHide: false,
      placement: 'right',
      html: true,
    },
  },
});
app.mount('#app');
