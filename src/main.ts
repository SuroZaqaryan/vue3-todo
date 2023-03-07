import { createApp } from 'vue';
import App from './App.vue';

// Vue router
import router from './router/index';

import piniaPersist from 'pinia-plugin-persist'

// Pinia
import { createPinia } from 'pinia';

const pinia = createPinia()

pinia.use(piniaPersist)

import "@/assets/css/tailwind.css";

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app');
