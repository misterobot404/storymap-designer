import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

import maps from './modules/maps'
import map_config from './modules/map_config'
import map_events from './modules/map_events'

export default new Vuex.Store({
    strict: true,
    actions: {
        initStore: function ({commit}) {
            // Если пришли данные всех карт
            if (window.maps) {
                commit('SET_MAPS', window.maps);
            }
            // Если пришли данные одной карты
            else if (window.map) {
                commit('SET_EVENTS', JSON.parse(window.map.events));
                commit('SET_CONFIG', JSON.parse(window.map.config))
            }

            // Установить текущее количество карт имеющихся карт, если пользователь авторизирован вернёт 0
            axios.get('/maps/count')
                .then(response => {
                    if (response.data.mapCount !== 0) {
                        commit('SET_MAP_COUNT', JSON.parse(response.data.mapCount));
                    }
                })
                .catch(error => {
                    console.log(error)
                });
        },
        setMap: function ({getters}) {
            axios.post('/edit/savemap',
                {
                    map_id: window.map.id,
                    events: JSON.stringify(getters.events),
                    config: JSON.stringify(getters.config)
                })
                .then(response => {
                    // TODO: Анимация сохранения
                    alert("Save successful");
                })
                .catch(error => {
                    alert("Save Error")
                });
        },
        createMap: function ({commit}, data) {
            axios.post('/maps',
                {
                    name: data.name,
                    description: data.description
                })
                .then(response => {
                    commit('SET_MAPS', JSON.parse(response.data.maps));
                    commit('SET_MAP_COUNT', JSON.parse(response.data.mapCount));
                })
                .catch(error => {
                    alert("Error")
                });
        },
        destroyMap: function ({commit}, data) {
            axios.delete('/maps/' + data.id)
                .then(response => {
                    commit('SET_MAPS', JSON.parse(response.data.maps));
                    commit('SET_MAP_COUNT', JSON.parse(response.data.mapCount));
                })
                .catch(error => {
                    alert("Error")
                });
        }
    },
    modules: {
        maps,
        map_config,
        map_events
    }
})

/*
        getMap: function ({commit}) {
            axios.post('api/getDataMap')
                .then(response => {
                    // Обязательно приведение json в обьект
                    commit('SET_EVENTS', JSON.parse(response.data.map_events));
                    commit('SET_CONFIG', JSON.parse(response.data.map_config))
                })
                .catch(error => {
                    alert("Error getMap: " + error.response);
                });
        },
        */
/*
setMap: function (ctx) {
ctx.rootState.map_config.config
}
===
setMap: function ({rootState})
rootState.map_config.config
 */
