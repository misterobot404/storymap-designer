<template>
    <!--    :maxBounds="config.tileBounds"-->
    <!--    :maxBoundsViscosity="maxBoundsViscosity"-->
    <l-map class="map"
           style="z-index: 0;"
           :crs="crs"
           ref="map"
           :minZoom="notGeomap ?  config.minZoom - 1 : config.minZoom"
           :maxZoom="config.maxZoom"
           :center.sync="sync_center"
           @click="latLngClickUpdatePosition"
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
                  :draggable="indexSelectedEvent === index"
                  @click="SET_SELECTED_EVENT_ID(event.id)"
                  @update:latLng="latLngDragUpdatePosition">
            <l-tooltip>
                {{ event.title }}
            </l-tooltip>
            <l-icon v-if="indexSelectedEvent !== index"
                    :icon-size="event.marker.size"
                    :icon-url="events[index].marker.url">
            </l-icon>
            <l-icon v-else
                    :icon-size="[event.marker.size[0]*1.4, event.marker.size[1]*1.4]"
                    :icon-url="events[index].marker.url">
            </l-icon>
        </l-marker>
        <template v-if="config.showPolyline">
            <l-polyline :lat-lngs="arrayMarker"
                        :opacity="polylineOpacity"
                        :dashArray="polylineDashArray"
                        :weight="config.polylineWeight !== undefined ? config.polylineWeight : 2"/>
        </template>
        <!-- Zoom control -->
        <l-control-zoom position="topright"/>
    </l-map>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
import {LMap, LTileLayer, LMarker, LTooltip, LIcon, LPolyline, LControlZoom, LImageOverlay} from 'vue2-leaflet'
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
        LControlZoom,
        LImageOverlay
    },
    data() {
        return {
            //// l-map config
            maxBoundsViscosity: 0.9,
            //// l-polyline config
            polylineOpacity: 0.6,
            polylineDashArray: "6"
        }
    },
    watch: {
        'config.selectedEventId'() {
            this.SET_TILE_CENTER(this.selectedEvent.marker.position);
            //this.$refs.map.mapObject.flyTo(this.selectedEvent.marker.position);
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
        ...mapMutations('tiles', [
            "SET_TILE_BOUNDS"
        ]),
        latLngDragUpdatePosition(latLng) {
            // animation
            // this.$refs.map.mapObject.setView(this.selectedEvent.marker.position);
            // set marker to position
            const payload = {'index': this.indexSelectedEvent, 'position': latLng};
            this.SET_EVENT_MARKER_POSITION(payload);
            this.SET_TILE_CENTER(this.selectedEvent.marker.position);
        },
        // Здесь в отличии от изменений координат "перетаскиванием" мы получим обьект с событием, откуда извелём позицию клика
        latLngClickUpdatePosition(latLng) {
            // animation
            this.$refs.map.mapObject.setView(this.selectedEvent.marker.position);
            // set marker to position
            const payload = {'index': this.indexSelectedEvent, 'position': latLng.latlng};
            this.SET_EVENT_MARKER_POSITION(payload);
        }
    }
}
</script>

<style lang="sass" scoped>
.map
    width: 100%
    margin: auto
    border: 1px solid #4d565661
</style>
