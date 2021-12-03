<template>
    <v-container fill-height>
        <v-col class="text-center">
                <v-img
                    class="mb-4"
                    contain
                    height="256"
                    :src="require('@/assets/page-404.png').default"
                />
                <h1 class="display-1 font-weight-bold mb-8">
                    Ресурс не найден
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
    export default {
        name: "Page404"
    }
</script>
