import AuthorOverview from './pages/Overview.vue';
import AuthorEdit from './pages/Edit.vue';
import AuthorCreate from './pages/Create.vue';

export const routes = [
    {path: '/authors', component: AuthorOverview},
    {path: '/authors/edit/:id', component: AuthorEdit, name: 'edit/authors'},
    {path: '/authors/create', component: AuthorCreate, name: 'create/authors'},
];
