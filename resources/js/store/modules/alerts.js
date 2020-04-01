
export default {
    namespaced: true,

    state: {
        errors: []
    },
    mutations: {
        ADD_ERROR: (state, msg) => {
            state.errors.push(msg)
        },
    }
}
