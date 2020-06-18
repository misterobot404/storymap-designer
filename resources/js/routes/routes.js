
export const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: 'home' */ '@/pages/Home')
    },
    {
        name: 'library',
        path: '/library',
        component: () => import(/* webpackChunkName: 'library' */ '@/pages/Library'),
        meta: { middlewareAuth: true }
    },
    // important: constructor-example route is always over constructor route
    {
        name: 'constructor-example',
        path: '/constructor/example',
        component: () => import(/* webpackChunkName: 'constr' */ '@/pages/Constructor'),
    },
    {
        name: 'constructor',
        path: '/constructor/:id',
        component: () => import(/* webpackChunkName: 'constr' */ '@/pages/Constructor'),
        props: true,
        meta: { middlewareAuth: true }
    },
    {
        name: 'viewer',
        path: '/viewer/:id',
        component: () => import(/* webpackChunkName: 'viewer' */ '@/pages/Viewer'),
        props: true,
        meta: { middlewareAuth: true }
    },
    {
        name: 'viewer-example',
        path: '/viewer/example/:id',
        component: () => import(/* webpackChunkName: 'viewer' */ '@/pages/Viewer'),
        props: true
    },
    {
        path: '*',
        component: () => import(/* webpackChunkName: 'page404' */ '@/pages/page404')
    }
];
