import Overview from './pages/Overview.vue';
import Edit from './pages/Edit.vue';
import Create from './pages/Create.vue';
import Show from './pages/Show.vue';
import EditReview from './../reviews/pages/Edit.vue';

export const routes = [
    {name: '/', path: '/', component: Overview},
    {name: 'edit', path: '/edit/:id', component: Edit},
    {name: 'create', path: '/create', component: Create},
    {name: 'show', path: '/show/:id', component: Show},
    {name: 'edit/review', path: '/edit/:book_id/review/:review_id', component: EditReview},
];
