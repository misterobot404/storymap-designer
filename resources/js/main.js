import Vue from 'vue'

import AppLayout from './layouts'
import router from './routes'
import store from './store'

import vuetify from "./plugins/vuetify"
import "./plugins/axios"

new Vue({
    vuetify,
    store,
    router,
    render: h => h(AppLayout)
}).$mount('#app');
