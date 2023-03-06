import { createApp } from 'vue';
import App from './App.vue';

// Vue router
import router from './router/index';

// Googl Oauth
import gAuthPlugin from 'vue3-google-oauth2';
const gauthClientId = "768834812579-ivi0oopbkqe05cg6t41p83t7gteekut6.apps.googleusercontent.com";
const gAuthOptions = { clientId: gauthClientId, scope: 'email', prompt: 'consent', fetch_basic_profile: false }

// Pinia
import { createPinia } from 'pinia';

import "@/assets/css/tailwind.css";

createApp(App)
    .use(router)
    .use(gAuthPlugin, gAuthOptions)
    .use(createPinia()).mount('#app');
