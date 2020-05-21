import axios from "axios"

export default {
    namespaced: true,

    state: {
        maps: [],
        subjects: [
            {
                name: "Информатика",
                icon: require('@/assets/images/subjects/computer_science.png')
            },
            {
                name: "Биология",
                icon: require('@/assets/images/subjects/biology.png')
            },
            {
                name: "География",
                icon: require('@/assets/images/subjects/geography.png')
            },
            {
                name: "История",
                icon: require('@/assets/images/subjects/history.png')
            },
            {
                name: "Другое",
                icon: require('@/assets/images/subjects/custom.png')
            }
        ]
    },
    actions: {
        getMaps: function ({commit}) {
            return axios.get('/api/maps')
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                })
        },
        createMap: function ({commit}, data) {
            return axios.post('/api/maps',
                {
                    name: data.name,
                    subject: data.subject,
                    description: data.description
                })
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                })
        },
        duplicateMap: function ({commit}, data) {
            return axios.post('/api/maps/duplicate', { id: data.id })
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                })
        },
        destroyMap: function ({commit}, data) {
            return axios.delete('/api/maps/' + data.id)
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                })
        },
        destroyMaps: function ({commit}, data) {
            let ids = [];
            data.forEach(element => ids.push(element.id));

            return axios.delete('/api/maps/' + ids)
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                })
        },
    },
    mutations: {
        SET_MAPS: (state, maps) => {
            state.maps = maps;
        }
    }
}
