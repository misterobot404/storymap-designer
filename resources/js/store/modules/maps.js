export default {
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
    },
    state: {
        maps: [],
        mapsOther: [{name: "Чужая карта 1", description: "Описание", other: true},{name: "Чужая карта 2", description: "Описание", other: true}],
    },
    getters: {
        maps: state => state.maps,
        mapsOther: state => state.mapsOther,
        mapCount: state => state.maps.length + state.maps.mapsOther
    }
}
