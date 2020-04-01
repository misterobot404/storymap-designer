<template>
    <v-app>

        <Header/>

        <v-content>
            <v-container fill-height>

                <v-row
                    class="mx-auto"
                    align="center"
                    justify="center">
                        <router-view/>
                </v-row>

            </v-container>
        </v-content>

        <Footer/>

    </v-app>
</template>

<script>
    import Header from './Header'
    import Footer from './Footer'

    export default {
        name: 'AppLayout',
        components: {
            Header,
            Footer
        }
    }
</script>
