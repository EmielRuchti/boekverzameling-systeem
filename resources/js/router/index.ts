import {createWebHistory, createRouter} from 'vue-router';
import {routes as routes_book} from '../domains/bookcollection/routes';
import {routes as routes_author} from '../domains/authors/routes';

const routes = routes_book.concat(routes_author);

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
