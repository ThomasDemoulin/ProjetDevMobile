import { defineCustomElements } from '@ionic/pwa-elements/loader'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app');

defineCustomElements(window);