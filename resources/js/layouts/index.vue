<template>
    <v-app>
        <NavigationDrawer/>
        <v-expand-transition>
            <AppBar v-if="hide"/>
        </v-expand-transition>
        <Content/>
        <Footer v-if="hide"/>

        <AuthDialog v-if="authDialog"/>

        <v-fade-transition>
            <Feedback v-if="feedbackDialog"/>
        </v-fade-transition>
    </v-app>
</template>

<script>
import AppBar from "./AppBar"
import Content from "./Content"
import NavigationDrawer from "./NavigationDrawer"
import Footer from "./Footer"

import {mapState} from "vuex"

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
            'authDialog'
        ]),
        // hide appbar and footer
        hide() { return this.$route.name !== 'constructor' && this.$route.name !== 'viewer' && this.$route.name !== 'example' }
    },
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
