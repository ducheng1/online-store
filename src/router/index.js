import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("@/views/Home.vue")
    },
    {
        path: '/carts',
        name: 'Carts',
        component: () => import("@/views/carts/Carts.vue")
    },
    {
        path: '/my',
        name: 'PersonalInfo',
        component: () => import("@/views/personalInfo/PersonalInfo.vue")
    },
    {
        path: '/stars',
        name: 'Stars',
        component: () => import("@/views/stars/Stars.vue")
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import("@/views/detail/Detail.vue")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router