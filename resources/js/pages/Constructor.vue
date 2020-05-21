<template>
    <v-container
        fluid
        class="d-flex"
        :style="{'min-height': minHeight}"
    >
        <!-- Loading -->
        <template v-if="loadingMap">
            <div
                class="justify-center align-center d-flex"
                style="flex:1"
            >
                <v-progress-circular
                    indeterminate
                    :size="50"
                    color="primary"
                />
            </div>
        </template>
        <!-- Constructor -->
        <template v-else>
            <!-- Control panel -->
            <!-- Event list + Map + Event form -->
            <div
                class="justify-center align-center d-flex"
                style="flex:1"
            >
                <!-- Event list -->
                <EventList/>
                <!-- Map + Event form -->
                <div class="content">
                    <!-- Map -->
                    <Map/>
                    <!-- Event form -->
                    <EventForm v-show="$store.getters.indexSelectedEvent !== -1"/>
                </div>
            </div>
        </template>
    </v-container>
</template>

<script>
    import {mapActions} from "vuex"
    import EventList from "@/components/Constructor/EventList"
    import EventForm from "@/components/Constructor/EventForm"
    import Map from "@/components/Constructor/Map"

    export default {
        name: "Constructor",
        components: {
            EventList,
            EventForm,
            Map
        },
        props: ['id'],
        data() {
            return {
                loadingMap: false,
            }
        },
        computed: {
            minHeight() {
                const height = '100vh';
                return `calc(${height} - ${this.$vuetify.application.top}px`
            },
        },
        methods: {
            ...mapActions('map', [
                'getMap'
            ]),
        },
        // Load maps
        async beforeMount() {
            this.loadingMap = true;
            await this.getMap(this.id)
                .finally(() => {
                    this.loadingMap = false;
                })
        }
    }
</script>

<style lang="sass" scoped>
    .content
        display: flex
        -webkit-box-orient: vertical
        -webkit-box-direction: normal
        flex-direction: column
        width: 96%
        height: 100%
        min-width: 200px
        margin: 0 auto
        padding-left: 10px

        .form-enter-active
            transition: opacity 1s

        .form-enter
            opacity: 0
</style>

