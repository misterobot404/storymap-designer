import axios from "axios"

export default {
    namespaced: true,

    state: {
        maps: null
    },
    getters: {
    },
    actions: {
        getMaps: function ({commit}) {
            axios.get('api/maps')
                .then(response => {
                    // Обязательно приведение json в обьект
                    commit('SET_MAPS', response.data.data.maps);
                })
        },
        createMap: function ({commit}) {
            axios.post('api/maps',
                {
                    name: "Map" ,
                    description: "Dec" + Date.now()
                })
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                })
        }
    },
    mutations: {
        SET_MAPS: (state, maps) => {
            state.maps = maps;
        },
        SORT_BY_DATA_CREATED_UP: (state) => {
            state.maps.sort(function(a,b){
                return new Date(b.created_at) - new Date(a.created_at);
            });
        },
        SORT_BY_DATA_CREATED_DOWN: (state) => {
            state.maps.sort(function(a,b){
                return new Date(a.created_at) - new Date(b.created_at);
            });
        },
        SORT_BY_DATA_MODIFIED_UP: (state) => {
            state.maps.sort(function(a,b){
                return new Date(b.updated_at) - new Date(a.updated_at);
            });
        },
        SORT_BY_DATA_MODIFIED_DOWN: (state) => {
            state.maps.sort(function(a,b){
                return new Date(a.updated_at) - new Date(b.updated_at);
            });
        }
    }
}
