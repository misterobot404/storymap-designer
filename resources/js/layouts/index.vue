<template>
    <v-app>
        <NavigationDrawer/>
        <v-expand-transition>
            <AppBar v-if="!hideHeaderAndFooter"/>
        </v-expand-transition>
        <Content/>
        <Footer v-if="!hideHeaderAndFooter"/>

        <AuthDialog v-if="authDialog"/>

        <v-fade-transition>
            <Feedback v-if="feedbackDialog"/>
        </v-fade-transition>


        <v-snackbar
            v-model="m_showMsg"
            color="primary"
            text
            rounded
            timeout="2000"
        >
            {{textMsg}}
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
import AppBar from "./AppBar"
import Content from "./Content"
import NavigationDrawer from "./NavigationDrawer"
import Footer from "./Footer"

import {mapState, mapMutations} from "vuex"

import Feedback from "../components/Feedback"
import AuthDialog from "../components/Auth"

export default {
    name: 'AppLayout',
    components: {
        AuthDialog,
        Feedback,
        AppBar,
        Content,
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
        ...mapMutations('layout',['SHOW_MSG_DIALOG'])
    }
}
</script>

<!-- GLOBAL SCC STYLE -->
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
