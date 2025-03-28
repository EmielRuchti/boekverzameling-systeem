import Overview from './pages/Overview.vue';
import Edit from './pages/Edit.vue';
import Create from './pages/Create.vue';
import Show from './pages/Show.vue';
import EditReview from './../reviews/pages/Edit.vue';

export const routes = [
    {path: '/', component: Overview},
    {path: '/edit/:id', component: Edit, name: 'edit'},
    {path: '/create', component: Create},
    {path: '/show/:id', component: Show, name: 'show'},
    {path: '/edit/:book_id/review/:review_id', component: EditReview, name: 'edit/review'},
];
