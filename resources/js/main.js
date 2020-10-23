import Vue from 'vue'
import router from '@/routes'
import store from '@/store'
import vuetify from "@/plugins/vuetify"
import "@/plugins/axios"
import vClickOutside from 'v-click-outside'
import {TiptapVuetifyPlugin} from 'tiptap-vuetify'
import 'tiptap-vuetify/dist/main.css'
import AppLayout from '@/layouts'

Vue.use(vClickOutside)
Vue.use(TiptapVuetifyPlugin, {
    vuetify,
    iconsGroup: 'md'
})

new Vue({
    vuetify,
    store,
    router,
    render: h => h(AppLayout),
    mounted() {
        if (window.localStorage.getItem("darkTheme") === "true") this.$vuetify.theme.dark = true
    }
}).$mount('#app');
