<template>
    <!--    :minZoom="config.minTileZoom"-->
    <!--    :maxZoom="config.maxTileZoom"-->
    <!--    :maxBounds="config.tileBounds"-->
    <!--    :center="config.tileCenter" -->
    <l-map class="map"
           style="z-index: 0;"
           ref="map"
           :zoom="mapZoom"
           :maxBoundsViscosity="maxBoundsViscosity"
           @click="latLngClickUpdatePosition"
           @update:zoom="zoomUpdated"
           @update:center="centerUpdated"
    >
        <l-tile-layer :url="tile.url"
                      :noWrap="false"
                      :attribution="tile.attribution"/>
        <l-marker v-for="(event, index) in events"
                  :key="event.id"
                  :lat-lng="event.marker.position"
                  :draggable="indexSelectedEvent === index"
                  @click="SET_SELECTED_EVENT_ID(event.id)"
                  @update:latLng="latLngDragUpdatePosition">
            <l-tooltip>
                {{event.title}}
            </l-tooltip>
            <l-icon v-if="indexSelectedEvent !== index"
                    :icon-size="event.marker.size"
                    :icon-url="events[index].marker.url">
            </l-icon>
            <l-icon v-else
                    :icon-size="[event.marker.size[0]*1.5, event.marker.size[1]*1.5]"
                    :icon-url="events[index].marker.url">
            </l-icon>
        </l-marker>
        <l-polyline :lat-lngs="arrayMarker"
                    :opacity="polylineOpacity"
                    :dashArray="polylineDashArray"
                    :weight="polylineWeight"/>
    </l-map>
</template>

<script>
    import {mapState, mapGetters, mapMutations} from 'vuex'
    import {LMap, LTileLayer, LMarker, LTooltip, LIcon, LPolyline} from 'vue2-leaflet'
    import 'leaflet/dist/leaflet.css'

    // TODO: Добавить определение карёв карты
    export default {
        name: "Map",
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
            'selectedEvent.marker.position': function (val) {
                if (val !== undefined) {
                    this.$refs.map.mapObject.setView(val);
                    //this.$refs.map.mapObject.flyTo(val);
                }
            },
            'indexSelectedEvent'() {
                if (this.events.length === 1) {
                    setTimeout(() => this.$refs.map.mapObject.invalidateSize(), 1000);
                }
            }
        },
        mounted() {
            // const image = 'tile';
            // const width = 3320;
            // const height = 2197;
            const maxLevel = 10;

            // const minLevel = 0;
            // const orgLevel = 3;
            //
            // // Some weird calculations to fit the image to the initial position
            // // Leaflet has some bugs there. The fitBounds method is not correct for large scale bounds
            // const tileWidth = 256 * Math.pow(2, orgLevel);
            // const radius = tileWidth / 2 / Math.PI;
            // const rx = width - tileWidth / 2;
            // const ry = -height + tileWidth / 2;
            //
            // const west = -180;
            // const east = (180 / Math.PI) * (rx / radius);
            // const north = 85.05;
            // const south = (360 / Math.PI) * (Math.atan(Math.exp(ry / radius)) - (Math.PI / 4));
            // const rc = (tileWidth / 2 + ry) / 2;
            // const centerLat = (360 / Math.PI) * (Math.atan(Math.exp(rc / radius)) - (Math.PI / 4));
            // const centerLon = (west + east) / 2;
            //
            // const bounds = [[south, west], [north, east]];
            // this.SET_TILE_BOUNDS(bounds);
            //
            // this.SET_MIN_TILE_ZOOM(minLevel);
            // this.SET_MAX_TILE_ZOOM(maxLevel);
            //
            // this.centerUpdated(new L.latLng(centerLat, centerLon));
        },
        computed: {
            ...mapState('map', [
                'tile',
                'events'
            ]),
            ...mapGetters('map', [
                'selectedEvent',
                'indexSelectedEvent',
                'arrayMarker'
            ])
        },
        methods: {
            ...mapMutations('map', [
                "SET_TILE_CENTER",
                "SET_SELECTED_EVENT_ID",
                "SET_EVENT_MARKER_POSITION",
                "SET_TILE_BOUNDS",
                "SET_MIN_TILE_ZOOM",
                "SET_MAX_TILE_ZOOM",
                "SET_REF_MAP_OBJECT"
            ]),
            zoomUpdated: function (zoom) {
                this.mapZoom = zoom;
            },
            centerUpdated: function (center) {
                this.SET_TILE_CENTER(center);
            },
            latLngDragUpdatePosition: function (latLng) {
                const payload = {'index': this.indexSelectedEvent, 'position': latLng};
                this.SET_EVENT_MARKER_POSITION(payload);
            },
            // Здесь в отличии от изменений координат "перетаскиванием" мы получим обьект с событием, откуда извелём позицию клика
            latLngClickUpdatePosition: function (latLng) {
                // Выполняем только если событие выбрано
                if (this.indexSelectedEvent !== -1) {
                    const payload = {'index': this.indexSelectedEvent, 'position': latLng.latlng};
                    this.SET_EVENT_MARKER_POSITION(payload);
                }
            },
        }
    }
</script>

<style lang="sass" scoped>
    .map
        width: 100%
        margin: auto
        border: 1px solid #4d565661
</style>
