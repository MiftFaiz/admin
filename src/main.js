import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import router from './router';

createApp(App).mount('#app')

App.use(VueSweetalert2);