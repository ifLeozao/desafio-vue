import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Leo from '../views/Leo.vue';
import Nicolas from '../views/Nicolas.vue';
import Gabriel from '../views/Gabriel.vue';
import Diego from '../views/Diego.vue';
import Ana from '../views/Ana.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/ana',
		name: 'Ana',
		component: Ana,
	},
	{
		path: '/leo',
		name: 'Leo',
		component: Leo,
	},
	{
		path: '/nicolas',
		name: 'Nicolas',
		component: Nicolas,
	},
	{
		path: '/diego',
		name: 'Diego',
		component: Diego,
	},
	{
		path: '/gabriel',
		name: 'Gabriel',
		component: Gabriel,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
