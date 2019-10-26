export default {
    actions: {
        addEvent({getters, commit}) {
            commit('PUSH_EMPTY_EVENT', getters.config.nextEventId, getters.config.mapCenter);
            // Если добавленное событие является единственным назначаем его активным
            if (getters.config.selectedEventId === null) {
                commit('SET_SELECTED_EVENT_ID', getters.config.nextEventId);
            }
            commit('ITERATION_ID');
        },
        eventSelectionAfterDelete({state, getters, commit}, index) {
            var deletedEventIndex = index;
            // Если было удалёно активное событие (активное событие не надено), устанавливаем новое
            if (getters.indexSelectedEvent === -1) {
                // Если после удаления события массив событий пуст новый элемент назначать не нужно, выходим
                if (getters.eventsLength === 0) {
                    getters.config.currentEventId = null;
                    return;
                }
                // Если удаленный элемент являлся последним в массиве, смещаем текущий активный элемент назад
                if (deletedEventIndex === getters.eventsLength) {
                    deletedEventIndex--;
                }
                // Установка нового активного элемента
                commit('SET_SELECTED_EVENT_ID',getters.getEventIdByIndex(deletedEventIndex));
            }
        }
    },
    mutations: {
        SET_EVENTS: (state, events) => {
            state.events = events
        },
        PUSH_EMPTY_EVENT: (state, nextId, center) => {
            state.events.push({
                name: "Empty",
                id: nextId,
                title: ' ',
                markerPosition: center,
                mediaUrl: ""
            });
        },
        DELETE_EVENT_BY_INDEX: (state, index) => {
            state.events.splice(index, 1);
        },
        SET_EVENT_MARKER_POSITION: (state, index, position) => {
            state[index].marker = position
        }
    },
    state: {
        events: [],
        animationProcessForRemovingEvent: false
    },
    getters: {
        events: state => state.events,
        eventsLength: state => state.events.length,
        selectedEvent: function (state, getters) {
            return state.events.find(obj => obj.id === getters.config.selectedEventId);
        },
        // return -1 indicating that no element passed the test
        indexSelectedEvent: function (state, getters) {
            return state.events.findIndex(obj => obj.id === getters.config.selectedEventId);
        },
        getEventIdByIndex: state => index => {
            return state.events[index].id;
        },
        arrayMarker: state => state.events.map(a => a.marker)
    }
}
