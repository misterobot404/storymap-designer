import Vuetify from '@/plugins/vuetify'

export default {
    namespaced: true,

    state: {
        // global name application
        appName: "MapDesigner",
        // global app logo
        appLogo: require('@/assets/logo.png').default,
        // show / hide navigation-drawer
        drawer: false,
        // show / hide progress line
        pageLoading: false,
        // show feedback dialog
        feedbackDialog: false,
        // show auth dialog
        authDialog: false,
        // show msg
        showMsg: false,
        textMsg: ""
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
        },

        SHOW_FEEDBACK_DIALOG(state) {
            state.feedbackDialog = true;
        },
        HIDE_FEEDBACK_DIALOG(state) {
            state.feedbackDialog = false;
        },

        SHOW_AUTH_DIALOG(state) {
            state.authDialog = true;
        },
        HIDE_AUTH_DIALOG(state) {
            state.authDialog = false;
        },

        SHOW_MSG_DIALOG(state, payload) {
            state.textMsg = payload.text ? payload.text : "";
            state.showMsg = payload.show;
        }
    }
}

