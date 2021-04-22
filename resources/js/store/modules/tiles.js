import axios from "axios"

export default {
    namespaced: true,
    state: {
        tiles: [],
        sharedTiles: [
            {
                name: "Стандартная",
                url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            },
            {
                name: "Стандартная. Ночь",
                url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
            },
            {
                name: "Строение человека",
                url: "/tile1/{z}-{x}-{y}.jpg"
            },
            {
                name: "Карта фильма Властелин Колец",
                url: "/tile2/{z}-{x}-{y}.jpg"
            },
            {
                name: "Заповедники Дальнего востока",
                url: "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
            },
            {
                name: "Солнечная система",
                url: "/tile3/{z}-{x}-{y}.jpg"
            },
            {
                name: "Астрономия",
                url: "http://leafletjs.com/examples/crs-simple/uqm_map_full.png"
            }
        ]
    },
    getters: {
        selectedTile: (state, getters, rootState) => {
            return state.tiles.find(tile => tile.id === rootState.map.tile_id);
        }
    },
    actions: {
        createTile({state, commit}, tile) {
            return axios.post('/api/tiles', tile, {headers: {'Content-Type': 'multipart/form-data'}})
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
        SET_TILES: (state, tiles) => { tiles === null ? state.tiles = [] : state.tiles = tiles },
        ADD_TILE: (state, tiles) => { state.tiles.push(tiles) },
        SET_TILE_ATTRIBUTION: (state, attribution) => {
            state.tile.attribution = attribution
        },
        SET_TILE_BOUNDS: (state, bounds) => {
            state.tile.bounds = bounds
        },
    }
}
