
export default {
    namespaced: true,

    state: {
        isLoading: false,
    },
    mutations: {
        ENABLE: (state) => {
            state.isLoading = true;
        },
        DISABLE: (state) => {
            state.isLoading = false;
        }
    }
}
