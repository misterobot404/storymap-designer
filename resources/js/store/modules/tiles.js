import axios from "axios"

export default {
    namespaced: true,
    state: {
        // Эти тайлы будет видеть не авторизированный пользователь на странице пробного создания атласа
        tiles: [],
        sharedTiles: [
            {
                id: 1,
                name: "Стандартная",
                url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            },
            {
                id: 2,
                name: "Стандартная. Ночь",
                url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
            },
            {
                id: 3,
                name: "Строение человека",
                url: "/tile1/{z}-{x}-{y}.jpg"
            },
            {
                id: 4,
                name: "Карта фильма Властелин Колец",
                url: "/tile2/{z}-{x}-{y}.jpg"
            },
            {
                id: 5,
                name: "Заповедники Дальнего востока",
                url: "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
            },
            {
                id: 6,
                name: "Солнечная система",
                url: "/tile3/{z}-{x}-{y}.jpg"
            },
            {
                id: 7,
                name: "Астрономия",
                url: "http://leafletjs.com/examples/crs-simple/uqm_map_full.png"
            }
        ]
    },
    getters: {
        selectedTile: (state, getters, rootState, rootGetters ) => {
            // Пользователь авторизирован
            if (rootGetters["auth/isAuth"]) return state.tiles.find(tile => tile.id === rootState.map.tile_id)
            else return state.sharedTiles.find(tile => tile.id === rootState.map.tile_id)
        }
    },
    actions: {
        createTile({state, commit}, tile) {
            let formData = new FormData();
            formData.append('name', tile.name);
            if (tile.image) formData.append('image', tile.image);
            else formData.append('url', tile.url);

            return axios.post('/api/tiles', formData, {headers: {'Content-Type': 'multipart/form-data'}})
                .then(response => { commit('SET_TILES', response.data.data.tiles) })
        },
        getTiles({commit}) {
            return axios.get('/api/tiles')
                .then(response => { commit('SET_TILES', response.data.data.tiles) })
        },
        deleteTile({commit}, id) {
            return axios.delete('/api/tiles/' + id)
                .then(response => { commit('SET_TILES', response.data.data.tiles) })
        }
    },
    mutations: {
        SET_TILES: (state, tiles) => { tiles === null ? state.tiles = [] : state.tiles = tiles.reverse() },
        ADD_TILE: (state, tiles) => { state.tiles.push(tiles) },
        SET_TILE_ATTRIBUTION: (state, attribution) => {
            state.tile.attribution = attribution
        }
    }
}

