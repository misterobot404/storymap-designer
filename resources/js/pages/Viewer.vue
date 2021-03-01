<template>
    <div
        style="height: 100vh"
        class="d-flex flex-row"
    >
        <!-- Loading -->
        <v-overlay :value="loadingMap">
            <div class="d-flex flex-column align-center text-center">
                <v-progress-circular
                    indeterminate
                    :size="128"
                />
                <span class="headline mt-4">Loading map</span>
            </div>
        </v-overlay>
        <template v-if="!loadingMap">
            <!-- Map -->
            <Map/>
            <!-- Content -->
            <div
                class="text-center"
                style="width: 34vw;"
            >
                <MediaContent height="34vh"/>
                <v-container class="px-6" style="height: 66vh; overflow-y: scroll">
                    <div class="headline mt-6 mb-4">{{ selectedEvent.title }}</div>
                    <div v-html="selectedEvent.description"/>
                </v-container>
            </div>
        </template>
    </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from "vuex"
import Map from "@/components/Viewer/Map"
import MediaContent from "@/components/MediaContentForEvent"

export default {
    name: "Viewer",
    components: {
        Map,
        MediaContent
    },
    data() {
        return {
            loadingMap: false
        }
    },
    computed: {
        ...mapState('map', [
            'name',
            'description',
            'events'
        ]),
        ...mapGetters('map', ['selectedEvent'])
    },
    methods: {
        ...mapActions('map', [
            'getMap',
            'setExampleMap',
        ]),
        ...mapMutations('map', [
            'SET_SELECTED_EVENT_ID',
            'SET_TILE_CENTER'
        ])
    },
    async beforeMount() {
        // set editable example map. Id 0 means editable.
        if (this.$route.name === "viewer-example" && this.$route.params.id === "0") {
            // Do nothing. Map is already set.
            this.SET_SELECTED_EVENT_ID(this.events[0].id);
            // set tile center on first event
            this.SET_TILE_CENTER(this.selectedEvent.marker.position);
        }
        // set example map
        else if (this.$route.name === "viewer-example")
            this.setExampleMap(this.$route.params.id);
        // set real map
        else {
            // get map
            this.loadingMap = true;
            await this.getMap(this.$route.params.id)
                .then(_ => {
                    this.SET_SELECTED_EVENT_ID(this.events[0].id);
                    // set tile center on first event
                    this.SET_TILE_CENTER(this.selectedEvent.marker.position);

                    document.title = this.name + " - MapDesigner";
                    document.description = this.description;
                })
                .finally(() => this.loadingMap = false)
        }

        // set seo header
        document.title = this.name + " - MapDesigner";
        document.description = this.description;
    },
    beforeDestroy() {
        // remove keydown event
        window.removeEventListener("keydown", e => this.keyDownEvent(e));
    }
}
</script>
