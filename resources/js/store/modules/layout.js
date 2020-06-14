import Vuetify from '@/plugins/vuetify'

export default {
    namespaced: true,

    state: {
        // global name application
        appName: "MapDesigner",
        // global app logo
        appLogo: require('@/assets/logo.png'),
        // links for navigation-drawer and app-bar
        navigationLinks: [
            {
                text: "Возможности",
                to: "/features",
                icon: "create"
            },
            {
                text: "Планы подписки",
                to: "/upgrade",
                icon: "local_activity"
            },
            {
                text: "Помощь",
                to: "/support",
                icon: "help"
            }
        ],
        // show / hide navigation-drawer
        drawer: false,
        // show / hide progress line
        pageLoading: false,
    },
    mutations: {
        ENABLE_PAGE_LOADING(state) {
            state.pageLoading = true;
        },
        DISABLE_PAGE_LOADING(state) {
            state.pageLoading = false;
        },

        CHANGE_THEME() {
            Vuetify.framework.theme.dark = !Vuetify.framework.theme.dark;
            // Save theme
            window.localStorage.setItem('darkTheme', Vuetify.framework.theme.dark);
        },
        SET_DRAWER(state, payload) {
            state.drawer = payload
        }
    }
}

