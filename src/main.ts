import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { createPinia } from 'pinia';

createApp(App).use(router).use(createPinia()).mount('#app');
// import { createApp } from 'vue'
// import App from './App.vue'
// import "@/assets/css/tailwind.css"

// createApp(App).mount('#app')
