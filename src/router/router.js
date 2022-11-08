import { createRouter, createWebHistory } from "vue-router";
import {
    VMain,
    VFilter,
    VGradient,
    VGrid,
    VFlexbox,
    VShadow,
    VText,
    VNotFound
} from "@/views/index";


const routes = [
  {
    path: '/',
    name: 'main',
    component: VMain,
  },
  {
    path: '/flexbox',
    name: 'flexbox',
    component: VFlexbox,
  },
  {
    path: '/filter',
    name: 'filter',
    component: VFilter
  },
  {
    path: '/gradient',
    name: 'gradient',
    component: VGradient
  },
  {
    path: '/grid',
    name: 'grid',
    component: VGrid
  },
  {
    path: '/shadow',
    name: 'shadow',
    component: VShadow
  },
  {
    path: '/text',
    name: 'text',
    component: VText
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: VNotFound
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router
