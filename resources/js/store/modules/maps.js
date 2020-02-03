export default {
    mutations: {
        SET_MAPS: (state, maps) => {
            state.maps = maps;
        },
        SET_MAP_COUNT: (state, mapCount) => {
            state.mapCount = mapCount;
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
    },
    state: {
        maps: [],
        mapCount: 0
    },
    getters: {
        maps: state => state.maps,
        mapCount: state => state.mapCount
    }
}
