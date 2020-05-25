<template>
    <v-app>
        <NavigationDrawer/>
        <v-expand-transition>
            <AppBar v-if="$route.name !== 'constructor'"/>
        </v-expand-transition>
        <Content/>
        <Footer v-if="$route.name !== 'constructor'"/>
    </v-app>
</template>

<script>
    import AppBar from "./AppBar"
    import Content from "./Content"
    import NavigationDrawer from "./NavigationDrawer"
    import Footer from "./Footer"

    export default {
        name: 'AppLayout',
        components: {
            AppBar,
            Content,
            NavigationDrawer,
            Footer
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
