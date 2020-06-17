import axios from "axios"

export default {
    namespaced: true,
    state: {
        //// MAP. Data from db.
        id: "",
        name: "",
        subject: "",
        description: "",
        config: {eventListWidth: 227}, // {selectedEventId, eventListWidth}
        tile: {}, // {attribution, bounds, maxZoom, minZoom, url}
        events: [], // [{title, description, id, marker {position, url, height }, mediaUrl}]
        //// OTHER. Computed data.
        // To detect changes to the current map.
        oldMap: null,
        // Current coordinate of the view center
        tileCenter: {},
        // Next event will be created with this id
        nextEventId: 0,
    },
    getters: {
        indexSelectedEvent(state) {
            // return -1 indicating that no element passed the test
            return state.events.findIndex(obj => obj.id === state.config.selectedEventId);
        },
        selectedEvent: function (state) {
            return state.events.find(obj => obj.id === state.config.selectedEventId);
        },
        getEventIdByIndex: state => index => {
            return state.events[index].id;
        },
        arrayMarker: state => state.events.map(a => a.marker.position),
        // Detect changes map
        wasChanges(state) {
            // data not get
            if (!state.oldMap) return false;
            // Remove unused space
            let currentMap = {
                id: state.id,
                name: state.name,
                subject: state.subject,
                description: state.description,
                tile: state.tile,
                events: state.events
            };
            let currentMapJSON = JSON.stringify(currentMap).split(' ').join('');
            let oldMapJSON = JSON.stringify(state.oldMap).split(' ').join('');
            return oldMapJSON !== currentMapJSON
        }
    },
    actions: {
        getMap({state, dispatch, commit}, mapId) {
            // Clear previous map
            commit('CLEAR_STATE');
            // Send request
            return axios.get('/api/maps/' + mapId)
                .then(response => {
                    commit('SET_MAP', response.data.data.map);
                    commit('SET_OLD_MAP', response.data.data.map);
                    commit('SET_NEXT_EVENT_ID');
                })
        },
        setEmptyExampleMap({state, commit, rootState}) {
            let map = rootState.maps.editableExample;
            commit('SET_MAP', map);
            commit('SET_OLD_MAP', map);
            commit('SET_NEXT_EVENT_ID');
        },
        setExampleMap({state, commit, rootState}, mapId) {
            let map = rootState.maps.examples[mapId - 1];
            commit('SET_MAP', map);
            commit('SET_OLD_MAP', map);
            commit('SET_NEXT_EVENT_ID');
        },
        saveMap({state, commit}) {
            // Save current width event list
            commit('SET_EVENT_LIST_WIDTH');
            // Send request
            let map = {
                name: state.name,
                subject: state.subject,
                description: state.description,
                config: JSON.stringify(state.config),
                tile: JSON.stringify(state.tile),
                events: JSON.stringify(state.events)
            };
            return axios.put('/api/maps/' + state.id, map)
                .then(response => {
                    commit('SET_OLD_MAP', response.data.data.map);
                })
        },
        recoveryMap({state, commit}) {
            // Recovery state
            commit('RECOVERY_MAP');
            // Computed some state
            commit('SET_NEXT_EVENT_ID');
        },
        //// Events
        addEvent({state, commit}) {
            commit('PUSH_EMPTY_EVENT');
            // Если добавленное событие является единственным назначаем его активным
            if (state.config.selectedEventId === null) {
                commit('SET_SELECTED_EVENT_ID', state.nextEventId);
            }
            commit('ITERATION_ID');
        },
        deleteEventByIndex({state, getters, commit}, index) {
            // Удалаяем событие
            commit('DELETE_EVENT_BY_INDEX', index);
            // Если было удалёно активное событие (активное событие не надено), устанавливаем новое
            let deletedEventIndex = index;
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
            state.id = map.id;
            state.name = map.name;
            state.subject = map.subject;
            state.description = map.description;
            state.config = JSON.parse(map.config);
            state.tile = JSON.parse(map.tile);
            state.events = JSON.parse(map.events);
        },
        SET_OLD_MAP: (state, map) => {
            // config is not compared
            state.oldMap = {
                id: map.id,
                name: map.name,
                subject: map.subject,
                description: map.description,
                tile: JSON.parse(map.tile),
                events: JSON.parse(map.events)
            };
        },
        // Очистка предыдущего состояния перед загрузкой новой карты
        CLEAR_STATE: (state) => {
            state.id = "";
            state.name = "";
            state.subject = "";
            state.description = "";
            state.config = {eventListWidth: 227};
            state.tile = {};
            state.events = [];
            state.oldMap = null;
        },
        RECOVERY_MAP: (state) => {
            // Recovery state
            state.name = state.oldMap.name;
            state.subject = state.oldMap.subject;
            state.description = state.oldMap.description;
            // Copy object. Not reference
            Object.assign(state.tile, state.oldMap.tile);
            // Copy array of object. Not references.
            state.events = state.oldMap.events.map(a => Object.assign({}, a));
        },
        SET_NEXT_EVENT_ID: (state) => {
            let maxId = 1;
            state.events.forEach(element => {
                if (element.id > maxId) maxId = element.id;
            });
            state.nextEventId = maxId + 1;
        },
        //// Events
        SET_EVENTS: (state, events) => {
            state.events = events
        },
        PUSH_EMPTY_EVENT: (state) => {
            state.events.push({
                id: state.nextEventId,
                title: "Событие " + (state.events.length + 1),
                description: "",
                mediaUrl: "",
                marker: {
                    position: state.tileCenter,
                    url: "https://image.flaticon.com/icons/svg/148/148828.svg",
                    size: [32, 38]
                },
            });
        },
        DELETE_EVENT_BY_INDEX: (state, index) => {
            state.events.splice(index, 1);
        },
        SET_EVENT_MARKER_POSITION: (state, payload) => {
            state.events[payload.index].marker.position = payload.position
        },
        SET_EVENT_TITLE: (state, payload) => {
            state.events[payload.index].title = payload.title
        },
        SET_EVENT_DESCRIPTION: (state, payload) => {
            state.events[payload.index].description = payload.description
        },
        SET_EVENT_MEDIA_URL: (state, payload) => {
            state.events[payload.index].mediaUrl = payload.mediaUrl
        },
        SET_EVENT_ICON_URL: (state, payload) => {
            state.events[payload.id].marker.url = payload.iconUrl;
            state.events[payload.id].marker.size = payload.size;
        },
        //// Config
        ITERATION_ID: (state) => {
            state.nextEventId++;
        },
        SET_SELECTED_EVENT_ID: (state, id) => {
            state.config.selectedEventId = id;
        },
        SET_EVENT_LIST_WIDTH: state => {
            state.config.eventListWidth = document.getElementById('eventList').offsetWidth;
        },
        //// Tile
        SET_TILE_CENTER: (state, center) => {
            state.tileCenter = center
        },
        SET_TILE_URL: (state, url) => {
            state.tile.url = url
        },
        SET_TILE_ATTRIBUTION: (state, attribution) => {
            state.tile.attribution = attribution
        },
        SET_TILE_BOUNDS: (state, bounds) => {
            state.tile.bounds = bounds
        },
        SET_MIN_TILE_ZOOM: (state, zoom) => {
            state.tile.minZoom = zoom
        },
        SET_MAX_TILE_ZOOM: (state, zoom) => {
            state.tile.maxZoom = zoom
        }
    }
}
