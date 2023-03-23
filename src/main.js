import { createApp } from 'vue'
import App from './App.vue'

import BaseLoader from './components/BaseLoader.vue';

const app = createApp(App);

app.component('BaseLoader',BaseLoader);

app.mount('#app');
