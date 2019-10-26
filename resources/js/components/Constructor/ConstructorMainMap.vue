<template>
        <l-map class="map"
               ref="map"
               :zoom="mapZoom"
               :center="config.tileCenter"
               :minZoom="config.minTileZoom"
               :maxZoom="config.maxTileZoom"
               :maxBounds="config.bounds"
               :maxBoundsViscosity="maxBoundsViscosity"
               @click="latLngUpdated"
               @update:zoom="zoomUpdated"
               @update:center="centerUpdated">
            <l-tile-layer :url="config.tileUrl"
                          :noWrap="true"
                          :attribution="config.tileAttribution"/>
            <l-marker v-for="(marker, index) in events"
                      :key="marker.id"
                      :lat-lng="marker.marker"
                      :draggable="indexSelectedEvent === index"
                      @click="activateMarker(marker)"
                      @update:latLng="latLngUpdated">
                <l-tooltip>
                    {{marker.name}}
                </l-tooltip>
                <l-icon v-if="indexSelectedEvent !== index"
                        :icon-size="[32, 38]"
                        icon-url="https://image.flaticon.com/icons/svg/148/148828.svg">
                </l-icon>
                <l-icon v-else
                        :icon-size="[48, 46]"
                        icon-url="https://image.flaticon.com/icons/svg/148/148834.svg">
                </l-icon>
            </l-marker>
            <l-polyline :lat-lngs="arrayMarker"
                        :opacity="polylineOpacity"
                        :dashArray="polylineDashArray"
                        :weight="polylineWeight"/>
        </l-map>
</template>

<script>
    import {mapMutations,mapGetters} from 'vuex'
    import {LMap, LTileLayer, LMarker, LTooltip, LIcon, LPolyline} from 'vue2-leaflet'
    import {Icon} from 'leaflet'
    import 'leaflet/dist/leaflet.css'
    // this part resolve an issue where the markers would not appear
    delete Icon.Default.prototype._getIconUrl;

    Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });

    export default {
        name: "ConstructorMap",
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LTooltip,
            LIcon,
            LPolyline
        },
        data() {
            return {
                //// l-map config
                mapZoom: 3,
                maxBoundsViscosity: 0.9,
                //// l-polyline config
                polylineOpacity: 0.6,
                polylineDashArray: "6",
                polylineWeight: 2
            }
        },
        watch: {
            'this.selectedEvent.marker': {
                handler(val) {
                    this.$refs.map.mapObject.setView(val);
                    //this.$refs.map.mapObject.flyTo(val);
                }
            }
        },
        // created: function () {
        //     this.center = this.getSelectedEvent.marker;
        //     this.SET_TILE_CENTER(new L.LatLng(-85, -170));
        // },
        // mounted: function () {
        //     const width = 1280;
        //     const height = 720;
        //     this.maxZoom = 3;
        //     this.minZoom = 0;
        //     const orgLevel = 3;
        //     const tileWidth = 256 * Math.pow(2, orgLevel);
        //     const radius = tileWidth / 2 / Math.PI;
        //     const rx = width - tileWidth / 2;
        //     const ry = -height + tileWidth / 2;
        //     const west = -180;
        //     const east = (180 / Math.PI) * (rx / radius);
        //     const north = 85.05;
        //     const south = (360 / Math.PI) * (Math.atan(Math.exp(ry / radius)) - (Math.PI / 4));
        //     //const rc = (tileWidth / 2 + ry) / 2;
        //     //const centerLat = (360 / Math.PI) * (Math.atan(Math.exp(rc / radius)) - (Math.PI / 4));
        //     //const centerLon = (west + east) / 2;
        //     this.bounds = new L.LatLngBounds(new L.LatLng(south, west), new L.LatLng(north, east));
        //     //this.zoom = this.$refs.map.mapObject.getBoundsZoom(bounds);
        //     //this.center = new L.latLng(centerLat, centerLon);
        // },
        computed: {
            ...mapGetters([
                'config',
                'events',
                'selectedEvent',
                'indexSelectedEvent',
                'arrayMarker'
            ])
        },
        methods: {
            ...mapMutations([
                "SET_TILE_URL",
                "SET_TILE_CENTER",
                "SET_SELECTED_EVENT_ID",
                "SET_EVENT_MARKER_POSITION",
                "SET_TILE_CENTER"
            ]),
            zoomUpdated: function (zoom) {
                this.mapZoom = zoom;
            },
            centerUpdated: function (center) {
                this.SET_TILE_CENTER = center;
            },
            latLngUpdated: function (latLng) {
                this.SET_EVENT_MARKER_POSITION(this.indexSelectedEvent,latLng);
            },
            activateMarker: function (marker) {
                // this.getIndexSelectedEvent === index ? this.events[index].marker = 0 : null;
                this.SET_SELECTED_EVENT_ID(marker.id);
                // this.center = marker.marker;
                // this.zoom = 4;
            }
        }
    }
</script>

<style scoped>
    .map {
        width: 100%;
        margin: auto;
        border: 1px solid #4d565661;
    }

</style>
