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
        <!-- Horizontal line -->
        <v-divider
            class="my-3"
            style="border-style: dashed;"
        />
        <!-- Constructor -->
        <div class="d-flex flex overflow-hidden">
            <!-- Event list -->
            <EventList/>
            <!-- Map + Event form -->
            <div
                class="d-flex flex-column"
                style="flex:1; min-width: 200px; padding-left: 12px;"
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
    import {mapGetters, mapActions} from "vuex"
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
        data() {
            return {
                loadingMap: false,
            }
        },
        computed: {
            ...mapGetters('map', [
                'wasChanges'
            ])
        },
        methods: {
            ...mapActions('map', [
                'getMap',
                'setEmptyExampleMap'
            ]),
            // beforeunload
            preventNav(event) {
                if (!this.wasChanges) return;
                event.preventDefault();
                // Chrome requires returnValue to be set.
                event.returnValue = "";
            }
        },
        async beforeMount() {
            // set example map
            if (this.$route.name === "constructor-example") {
                this.setEmptyExampleMap();
            }
            // set real map
            else {
                // method called before closing. Check changes map
                window.addEventListener("beforeunload", this.preventNav);

                this.loadingMap = true;
                await this.getMap(this.$route.params.id)
                    .finally(() => {
                        this.loadingMap = false;
                    })
            }
        },
        beforeDestroy() {
            // remove events from window
            window.removeEventListener("beforeunload", this.preventNav);
        },
    }
</script>

