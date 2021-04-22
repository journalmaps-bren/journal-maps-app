import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../pages/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
		path: '/',
		name: 'Home',
		component: Home
	},
  {
    path: '/profile',
    name: 'Profile',
    component: () => import( /* webpackChunkName: "login" */ '../pages/UserProfile.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
