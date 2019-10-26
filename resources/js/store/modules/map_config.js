export default {
    mutations: {
        SET_CONFIG: (state, config) => {
            state.config = config;
        },
        ITERATION_ID: (state) => {
            state.config.nextEventId++;
        },
        SET_SELECTED_EVENT_ID: (state, id) => {
            state.config.selectedEventId = id;
        },
        SET_TILE_CENTER: (state, center) => {
            state.config.tileCenter = center
        },
        SET_TILE_URL: (state, url) => {
            state.config.tileUrl = url
        },
        SET_TILE_ATTRIBUTION: (state, attribution) => {
            state.config.tileAttribution = attribution
        },
    },
    state: {
        config: [],
    },
    getters: {
        config: state => state.config
    }
}