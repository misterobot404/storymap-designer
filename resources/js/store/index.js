import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import auth from './modules/auth'
import alerts from './modules/alerts'
import loading from './modules/loading'
import axios from "axios";

export default new Vuex.Store({
    strict: true,
    modules: {
        auth,
        alerts,
        loading
    }
})


