<template>
    <div
        style="height: 100vh"
        class="d-flex flex-row"
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

        <v-btn
            fab
            dark
            depressed
            absolute
            color="primary"
            style="bottom: 50%; left: 24px"
            @click="prevEvent"
        >
            <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-btn
            fab
            dark
            absolute
            depressed
            color="primary"
            style="bottom: 50%; right: 35%;"
            @click="nextEvent"
        >
            <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>

        <!-- Map -->
        <Map/>

        <div
            class="d-flex flex-column flex overflow-hidden text-center"
            style="width: 50%"
        >
            <v-carousel
                cycle
                height="32vh"
                hide-delimiter-background
                show-arrows-on-hover
                hide-delimiters
            >
                <v-carousel-item>
                    <v-sheet color="primary" height="100%">
                        <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                        >
                            <div class="display-1">Контент</div>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
            <div class="headline mt-8 mb-2">{{selectedEvent.title}}</div>
            <div v-html="selectedEvent.description"/>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapMutations, mapState} from "vuex"
    import ControlPanel from "@/components/Constructor/ControlPanel"
    import EventList from "@/components/Constructor/EventList"
    import EventForm from "@/components/Constructor/EventForm"
    import Map from "@/components/Constructor/Map"

    export default {
        name: "Viewer",
        components: {
            ControlPanel,
            EventList,
            EventForm,
            Map
        },
        data() {
            return {
                loadingMap: false
            }
        },
        computed: {
            ...mapState('map', ['events']),
            ...mapGetters('map', [
                'indexSelectedEvent',
                'selectedEvent'
            ])
        },
        methods: {
            ...mapActions('map', [
                'getMap',
                'setExampleMap'
            ]),
            ...mapMutations('map', [
                'SET_SELECTED_EVENT_ID'
            ]),
            prevEvent() {
                if (this.indexSelectedEvent !== 0)
                    this.SET_SELECTED_EVENT_ID(this.events[this.indexSelectedEvent - 1].id);
            },
            nextEvent() {
                if (this.events.length !== parseInt(this.indexSelectedEvent))
                    this.SET_SELECTED_EVENT_ID(this.events[this.indexSelectedEvent + 1].id);
            },
            keyDownEvent(e) {
                if (e.keyCode === 37) {
                    this.prevEvent();
                }
                else if (e.keyCode === 39) {
                    this.nextEvent();
                }
            }
        },
        async beforeMount() {
            // add keydown event
            window.addEventListener("keydown", e => this.keyDownEvent(e));
            // set editable example map. Id 0 means editable.
            if (this.$route.name === "viewer-example" && this.$route.params.id === "0") {
                // Do nothing. Map is already set.
            }
            // set example map
            else if(this.$route.name === "viewer-example") {
                this.setExampleMap(this.$route.params.id);
            }
            // set real map
            else {
                // get map
                this.loadingMap = true;
                await this.getMap(this.$route.params.id)
                    .finally(() => {
                        this.loadingMap = false;
                    })
            }
        },
        beforeDestroy() {
            // remove keydown event
            window.removeEventListener("keydown", e => this.keyDownEvent(e));
        }
    }
</script>

<style scoped>

</style>
