<template>
    <v-menu
        :close-on-content-click=false
        offset-y
    >
        <template v-slot:activator="{ on }">
            <v-btn
                v-on="on"
                x-large
                :loading="logoutProcess"
                icon
            >
                <v-icon x-large>account_circle</v-icon>
            </v-btn>
        </template>

        <v-list>
            <v-list-item two-line to="/user">
                <v-list-item-action class="mr-5">
                    <v-icon large>account_circle</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="subtitle-1">{{username}}</v-list-item-title>
                    <v-list-item-subtitle>{{email}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider/>
            <v-list-item to="/library">
                <v-list-item-action>
                    <v-icon>local_library</v-icon>
                </v-list-item-action>
                <v-list-item-title>Библиотека</v-list-item-title>
            </v-list-item>
            <v-list-item to="/settings">
                <v-list-item-action>
                    <v-icon>settings</v-icon>
                </v-list-item-action>
                <v-list-item-title>Настройки</v-list-item-title>
            </v-list-item>
            <v-list-item @click="">
                <v-list-item-action>
                    <v-icon>translate</v-icon>
                </v-list-item-action>
                <v-list-item-title>Язык: Русский</v-list-item-title>
            </v-list-item>
            <v-list-item @click="">
                <v-list-item-action>
                    <v-icon>feedback</v-icon>
                </v-list-item-action>
                <v-list-item-title>Отправить отзыв</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-switch :input-value="this.$vuetify.theme.dark"
                          @change="CHANGE_THEME()"
                          prepend-icon="nights_stay"
                          label="Dark theme"/>
            </v-list-item>
            <v-divider/>
            <v-list-item
                @click="logout"
            >
                <v-list-item-action>
                    <v-icon>exit_to_app</v-icon>
                </v-list-item-action>
                <v-list-item-title>Выйти</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    import store from '@/store'
    import {mapMutations, mapState} from "vuex"

    export default {
        name: "Logout",
        data() {
            return {
                logoutProcess: false
            }
        },
        computed: {
            ...mapState('auth', {
                    username: state => state.user.name,
                    email: state => state.user.email
                }
            )
        },
        methods: {
            ...mapMutations('layout', [
                'CHANGE_THEME',
            ]),
            logout: function () {
                this.logoutProcess = true;

                this.$store.dispatch('auth/logout')
                    .finally(() => {
                        store.commit('auth/LOGOUT', null, {root: true});
                        this.logoutProcess = false;
                    })
            },
        }
    }
</script>
