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

        <v-btn
            text
            to="/library"
        >
            Библиотека
        </v-btn>
        <v-btn
            text
            to="/constructor"
        >
            Конструктор
        </v-btn>

        <v-btn
            text
            to="/viewer"
        >
            Вьюер
        </v-btn>

        <v-spacer/>

        <v-btn
            text
            class="hidden-sm-and-down"
            @click="$vuetify.theme.dark=!$vuetify.theme.dark"
        >
            Темная тема
        </v-btn>

        <template v-if="$store.getters['auth/isAuth']">
            <v-btn
                text
                @click="$store.dispatch('auth/logout')"
            >
                Выйти
            </v-btn>
        </template>

        <template v-else>
            <Authorization/>
            <Registration/>
        </template>

        <v-btn icon>
            <v-icon>apps</v-icon>
        </v-btn>
        <v-btn
            icon
            large
        >
            <v-avatar
                size="32px"
                item
            >
                <v-img
                    src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                    alt="Vuetify"
                />
            </v-avatar>
        </v-btn>
    </v-app-bar>

</template>

<script>

    export default {
        name: "Header",
        components: {
            Registration: () => import(/* webpackChunkName: "registration" */ '../components/Registration'),
            Authorization: () => import(/* webpackChunkName: "authorization" */ '../components/Authorization'),
        }
    }
</script>

<style scoped lang="sass">

    .app-bar
        width: 90%

</style>
