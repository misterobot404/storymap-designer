import axios from "axios"

export default {
    namespaced: true,
    state: {
        map: {},
        //// MAP CONFIG
        config: {
            "selectedEventId": 1,
            "nextEventId": 2,
            "tileCenter": {
                "lat": -85,
                "lng": -170
            },
            "tileUrl": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
            "tileAttribution": "&copy; <a href=\"https://knastu.ru/\">knastu</a>",
            "minTileZoom": 3,
            "maxTileZoom": 4,
            "tileBounds": {"_southWest": {"lat": 47, "lng": -180}, "_northEast": {"lat": 85, "lng": 45}}
        },
        //// MAP EVENTS
        events: [],
        animationProcessForRemovingEvent: false
    },
    getters: {
        //// MAP CONFIG
        config: state => state.config,
        // return -1 indicating that no element passed the test
        indexSelectedEvent: function (state, getters) {
            return getters.events.findIndex(obj => obj.id === state.config.selectedEventId);
        },
        //// MAP EVENTS
        events: state => state.events,
        selectedEvent: function (state, getters) {
            return state.events.find(obj => obj.id === getters.config.selectedEventId);
        },
        getEventIdByIndex: state => index => {
            return state.events[index].id;
        },
        arrayMarker: state => state.events.map(a => a.markerPosition)
    },
    actions: {
        getMap: function ({commit}, mapId) {
            return axios.get('/api/maps/' + mapId)
                .then(response => {
                    commit('SET_MAP', response.data.data.map);
                })
        },
        //// MAP EVENTS
        addEvent({getters, commit}) {
            const payload = {'nextEventId': getters.config.nextEventId, 'tileCenter': getters.config.tileCenter};
            commit('PUSH_EMPTY_EVENT', payload);
            // Если добавленное событие является единственным назначаем его активным
            if (getters.config.selectedEventId === null) {
                commit('SET_SELECTED_EVENT_ID', getters.config.nextEventId);
            }
            commit('ITERATION_ID');
        },
        eventSelectionAfterDelete({state, getters, commit}, index) {
            let deletedEventIndex = index;
            // Если было удалёно активное событие (активное событие не надено), устанавливаем новое
            if (getters.indexSelectedEvent === -1) {
                // Если после удаления события массив событий пуст новый элемент назначать не нужно, выходим
                if (state.events.length === 0) {
                    commit('SET_SELECTED_EVENT_ID', null);
                    return;
                }
                // Если удаленный элемент являлся последним в массиве, смещаем текущий активный элемент назад
                if (state.events.length === deletedEventIndex) {
                    deletedEventIndex--;
                }
                // Установка нового активного элемента
                commit('SET_SELECTED_EVENT_ID', getters.getEventIdByIndex(deletedEventIndex));
            }
        }
    },
    mutations: {
        SET_MAP: (state, map) => {
            state.map = map;
            state.map.tile = JSON.parse(map.tile);
        },
        //// MAP CONFIG
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
        SET_TILE_BOUNDS: (state, bounds) => {
            state.config.tileBounds = bounds
        },
        SET_MIN_TILE_ZOOM: (state, zoom) => {
            state.config.minTileZoom = zoom
        },
        SET_MAX_TILE_ZOOM: (state, zoom) => {
            state.config.maxTileZoom = zoom
        },
        //// MAP EVENTS
        SET_EVENTS: (state, events) => {
            state.events = events
        },
        PUSH_EMPTY_EVENT: (state, payload) => {
            state.events.push({
                id: payload.nextEventId,
                markerPosition: payload.tileCenter,
                title: "Empty",
                description: ' ',
                mediaUrl: ""
            });
        },
        DELETE_EVENT_BY_INDEX: (state, index) => {
            state.events.splice(index, 1);
        },
        SET_EVENT_MARKER_POSITION: (state, payload) => {
            state.events[payload.index].markerPosition = payload.position
        },
        SET_EVENT_TITLE: (state, payload) => {
            state.events[payload.index].title = payload.title
        },
        SET_EVENT_DESCRIPTION: (state, payload) => {
            state.events[payload.index].description = payload.description
        },
        SET_EVENT_MEDIA_URL: (state, payload) => {
            state.events[payload.index].mediaUrl = payload.mediaUrl
        }
    }
}
