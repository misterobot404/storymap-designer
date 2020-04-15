import Vue from 'vue'

import router from '@/routes'
import store from '@/store'

// plugins
import vuetify from "@/plugins/vuetify"
import "@/plugins/axios"

import AppLayout from '@/layouts'

new Vue({
    vuetify,
    store,
    router,
    render: h => h(AppLayout)
}).$mount('#app');




