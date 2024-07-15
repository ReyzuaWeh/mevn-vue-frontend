import { createRouter, createWebHistory } from 'vue-router'
import { cekAuth } from '../utils/auth'

import loginLayout from '../layouts/login.vue'
import mainLayout from '../layouts/main.vue'
import AboutView from '../views/about.vue'
import HomeView from '../views/home.vue'

const routes = [
    {
        path: '/',
        component: mainLayout,
        name: 'Dashboard',
        children: [
            {
                path: '',
                component: HomeView,
                name: 'Home'
            },
            {
                path: 'about',
                component: AboutView,
                name: 'About'
            },
        ]
    },
    {
        path: '/login',
        component: loginLayout,
        name: 'Login',
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    console.log(to.name !== 'Login');
    console.log(cekAuth());
    console.log(to.name !== 'Login' && !cekAuth());
    if (to.name !== 'Login' && !cekAuth()) {
        next({ name: 'Login' })
    } else {
        next();
    }
});
export default router;