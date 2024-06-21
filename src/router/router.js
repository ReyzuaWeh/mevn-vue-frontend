import { createRouter, createWebHistory } from 'vue-router'

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
        name: 'Login'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;