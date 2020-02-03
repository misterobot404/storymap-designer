export default {
    actions: {
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
    },
    state: {
        events: [],
        animationProcessForRemovingEvent: false
    },
    getters: {
        events: state => state.events,
        selectedEvent: function (state, getters) {
            return state.events.find(obj => obj.id === getters.config.selectedEventId);
        },
        getEventIdByIndex: state => index => {
            return state.events[index].id;
        },
        arrayMarker: state => state.events.map(a => a.markerPosition)
    }
}
