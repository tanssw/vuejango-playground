import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/home/Home.vue'
import Planner from './views/planner/Planner.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/planner',
            name: 'Planner',
            component: Planner
        }
    ]
})

export default router