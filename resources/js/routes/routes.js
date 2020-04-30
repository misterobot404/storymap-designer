
export const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: 'home' */ '@/pages/Home')
    },
    {
        path: '/library',
        component: () => import(/* webpackChunkName: 'library' */ '@/pages/Library'),
        meta: { middlewareAuth: true }
    },
    {
        path: '*',
        component: () => import(/* webpackChunkName: 'page404' */ '@/pages/Page404')
    }
];
