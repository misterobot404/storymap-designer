import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);

import map_config from './modules/map_config'
import map_events from './modules/map_events'

export default new Vuex.Store({
    strict: true,
    actions: {
        // Обращение к API
        setMap: function ({getters}) {
            axios.post('api/setMap',{
                // Приведение обьекта в json
                events: JSON.stringify(getters.events),
                config: JSON.stringify(getters.config)
            })
                .then(response => {
                    alert("Save successful")
                })
                .catch(error => {
                    alert("Save error: " + error.response)
                });
        },
        getMap: function ({commit}) {
            axios.post('api/getMap')
                .then(response => {
                    // Обязательно приведение json в обьект
                    commit('SET_EVENTS', JSON.parse(response.data.map_events));
                    commit('SET_CONFIG', JSON.parse(response.data.map_config))
                })
                .catch(error => {
                    alert("Error getMap: " + error.response);
                });
        },
    },
    modules: {
        map_config,
        map_events
    }
})

/*
setMap: function (ctx) {
ctx.rootState.map_config.config
}
===
setMap: function ({rootState})
rootState.map_config.config
 */