import Overview from './pages/Overview.vue';
import Edit from './pages/Edit.vue';
import Create from './pages/Create.vue';
import Show from './pages/Show.vue';
import EditReview from './pages/EditReview.vue';
import AuthorOverview from './../authors/pages/Overview.vue';
import AuthorEdit from './../authors/pages/Edit.vue';
import AuthorCreate from './../authors/pages/Create.vue';

const routes = [
    {path: '/', component: Overview},
    {path: '/edit/:id', component: Edit, name: 'edit'},
    {path: '/create', component: Create},
    {path: '/show/:id', component: Show, name: 'show'},
    {path: '/edit/:book_id/review/:review_id', component: EditReview, name: 'edit/review'},
    {path: '/authors', component: AuthorOverview},
    {path: '/authors/edit/:id', component: AuthorEdit, name: 'edit/authors'},
    {path: '/authors/create', component: AuthorCreate, name: 'create/authors'},
];

export default routes;
