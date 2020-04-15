import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import store from '@/store'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {

    store.commit("routeLoading/ENABLE", null, {root: true});

    // checking access to the router
    if (to.matched.some(record => record.meta.middlewareAuth)) {
        if (!store.getters['auth/isAuth']) {
            if (from.fullPath === '/') store.commit("routeLoading/DISABLE", null, {root: true});
            next('/')
        } else next()
    } else next()
});
router.afterEach((to, from) => {
    store.commit("routeLoading/DISABLE", null, {root: true});
});

export default router
