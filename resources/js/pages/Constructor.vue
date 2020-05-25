<template>
    <v-container
        fluid
        style="height: 100vh"
        class="d-flex flex-column"
    >
        <!-- Loading -->
        <v-overlay
            :value="loadingMap"
            opacity="0.2"
        >
            <v-progress-circular
                indeterminate
                :size="128"
            />
        </v-overlay>

        <!-- Control panel -->
        <ControlPanel/>
        <!-- Constructor -->
        <div class="d-flex flex overflow-hidden">
            <!-- Event list -->
            <EventList/>
            <!-- Map + Event form -->
            <div
                class="content d-flex flex-column align-center"
                style="flex:1"
            >
                <!-- Map -->
                <Map/>
                <!-- Event form -->
                <EventForm v-show="$store.getters.indexSelectedEvent !== -1"/>
            </div>
        </div>
    </v-container>
</template>

<script>
    import {mapActions} from "vuex"
    import ControlPanel from "@/components/Constructor/ControlPanel"
    import EventList from "@/components/Constructor/EventList"
    import EventForm from "@/components/Constructor/EventForm"
    import Map from "@/components/Constructor/Map"

    export default {
        name: "Constructor",
        components: {
            ControlPanel,
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
        computed: {},
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
        width: 96%
        min-width: 200px
        margin: 0 auto
        padding-left: 10px
</style>

