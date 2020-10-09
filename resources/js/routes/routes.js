
export const routes = [
    {
        path: '/',
        component: () => import('@/pages/Home')
    },
    {
        name: 'library',
        path: '/library',
        component: () => import('@/pages/Library'),
        meta: { middlewareAuth: true }
    },
    // important: constructor-example route is always over constructor route
    {
        name: 'constructor-example',
        path: '/constructor/example',
        component: () => import('@/pages/Constructor'),
    },
    {
        name: 'constructor',
        path: '/constructor/:id',
        component: () => import('@/pages/Constructor'),
        props: true,
        meta: { middlewareAuth: true }
    },
    {
        name: 'viewer',
        path: '/viewer/:id',
        component: () => import('@/pages/Viewer'),
        props: true,
        meta: { middlewareAuth: true }
    },
    {
        name: 'viewer-example',
        path: '/viewer/example/:id',
        component: () => import('@/pages/Viewer'),
        props: true
    },
    {
        path: '*',
        component: () => import('@/pages/page404')
    }
];
