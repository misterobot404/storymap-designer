
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
        name: 'constructor',
        path: '/constructor/:id',
        component: () => import(/* webpackChunkName: 'constr' */ '@/pages/Constructor'),
        props: true,
        meta: { middlewareAuth: true }
    },
    {
        path: '/viewer/:id',
        component: () => import(/* webpackChunkName: 'viewer' */ '@/pages/Viewer'),
        props: true,
        meta: { middlewareAuth: true }
    },
    {
        path: '*',
        component: () => import(/* webpackChunkName: 'page404' */ '@/pages/Page404')
    }
];
