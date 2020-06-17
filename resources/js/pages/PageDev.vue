<template>
    <v-container fill-height>
        <v-col class="text-center">
                <v-img
                    class="mb-4"
                    contain
                    height="200"
                    :src="require('@/assets/images/page-dev.png')"
                />
                <h1 class="display-1 font-weight-bold mb-8">
                    Страница в разработке
                </h1>

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
        name: "Page404"
    }
</script>
