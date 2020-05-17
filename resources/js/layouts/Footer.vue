<template>
    <v-footer app
              style="min-width: 320px !important;"
              absolute
    >
        <v-col
            class="text-center"
            style="opacity: 0.84"
            cols="12">
            © LiSa Inc. {{ new Date().getFullYear() }}
        </v-col>
    </v-footer>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Footer",
        computed: {
            ...mapState('layout', {
                appName: state => state.appName
            })
        }
    }
</script>

<style scoped>

</style>
