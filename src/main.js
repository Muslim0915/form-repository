import { createApp } from 'vue'
import {createPinia} from "pinia";
import { registerPlugins } from '@/plugins'
import App from './App.vue'
import {i18n} from "@/translation/i18n";
import '@/style.css'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
const pinia = createPinia();
const app = createApp(App);

registerPlugins(app)

app.use(Toast);
app.use(pinia);
app.use(i18n);
app.mount('#app');
