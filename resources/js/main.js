import Vue from 'vue'

import router from '@/routes'
import store from '@/store'

// import plugins
import vuetify from "@/plugins/vuetify"
import "@/plugins/axios"
// import html editor
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
import 'tiptap-vuetify/dist/main.css'
Vue.use(TiptapVuetifyPlugin, {
    vuetify,
    iconsGroup: 'md'
})
// import v-click-outside
import vClickOutside from 'v-click-outside'
Vue.use(vClickOutside)

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




