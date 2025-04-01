import AuthorOverview from './pages/Overview.vue';
import AuthorEdit from './pages/Edit.vue';
import AuthorCreate from './pages/Create.vue';

export const routes = [
    {name: 'author', path: '/authors', component: AuthorOverview},
    {name: 'edit/authors', path: '/authors/edit/:id', component: AuthorEdit},
    {name: 'create/authors', path: '/authors/create', component: AuthorCreate},
];
