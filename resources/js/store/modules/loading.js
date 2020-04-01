
export default {
    namespaced: true,

    state: {
        isLoading: false,
        progress: 0
    },
    mutations: {
        DISABLE: (state) => {
            state.isLoading = false;
        },
        ENABLE: (state) => {
            state.isLoading = true;
        },
        SET_PROGRESS: (state, progress) => {
            state.progress = progress;
        },
    }

}
