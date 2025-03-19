import {createWebHistory, createRouter} from 'vue-router';
import routes from '../domains/bookcollection/routes';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;