import Root from '../App'

import IndexPage from 'pages/index/index'
import IndexDetail from 'pages/index/detail'
import LocationPage from 'pages/location/index'
import MusicPage from 'pages/music/index'

const routes = [
    {
        component: Root,
        routes: [
            {
                path: '/',
                label: '首页',
                exact: true,
                component: IndexPage
            },
            {
                path: '/blog',
                label: '博客',
                component: IndexPage,
                exact: true
            },
            {
                path: '/blog/detail/:id',
                label: 'detail',
                component: IndexDetail,
                exact: true
            },
            {
                path: '/music',
                label: '音乐馆',
                component: MusicPage
            },
            {
                path: '/location',
                label: '我的位置',
                component: LocationPage
            }
        ]
    }
]

export default routes