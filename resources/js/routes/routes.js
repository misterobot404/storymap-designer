
export const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: 'home' */ '@/pages/home')
    },
    // {
    //     path: '/library',
    //     component: () => import(/* webpackChunkName: 'library' */ '@/pages/library')
    // },
    // {
    //     path: '/constructor',
    //     component: () => import(/* webpackChunkName: 'constr' */ '@/pages/constructor' )
    // },
    // {
    //     path: '/viewer',
    //     component: () => import(/* webpackChunkName: 'viewer' */ '@/pages/viewer')
    // }
];
