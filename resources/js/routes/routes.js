
export const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: 'home' */ '@/pages/Home')
    },
    {
        path: '/library',
        component: () => import(/* webpackChunkName: 'library' */ '@/pages/Home'),
        meta: { middlewareAuth: true }
    },
    {
        path: '*',
        component: () => import(/* webpackChunkName: '404' */ '@/pages/404')
    }
];
