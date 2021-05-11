import axios from "axios"
import router from '@/routes'

export default {
    namespaced: true,

    state: {
        token: window.localStorage.getItem('token'),
        user: JSON.parse(window.localStorage.getItem('user'))
    },
    getters: {
        isAuth: state => state.token
    },
    actions: {
        /**
         * Checking authorization data on the server and receiving a token
         *
         * @param state
         * @param commit
         * @param dispatch
         * @param payload: name + email + password
         */
        login({state, commit, dispatch}, payload) {
            return axios.post('/api/login', payload)
                .then(response => {
                    commit('LOGIN', {token: response.data.data.token, user: response.data.data.user});
                    // get user data
                    dispatch('subjects/getSubjects', null, {root: true});
                    dispatch('tiles/getTiles', null, {root: true});
                })
        },
        /**
         * Disable authorization token to on the server
         *
         * @param commit
         */
        logout({commit}) {
            return axios.post('/api/logout')
                .then(_ => commit('LOGOUT'))
        },
        /**
         * Checking registration data on the server and create user
         *
         * @param payload: name + email + password
         */
        register({}, payload) { return axios.post('/api/register', payload) }
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

            // add token to axios header
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token;
            // saving auth token between sessions
            window.localStorage.setItem('token', state.token);
            window.localStorage.setItem('user', JSON.stringify(state.user));
        },
        /**
         * Remove authentication data from state and localStorage. Remove token from axios header.
         *
         * @param state
         */
        LOGOUT: state => {
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
