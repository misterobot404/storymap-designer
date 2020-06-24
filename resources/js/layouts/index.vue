<template>
    <v-app>
        <NavigationDrawer/>
        <v-expand-transition>
            <AppBar v-if="hideEl"/>
        </v-expand-transition>
        <Content/>
        <Footer v-if="hideEl"/>
    </v-app>
</template>

<script>
    import AppBar from "./AppBar"
    import Content from "./Content"
    import NavigationDrawer from "./NavigationDrawer"
    import Footer from "./Footer"
    import {mapGetters, mapActions} from "vuex"

    export default {
        name: 'AppLayout',
        components: {
            AppBar,
            Content,
            NavigationDrawer,
            Footer
        },
        computed: {
            ...mapGetters('auth', {
                isAuth: "isAuth"
            }),
            hideEl() {
                return this.$route.name !== 'constructor' && this.$route.name !== 'constructor-example' && this.$route.name !== 'viewer' && this.$route.name !== 'viewer-example'
            }
        },
        methods: {
            ...mapActions('maps', [
                'getExternalSubjects'
            ]),
        },
        watch: {
            isAuth: {
                immediate: true,
                handler(val) {
                    if (val) {
                        this.getExternalSubjects()
                    }
                }
            }
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
