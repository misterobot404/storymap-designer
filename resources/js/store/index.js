import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import auth from './modules/auth'
import maps from './modules/maps'
import layout from './modules/layout'

export default new Vuex.Store({
    strict: true,
    modules: {
        auth,
        maps,
        layout
    }
})


