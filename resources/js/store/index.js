import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import auth from './modules/auth'
import layout from './modules/layout'
import map from './modules/map'
import maps from './modules/maps'

export default new Vuex.Store({
    strict: true,
    modules: {
        auth,
        layout,
        map,
        maps
    }
})


