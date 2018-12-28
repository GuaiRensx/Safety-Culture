import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Aqsc from '@/components/pages/Aqsc'
import Wmsg from '@/components/pages/Wmsg'
import Sgcf from '@/components/pages/Sgcf'
import About from '@/components/pages/About'


Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home', //path:匹配的hash地址
			name: 'Home', //路由的名字
			component: Home //该路由所引用的组件的名字
		},
		{
			path: '/home/aqsc', //path:匹配的hash地址
			name: 'Aqsc', //路由的名字
			component: Aqsc //该路由所引用的组件的名字
		},
		{
			path: '/home/wmsg', //path:匹配的hash地址
			name: 'Wmsg', //路由的名字
			component: Wmsg //该路由所引用的组件的名字
		},
				{
			path: '/home/sgcf', //path:匹配的hash地址
			name: 'Sgcf', //路由的名字
			component: Sgcf //该路由所引用的组件的名字
		},
						{
			path: '/home/about', //path:匹配的hash地址
			name: 'About', //路由的名字
			component: About //该路由所引用的组件的名字
		},
  ]
})
