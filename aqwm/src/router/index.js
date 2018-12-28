import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SafetyProduction from '@/components/pages/SafetyProduction'


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
			path: '/safetyProduction', //path:匹配的hash地址
			name: 'SafetyProduction', //路由的名字
			component: SafetyProduction //该路由所引用的组件的名字
		},
  ]
})
