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
    render: h => h(AppLayout),
    mounted() {
        // Load theme
        if (window.localStorage.getItem("darkTheme") === "true") this.$vuetify.theme.dark = true
    }
}).$mount('#app');




