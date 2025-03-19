import Overview from "./pages/Overview.vue";
import Edit from "./pages/Edit.vue";
import Create from "./pages/Create.vue";

const routes = [
    {path: '/', component: Overview},
    {path: '/edit/:id', component: Edit, name: 'edit'},
    {path: '/create', component: Create},
];

export default routes;