<template>
    <v-navigation-drawer
        v-model="drawerModel"
        app
        temporary
    >
        <!-- Site logo + site name -->
        <v-list-item>
            <!-- Logo -->
            <v-list-item-action class="mr-4">
                <router-link to="/">
                    <v-img
                        :src=appLogo
                        contain
                        height="48"
                        width="48"
                    />
                </router-link>
            </v-list-item-action>
            <!-- Name -->
            <v-list-item-content>
                <router-link to="/" class="link-text-simple">
                    <v-list-item-title class="title">{{appName}}</v-list-item-title>
                </router-link>
            </v-list-item-content>
        </v-list-item>
        <!-- separation -->
        <v-divider/>
        <!-- Library -->
        <template v-if="$store.getters['auth/isAuth']">
            <v-list-item
                to="/library"
                link
            >
                <v-list-item-action>
                    <v-icon>local_library</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Моя библиотека
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </template>
        <!-- Other links -->
        <template v-for="link in navigationLinks">
            <v-list-item
                :key="link.text"
                :to="link.to"
                link
            >
                <v-list-item-action>
                    <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        {{ link.text }}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </template>
        <!-- separation -->
        <v-divider/>
        <!-- Color theme toggle -->
        <v-list-item>
            <v-switch :input-value="this.$vuetify.theme.dark"
                      prepend-icon="nights_stay"
                      @change="setTheme"
                      label="Dark theme"/>
        </v-list-item>
        <!-- Copyright -->
        <template v-slot:append>
            <v-footer>
                <v-col
                    class="text-center"
                    cols="12">
                    © LiSa Inc. {{ new Date().getFullYear() }}
                </v-col>
            </v-footer>
        </template>
    </v-navigation-drawer>
</template>

<script>
    import {mapMutations, mapState} from 'vuex'

    export default {
        name: "NavigationDrawer",
        computed: {
            ...mapState('layout', {
                appName: state => state.appName,
                appLogo: state => state.appLogo,
                drawer: state => state.drawer,
                navigationLinks: state => state.navigationLinks
            }),
            drawerModel: {
                get() {
                    return this.drawer
                },
                set(val) {
                    this.SET_DRAWER(val)
                }
            }
        },
        methods: {
            ...mapMutations('layout', ['SET_DRAWER']),
            setTheme() {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
                // Save theme
                window.localStorage.setItem('darkTheme', this.$vuetify.theme.dark);
            }
        }
    }
</script>

