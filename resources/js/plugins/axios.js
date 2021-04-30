import axios from "axios"
import store from '../store'
import router from "../routes";


axios.interceptors.response.use(
    response => response,
    error => {
        // Ресурс не найден
        if (error.response.status === 404) router.push({name: "page404"}).then()
        // Ресурс больше не доступен
        if (error.response.status === 410) router.push({name: "page410"}).then()
        // Обращение к защищенному ресурсу без прав
        else if (error.response.status === 401 || error.response.status === 403) {
            store.commit("auth/LOGOUT", null, {root: true});
            store.commit("layout/SHOW_AUTH_DIALOG", null, {root: true});
        } else return Promise.reject(error);
    });

// check auth
let authToken = window.localStorage.getItem('token');
if (authToken) {
    // add token to axios header
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken;
    // get user data
    store.dispatch('subjects/getSubjects', null, {root: true}).then();
    store.dispatch('tiles/getTiles', null, {root: true}).then();
    store.dispatch('maps/getMaps', null, {root: true}).then();
}
