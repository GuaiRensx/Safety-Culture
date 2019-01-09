import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Aqsc from '@/components/pages/Aqsc'
import Wmsg from '@/components/pages/Wmsg'
import Sgcf from '@/components/pages/Sgcf'
import Addexamine from '@/components/pages/Addexamine'
import Addpunish from '@/components/pages/Addpunish'
import Addwmsg from '@/components/pages/Addwmsg'
import Ysjl from '@/components/pages/Ysjl'
import Detail from '@/components/pages/Detail'


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
			path: '/home/aqsc/addexamine', //path:匹配的hash地址
			name: 'Addexamine', //路由的名字
			component: Addexamine //该路由所引用的组件的名字
		},
						{
			path: '/home/sgcf/addpunish', //path:匹配的hash地址
			name: 'Addpunish', //路由的名字
			component: Addpunish //该路由所引用的组件的名字
		},
						{
			path: '/home/wmsg/addwmsg', //path:匹配的hash地址
			name: 'Addwmsg', //路由的名字
			component: Addwmsg //该路由所引用的组件的名字
		},
								{
			path: '/home/aqsc/addexamine/ysjl', //path:匹配的hash地址
			name: 'Ysjl', //路由的名字
			component: Ysjl //该路由所引用的组件的名字
		},
										{
			path: '/home/aqsc/addexamine/ysjl/detail', //path:匹配的hash地址
			name: 'Detail', //路由的名字
			component: Detail //该路由所引用的组件的名字
		},
  ]
})
