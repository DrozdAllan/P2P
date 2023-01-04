import {createApp} from 'vue'
import {Quasar, Notify} from 'quasar'
import {createPinia} from "pinia";
import App from './App.vue'
import router from './router'
import VueSnip from 'vue-snip'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import './css/style.css'


createApp(App).use(router)
    .use(createPinia())
    .use(Quasar, {plugins: {Notify,},})
    .use(VueSnip)
    .mount('#app');
