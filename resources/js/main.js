import Vue from 'vue'

import vuetify from "@/plugins/vuetify"
import router from '@/routes'
import store from '@/store'

import App from '@/layouts'

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App),
}).$mount('#app');




