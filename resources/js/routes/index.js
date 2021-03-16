import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import store from '../store'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    // enable page loading effect
    store.commit("layout/ENABLE_PAGE_LOADING", null, {root: true});
    // checking access to the router
    if (to.matched.some(
        record => record.meta.middlewareAuth && (to.params.id || to.name === "library")
    ) && !store.getters['auth/isAuth'])
        next('/')
    else {
        document.title = to.meta.title;
        document.description = to.meta.description;
        next()
    }
});
router.afterEach((to, from) => {
    // disable page loading effect
    store.commit("layout/DISABLE_PAGE_LOADING", null, {root: true});
});

export default router
