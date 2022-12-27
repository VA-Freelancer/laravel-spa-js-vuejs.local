import { createApp } from 'vue';
import router from "./router";
import './bootstrap';
import Index from './components/index.vue';
const app = createApp({
    components:{
        Index
    },
    router
});
app.use(router)
app.mount('#app');

