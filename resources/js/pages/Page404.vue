<template>
    <v-container fill-height>
        <v-col class="text-center">
                <v-img
                    class="mb-12"
                    contain
                    height="84"
                    :src="appLogo"
                />
                <h1 class="display-3 font-weight-bold mb-6">
                    Oops! 404
                </h1>

                <p class="mb-8 grey--text text--darken-2">
                    Страница не найдена
                </p>

                <v-btn
                    color="primary"
                    large
                    to="/"
                >
                    Главная страница
                    <v-icon right>
                        launch
                    </v-icon>
                </v-btn>
        </v-col>
    </v-container>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Page404",
        computed: {
            ...mapState('layout', {
                appLogo: state => state.appLogo
            })
        }
    }
</script>
