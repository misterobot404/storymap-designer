<template>
    <v-app>
        <NavigationDrawer/>
        <AppBar/>
        <Content/>
        <template v-if="$route.name !== 'constructor'">
            <Footer/>
        </template>
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

<style lang="sass">

    .link-text-simple
        color: inherit !important
        text-decoration: inherit !important

        .v-card--reveal
            align-items: center
            bottom: 0
            justify-content: center
            opacity: .5
            position: absolute
            width: 100%

</style>
