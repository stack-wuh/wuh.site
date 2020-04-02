import React from 'react'
import Root from '../App'

// import IndexPage from 'pages/index/index'
// import IndexDetail from 'pages/index/detail'
// import LocationPage from 'pages/location/index'
// import MusicPage from 'pages/music/index'

const IndexPage_c = React.lazy(() => import('pages/index/index'))
const IndexDetail_c = React.lazy(() => import('pages/index/detail'))
const LocationPage_c = React.lazy(() => import('pages/location/index'))
const MusicPage_c = React.lazy(() => import('pages/music/index'))
const NotFound = React.lazy(() => import('components/List/Empty'))

const routes = [
    {
        component: Root,
        routes: [
            {
                path: '/',
                label: '首页',
                exact: true,
                component: IndexPage_c
            },
            {
                path: '/blog',
                label: '博客',
                component: IndexPage_c,
                exact: true
            },
            {
                path: '/blog/detail/:id',
                label: 'detail',
                component: IndexDetail_c,
                exact: true
            },
            {
                path: '/music',
                label: '音乐馆',
                component: MusicPage_c
            },
            {
                path: '/location',
                label: '我的位置',
                component: LocationPage_c
            },
            {
                path: '*',
                component: NotFound
            }
        ]
    }
]

export default routes