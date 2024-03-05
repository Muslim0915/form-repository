import { createApp } from 'vue'
import {createPinia} from "pinia";
import { registerPlugins } from '@/plugins'
import App from './App.vue'
import '@/style.css'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
const pinia = createPinia();
const app = createApp(App);

registerPlugins(app)

app.use(Toast)
app.use(pinia)
app.mount('#app')
