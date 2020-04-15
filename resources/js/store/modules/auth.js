import axios from "axios";
import router from '@/routes'

export default {
    namespaced: true,

    state: {
        token: window.localStorage.getItem('token'),
        user: window.localStorage.getItem('user')
    },
    getters: {
        isAuth: state => {
            if (state.token && state.user) {
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
         * @param payload: name + email + password
         */
        login: function ({state, commit}, payload) {
            return axios.post('/api/login', payload)
        },

        /**
         * Disable authorization token to on the server
         *
         * @param commit
         */
        logout: function ({commit}) {
            return axios.post('/api/logout')
        },

        /**
         * Checking registration data on the server and create user
         *
         * @param payload: name + email + password
         */
        register: function ({}, payload) {
            return axios.post('/api/register', payload)
        }
    },
    mutations: {

        /**
         * Set authentication data
         *
         * @param state
         * @param payload: token + user
         */
        LOGIN: (state, payload) => {

            state.token = payload.token;
            state.user = payload.user;

            // saving auth token between sessions
            window.localStorage.setItem('token', state.token);
            window.localStorage.setItem('user', JSON.stringify(state.user));
        },
        /**
         * Remove authentication data from state and localStorage. Remove token from axios header.
         *
         * @param state
         */
        LOGOUT: (state) => {

            state.token = null;
            state.user = null;

            window.localStorage.removeItem('token');
            window.localStorage.removeItem('user');

            // remove token to axios header
            delete axios.defaults.headers.common['Authorization'];

            // if the user was on page with auth middleware
            if (router.currentRoute.meta.middlewareAuth) router.push('/');
        }
    }
}
