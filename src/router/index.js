import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Profile from '../views/profile.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/home',
		name: 'Home',
		component: Home,
		children: [
			{
				path: '/profile',
				name: 'Profile',
				component: Profile,
			}
		]
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
