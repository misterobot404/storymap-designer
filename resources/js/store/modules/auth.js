import axios from "axios";

export default {
    namespaced: true,

    state: {
        token: window.localStorage.getItem('token'),
        user: window.localStorage.getItem('user')
    },
    getters: {
        isAuth: state => {
            if (state.token !== null && state.user !== null) {

                // saving auth data between sessions
                window.localStorage.setItem('token', state.token);
                window.localStorage.setItem('user', JSON.stringify(state.user));
                // add token to axios header
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token;

                return true;
            } else return false;
        }
    },
    actions: {

        /**
         * Checking authorization data on the server and receiving a token
         *
         * @param state
         * @param commit
         * @param payload: username + password
         */
        login: function ({state, commit}, payload) {

            // commit('loading/ENABLE', null, {root: true});
            //
            // let config = {
            //     onUploadProgress: progressEvent => {
            //
            //         let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
            //         commit('loading/SET_PROGRESS', percentCompleted, {root: true});
            //     }
            // };

            axios.post('/api/login', payload)
                .then(({data}) => {
                    commit('SET_TOKEN', data.token);
                    commit('SET_USER', data.user);
                })
                .catch(({response}) => {
                    //commit('alerts/ADD_ERROR', response.data.message, {root: true});
                })
                .finally(() => {
                    // commit('loading/DISABLE', null, {root: true});
                    // commit('loading/SET_PROGRESS', 0, {root: true});
                });
        },

        /**
         * Disable authorization token to on the server
         *
         * @param commit
         */
        logout: function ({commit}) {

            axios.post('/api/logout')
                .then(() => {
                    commit('SET_TOKEN', null);
                    commit('SET_USER', null);

                    window.localStorage.removeItem('token');
                    window.localStorage.removeItem('user');

                    // remove token to axios header
                    delete axios.defaults.headers.common['Authorization'];
                })
        },

        /**
         * Checking registration data on the server and create user
         *
         * @param payload: username + password
         */
        register: function ({}, payload) {
            axios.post('/api/register', payload).then()
        },

        /**
         * Checking name for repetition
         *
         * @param payload: name
         */
        checkRegistrationName: function ({}, payload) {
            return axios.post('/api/checkRegistrationName', payload);
        },
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_USER: (state, user) => {
            state.user = user;
        }
    }
}
