import {createApp} from 'vue';
import pinia from '@/stores/index';
import App from '@/App.vue';
import router from '@/router';
import './styles/index.less';

const app = createApp(App);

app.use(pinia).use(router).mount('#app');
