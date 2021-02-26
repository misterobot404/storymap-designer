import axios from "axios"

export default {
    namespaced: true,
    state: {
        subjects: []
    },
    actions: {
        createSubject({state, commit}, subject) {
            return axios.post('/api/subjects', subject, { headers: {'Content-Type': 'multipart/form-data'}})
                .then(response => { commit('SET_SUBJECTS', response.data.data.subjects) })
        },
        getSubjects({commit}) {
            return axios.get('/api/subjects')
                .then(response => { commit('SET_SUBJECTS', response.data.data.subjects) })
        },
        updateSubject({state, commit}, payload) {
            return axios.post('/api/subjects/' + payload.id, payload.data, { headers: {'Content-Type': 'multipart/form-data'}})
                .then(response => { commit('SET_SUBJECTS', response.data.data.subjects) })
        },
        deleteSubject({commit}, id) {
            return axios.delete('/api/subjects/' + id)
                .then(response => { commit('SET_SUBJECTS', response.data.data.subjects) })
        },
    },
    mutations: {
        SET_SUBJECTS: (state, subjects) => { subjects === null ? state.subjects = [] : state.subjects = subjects },
        ADD_SUBJECT: (state, subjects) => { state.subjects.push(subjects) },
    }
}
