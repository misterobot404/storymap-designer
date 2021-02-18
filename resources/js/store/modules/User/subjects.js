import axios from "axios"

export default {
    namespaced: true,
    state: {
        subjects: []
    },
    actions: {
        getSubjects({commit}) {
            return axios.get('/api/users/subjects')
                .then(response => {
                    commit('SET_SUBJECTS', JSON.parse(response.data.data.subjects));
                })
        },
        createSubject({state, commit}, subject) {
            commit('ADD_SUBJECT', subject);
            return axios.post('/api/users/subjects', {subjects: JSON.stringify(state.subjects)})
                .then(response => { commit('SET_SUBJECTS', JSON.parse(response.data.data.subjects)) })
        },
        deleteSubject({commit}, name) {
            return axios.delete('/api/users/subjects/' + name)
                .then(response => {
                    commit('SET_SUBJECTS', JSON.parse(response.data.data.subjects));
                })
        },
    },
    mutations: {
        SET_SUBJECTS: (state, subjects) => { subjects === null ? state.subjects = [] : state.subjects = subjects },
        ADD_SUBJECT: (state, subjects) => { state.subjects.push(subjects) },
    }
}
