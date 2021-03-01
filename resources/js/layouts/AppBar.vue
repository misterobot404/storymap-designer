<template>
    <v-app-bar
        app
        style="min-width: 320px !important;"
    >
        <v-container>
            <v-row align="center">
                <!-- Page loading process -->
                <v-progress-linear
                    color="blue darken-3"
                    top
                    :active="pageLoading"
                    indeterminate
                    absolute
                />
                <!-- NavigationDrawer toggle -->
                <v-app-bar-nav-icon
                    :class="['mr-2', isAuth ? 'hidden-lg-and-up' : 'hidden-md-and-up']"
                    @click="SET_DRAWER(true)"
                />
                <!-- Logo -->
                <router-link to="/" class="mr-4 d-flex align-center link-text-simple">
                    <v-img
                        :src=appLogo
                        :alt=appName
                        contain
                        height="48"
                        width="48"
                    />
                    <!-- Name -->
                    <v-toolbar-title class="ml-4 hidden-xs-only">{{ appName }}</v-toolbar-title>
                </router-link>
                <!-- separation -->
                <v-divider
                    :class="['mx-4',' mt-0', isAuth ? 'hidden-md-and-down' : 'hidden-sm-and-down']"
                    inset
                    vertical
                />
                <!-- Other links -->
                <v-btn
                    @click="goToFutures"
                    :class="['mr-1', isAuth ? 'hidden-md-and-down' : 'hidden-sm-and-down']"
                    text
                >
                    Возможности
                </v-btn>
                <v-btn
                    @click="goToExamples"
                    :class="['mr-1', isAuth ? 'hidden-md-and-down' : 'hidden-sm-and-down']"
                    text
                >
                    Примеры
                </v-btn>
                <!-- space -->
                <v-spacer :class="[isAuth ? 'hidden-xl-only' : 'hidden-lg-and-up']"/>
                <!-- Search -->
                <v-text-field
                    dense
                    single-line
                    rounded
                    filled
                    clearable
                    hide-details
                    prepend-inner-icon="search"
                    label="Поиск пользователей и атласов..."
                    :class="['mx-4', isAuth ? 'hidden-lg-and-down' : 'hidden-md-and-down']"
                />
                <!-- User panel -->
                <template v-if="isAuth">
                    <!-- Notification -->
                    <v-menu offset-y>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                v-on="on"
                                class="hidden-xs-only"
                                icon
                            >
                                <v-icon>notifications</v-icon>
                            </v-btn>
                        </template>

                        <v-card max-height="540" width="400">
                            <v-card-title class="py-4 px-6 font-weight-regular">Уведомления</v-card-title>

                            <v-divider/>

                            <v-card-text class="pt-4 pb-10">
                                <v-row align="center" justify="center" class="flex-column my-12 mx-2">
                                    <v-img
                                        class="mb-12"
                                        :src="require('@/assets/images/notification.svg')"
                                        contain
                                    />
                                    <div class="mb-4 font-weight-medium">Уведомления появятся здесь</div>
                                    <div style="text-align: center">Сюда будут приходить уведомления о новых функциях сервиса, шаблонах для создания электронных
                                        атласов и т.д.
                                    </div>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-menu>
                    <v-divider
                        class="hidden-sm-and-down mx-4 mt-0"
                        inset
                        vertical
                    />
                    <!-- My library -->
                    <v-btn
                        text
                        to="/library"
                        color="primary"
                        large
                        class="hidden-sm-and-down"
                    >
                        Моя библиотека
                    </v-btn>
                    <v-divider
                        class="hidden-sm-and-down mx-4 mt-0"
                        inset
                        vertical
                    />
                    <!-- User -->
                    <UserPanel/>
                </template>
                <!-- Login btn -->
                <template v-else>
                    <AuthDialog/>
                </template>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
import {mapState, mapGetters, mapMutations} from "vuex"
import UserPanel from "../components/UserPanel"
import AuthDialog from "../components/Auth/Index"

export default {
    name: "AppBar",
    components: {
        UserPanel,
        AuthDialog
    },
    computed: {
        ...mapState('layout', {
            appName: state => state.appName,
            appLogo: state => state.appLogo,
            pageLoading: state => state.pageLoading
        }),
        ...mapGetters('auth', {
            isAuth: "isAuth"
        })
    },
    methods: {
        ...mapMutations('layout', ['SET_DRAWER']),
        async goToFutures() {
            if (this.$route.path === "/") {
                let slide = document.getElementById("futures");
                let top = window.scrollY + slide.getBoundingClientRect().y;
                await this.$vuetify.goTo(top);
            } else {
                await this.$router.push("/")
                    .then(_ => {
                        let slide = document.getElementById("futures");
                        // Определение расстояния от начала страницы до нужного элемента
                        let top = window.scrollY + slide.getBoundingClientRect().y;
                        this.$vuetify.goTo(top);
                    });
            }
        },
        async goToExamples() {
            if (this.$route.path === "/") {
                let slide = document.getElementById("examples");
                let top = window.scrollY + slide.getBoundingClientRect().y;
                await this.$vuetify.goTo(top);
            } else {
                await this.$router.push("/")
                    .then(_ => {
                        let slide = document.getElementById("examples");
                        // Определение расстояния от начала страницы до нужного элемента
                        let top = window.scrollY + slide.getBoundingClientRect().y;
                        this.$vuetify.goTo(top);
                    });
            }
        }
    }
}
</script>
