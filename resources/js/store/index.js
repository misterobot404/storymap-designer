import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import auth from './modules/User/auth'
import subjects from './modules/User/subjects'
import tiles from './modules/User/tiles'
import layout from './modules/layout'
import map from './modules/map'
import maps from './modules/maps'

export default new Vuex.Store({
    strict: true,
    modules: {
        auth,
        subjects,
        tiles,
        layout,
        map,
        maps
    }
})


