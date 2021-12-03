import Vue from 'vue'

import App from "./App"
import router from './routes'
import store from './store'

import vuetify from "./plugins/vuetify"
import "./plugins/axios"

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app');
