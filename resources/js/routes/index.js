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
    // method called before closing. Check changes map.
    if (from.name === "constructor" && store.getters['map/wasChanges']) {
        if (!window.confirm("Изменения атласа не будут сохранены. Продолжить?"))
            return;
    }

    store.commit("layout/ENABLE_PAGE_LOADING", null, {root: true});
    // checking access to the router
    if (to.matched.some(record => record.meta.middlewareAuth) && !store.getters['auth/isAuth'])
        next('/')
    else {
        document.title = to.meta.title;
        document.description = to.meta.description;
        next()
    }
});
router.afterEach((to, from) => {
    store.commit("layout/DISABLE_PAGE_LOADING", null, {root: true});
});

export default router
