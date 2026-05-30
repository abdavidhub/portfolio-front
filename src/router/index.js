import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'
import AdminView from '../views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/projets', component: ProjectsView },
    { path: '/a-propos', component: AboutView },
    { path: '/contact', component: ContactView },
    { path: '/admin', component: AdminView },
  ]
})

export default router