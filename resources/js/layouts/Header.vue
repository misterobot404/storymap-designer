<template>

    <v-app-bar app>

        <v-toolbar-title
            style="width: 300px"
            class="ml-4"
        >
            <router-link to="/"
                         style="
                         color: inherit;
                         text-decoration: inherit;"
            >
                MapDesigner
            </router-link>
        </v-toolbar-title>

        <v-progress-linear
            :height=2
            :active="$store.state.routeLoading.isLoading"
            indeterminate
            absolute
            bottom
        />

        <v-btn text to="/library">
            Библиотека
        </v-btn>

        <v-spacer/>
        <v-btn
            text
            class="hidden-sm-and-down"
            @click="$vuetify.theme.dark=!$vuetify.theme.dark"
        >
            Темная тема
        </v-btn>
        <v-spacer/>

        <template v-if="$store.getters['auth/isAuth']">
            <Logout/>
        </template>

        <template v-else>
            <Authorization/>
            <Registration/>
        </template>

    </v-app-bar>

</template>

<script>

    export default {
        name: "Header",
        components: {
            Logout: () => import(/* webpackChunkName: "Logout" */ '../components/Logout'),
            Registration: () => import(/* webpackChunkName: "Registration" */ '../components/Registration'),
            Authorization: () => import(/* webpackChunkName: "Authorization" */ '../components/Authorization'),
        }
    }
</script>

<style scoped lang="sass">

    .app-bar
        width: 90%

</style>
