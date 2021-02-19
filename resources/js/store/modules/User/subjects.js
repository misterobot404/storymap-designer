import axios from "axios"

export default {
    namespaced: true,
    state: {
        subjects: []
    },
    actions: {
        getSubjects({commit}) {
            return axios.get('/api/users/subjects')
                .then(response => { commit('SET_SUBJECTS', response.data.data.subjects) })
        },
        createSubject({state, commit}, subject) {
            commit('ADD_SUBJECT', subject);
            return axios.post('/api/users/subjects', {subjects: state.subjects})
                .then(response => { commit('SET_SUBJECTS', response.data.data.subjects) })
        },
        deleteSubject({commit}, index) {
            return axios.delete('/api/users/subjects/' + index)
                .then(response => { commit('SET_SUBJECTS', response.data.data.subjects) })
        },
    },
    mutations: {
        SET_SUBJECTS: (state, subjects) => { subjects === null ? state.subjects = [] : state.subjects = subjects },
        ADD_SUBJECT: (state, subjects) => { state.subjects.push(subjects) },
    }
}
