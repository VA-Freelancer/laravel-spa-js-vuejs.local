import { createApp } from 'vue';
import store from "./store";
import router from "./router";
import './bootstrap';
import Index from './components/index.vue';
const app = createApp({
    components:{
        Index
    },
    router,
    store
});
app.use(store)
app.use(router)
app.mount('#app');

