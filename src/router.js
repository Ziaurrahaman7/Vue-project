import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'
const routes = [
    {
        name:'Home',
        path:'/',
        component:Home,
    },
    {
        name:'About',
        path:'/about',
        component:About
    },
    {
        name:'Login',
        path:'/login',
        component:Login
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router