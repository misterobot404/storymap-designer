import axios from "axios"

export default {
    namespaced: true,
    state: {
        tiles: [
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
            },
        ],
    },
    actions: {
    },
    mutations: {
        ADD_TILE(state, tile) { state.tiles.push(tile) }
    }
}
