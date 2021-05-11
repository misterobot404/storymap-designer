<template>
    <div v-if="tile === undefined"
         class="d-flex justify-center align-center"
         style="width: 100%; height: 100%"
    >
        <v-progress-circular indeterminate color="primary" width="2"/>
    </div>
    <l-map
        v-else
        class="map"
        ref="map"
        :crs="crs"
        :minZoom="notGeomap ?  config.minZoom - 1 : config.minZoom"
        :maxZoom="config.maxZoom"
        :center.sync="sync_center"
        :options="{zoomControl: false}"
    >
        <l-image-overlay
            v-if="notGeomap"
            :bounds="tile.bounds"
            :url="tile.url"
        />
        <l-tile-layer
            v-else
            :url="tile.url"
            noWrap
            :attribution="tile.attribution"
        />
        <l-marker v-for="(event, index) in events"
                  :key="event.id"
                  :lat-lng="event.marker.position"
                  @click="SET_SELECTED_EVENT_ID(event.id)">
            <l-tooltip>
                {{ event.title }}
            </l-tooltip>
            <l-icon v-if="indexSelectedEvent !== index"
                    :icon-size="event.marker.size"
                    :icon-url="events[index].marker.url"
            />
            <l-icon v-else
                    :icon-size="[event.marker.size[0]*1.4, event.marker.size[1]*1.4]"
                    :icon-url="events[index].marker.url"
            />
        </l-marker>
        <template v-if="config.showPolyline">
            <l-polyline :lat-lngs="arrayMarker"
                        :opacity="polylineOpacity"
                        :dashArray="polylineDashArray"
                        :weight="config.polylineWeight !== undefined ? config.polylineWeight : 2"
            />
        </template>

        <!-- BUTTONS -->
        <!-- Prev / next event -->
        <v-btn
            @dblclick.stop
            fab
            dark
            text
            x-large
            absolute
            color="primary"
            class="v-btn--active"
            style="bottom: 50%; left: 16px; z-index: 401;"
            @click="prevEvent"
        >
            <v-icon x-large>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-btn
            @dblclick.stop
            fab
            dark
            absolute
            x-large
            text
            color="primary"
            class="v-btn--active"
            style="bottom: 50%; right: 16px; z-index: 401;"
            @click="nextEvent"
        >
            <v-icon x-large>keyboard_arrow_right</v-icon>
        </v-btn>
        <!-- Back -->
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <!-- v-if проверяет, не находится ли страница внеутри фрейма-->
                <v-btn
                    v-if="noIframe"
                    @click.stop="$router.back()"
                    absolute
                    text
                    rounded
                    x-large
                    class="v-btn--active"
                    v-on="on"
                    style="top: 16px; left: 16px; z-index: 401;"
                >
                    <v-icon large>first_page</v-icon>
                </v-btn>
            </template>
            <span>Назад</span>
        </v-tooltip>
    </l-map>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import {LMap, LTileLayer, LMarker, LTooltip, LIcon, LPolyline, LImageOverlay} from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import * as L from "leaflet";

export default {
    name: "Map",
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LTooltip,
        LIcon,
        LPolyline,
        LImageOverlay
    },
    data() {
        return {
            //// l-map config
            maxBoundsViscosity: 0.9,
            //// l-polyline config
            polylineOpacity: 0.6,
            polylineDashArray: "6",
        }
    },
    watch: {
        'config.selectedEventId'() {
            this.$refs.map.mapObject.flyTo(this.selectedEvent.marker.position);
        }
    },
    computed: {
        ...mapState('map', [
            'config',
            'events',
            'tileCenter'
        ]),
        ...mapGetters('map', [
            'selectedEvent',
            'indexSelectedEvent',
            'arrayMarker'
        ]),
        ...mapGetters('tiles', {
            tile: 'selectedTile'
        }),
        sync_center: {
            get() {
                return this.tileCenter
            },
            set(value) {
                this.SET_TILE_CENTER(value);
            }
        },
        noIframe() {
            return window === window.parent
        },
        notGeomap() {
            return this.tile.url.indexOf('{z}') === -1 && this.tile.url.indexOf('{x}') === -1 || this.tile.url.indexOf('{y}') === -1;
        },
        crs() {
            return this.notGeomap ? L.CRS.Simple : L.CRS.EPSG3857
        }
    },
    methods: {
        ...mapMutations('map', [
            "SET_TILE_CENTER",
            "SET_SELECTED_EVENT_ID",
            "SET_EVENT_MARKER_POSITION",
            "SET_MIN_TILE_ZOOM",
            "SET_MAX_TILE_ZOOM"
        ]),
        prevEvent() {
            if (this.indexSelectedEvent === 0)
                this.SET_SELECTED_EVENT_ID(this.events[this.events.length - 1].id);
            else if (this.indexSelectedEvent !== 0)
                this.SET_SELECTED_EVENT_ID(this.events[this.indexSelectedEvent - 1].id);
        },
        nextEvent() {
            if (this.indexSelectedEvent === this.events.length - 1)
                this.SET_SELECTED_EVENT_ID(this.events[0].id);
            else if (this.indexSelectedEvent !== this.events.length - 1)
                this.SET_SELECTED_EVENT_ID(this.events[this.indexSelectedEvent + 1].id);
        },
        keyDownEvent(e) {
            if (e.keyCode === 37) {
                this.prevEvent();
            } else if (e.keyCode === 39) {
                this.nextEvent();
            }
        }
    },
    beforeMount() {
        // add keydown event
        window.addEventListener("keydown", e => this.keyDownEvent(e));
    },
    beforeDestroy() {
        // remove keydown event
        window.removeEventListener("keydown", e => this.keyDownEvent(e));
    }
}
</script>

<style lang="sass" scoped>
.map
    width: 100%
    margin: auto
    border: 1px solid #4d565661
</style>
