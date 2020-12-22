import Home from './components/Home.vue';
import Dashboard from './components/Dashboard.vue';
import Team from './components/Team.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard },
    { path: '/team', component: Team },
];

export default routes;