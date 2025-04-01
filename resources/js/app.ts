import './bootstrap';
import {createApp} from 'vue';
import App from './App.vue';
import router from './services/router';
import {addRoutes} from './services/router';
import {routes as routes_books} from './domains/bookcollection/routes';
import {routes as routes_author} from './domains/authors/routes';
import {routes as routes_login} from './domains/login/routes';

addRoutes(routes_books);
addRoutes(routes_author);
addRoutes(routes_login);

const app = createApp(App);
app.use(router);
app.mount('#app');
