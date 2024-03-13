import './assets/css/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import store from './store';
import FilterUtils from './util/filters';

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store);

app.config.globalProperties.$filters = FilterUtils;

app.mount('#app')

window.Kakao.init("9fec04fa20baed0ee099cd83c9111472");