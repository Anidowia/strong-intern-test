import App from './App.vue'
import './assets/sass/style.css'
import router from './router';
import { createApp } from 'vue'
createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
