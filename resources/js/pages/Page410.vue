<template>
    <v-container fill-height>
        <v-col class="text-center">
                <v-img
                    class="mb-4"
                    contain
                    height="256"
                    :src="require('@/assets/images/page-404.png')"
                />
                <h1 class="display-1 font-weight-bold mb-8">
                    Ресурс был скрыт
                </h1>
        </v-col>
    </v-container>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Page410"
    }
</script>
