<template>
    <v-app>
        <NavigationDrawer/>
        <v-expand-transition>
            <AppBar v-if="!hideHeaderAndFooter"/>
        </v-expand-transition>
        <v-main id="main" style="min-width: 320px !important;">
            <!-- exclude - remove component from cached -->
            <!-- $store.state.auth.token ? null : 'Library' - сбрасывать кеш компонента Library, если пользователь разлогинился -->
            <keep-alive :exclude="[$store.state.auth.token ? null : 'Library', 'Viewer', 'Constructor']">
                <!-- cached by key -->
                <router-view/>
            </keep-alive>
        </v-main>
        <Footer v-if="!hideHeaderAndFooter"/>

        <AuthDialog v-if="authDialog"/>
        <v-fade-transition>
            <Feedback v-if="feedbackDialog"/>
        </v-fade-transition>

        <!-- Notification -->
        <v-snackbar
            v-model="m_showMsg"
            color="primary"
            text
            rounded
            timeout="2000"
        >
            {{ textMsg }}
        </v-snackbar>

        <!-- Отображение загрузочного экрана при загрузке из фрейма   -->
        <v-overlay
            :value="urlContainsIframeQuery && pageLoading"
            light
            opacity="0.8"
        >
            <v-progress-circular
                indeterminate
                size="144"
            >
                <v-img
                    :src=appLogo
                    :alt=appName
                    contain
                    height="48"
                    width="48"/>
            </v-progress-circular>
        </v-overlay>
    </v-app>
</template>

<script>
import AppBar from "./components/AppBar"
import NavigationDrawer from "./components/NavigationDrawer"
import Footer from "./components/Footer"
import Feedback from "./components/Feedback"
import AuthDialog from "./components/Auth"

import {mapState, mapMutations} from "vuex"

export default {
    name: "App",
    components: {
        AuthDialog,
        Feedback,
        AppBar,
        NavigationDrawer,
        Footer
    },
    computed: {
        ...mapState('layout', [
            "feedbackDialog",
            'authDialog',
            'pageLoading',
            'appName',
            'appLogo',
            'showMsg',
            'textMsg'
        ]),
        m_showMsg: {
            get() {
                return this.showMsg
            },
            set(value) {
                this.SHOW_MSG_DIALOG({show: value})
            }
        },
        hideHeaderAndFooter() {
            return this.$route.name === 'constructor' || this.$route.name === 'viewer' || this.$route.name === 'example' || this.$route.name === 'page410' || this.urlContainsIframeQuery
        },
        urlContainsIframeQuery() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('iframe') === 'true';
        }
    },
    methods: {
        ...mapMutations('layout', ['SHOW_MSG_DIALOG'])
    }
}
</script>

<!-- GLOBAL STYLES -->
<style lang="sass">
.v-card--reveal
    align-items: center
    bottom: 0
    justify-content: center
    opacity: .5
    position: absolute
    width: 100%

.link-text-simple
    color: inherit !important
    text-decoration: inherit !important
</style>
