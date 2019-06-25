<template>
    <div style="height: 100%">
        <l-map  class="map"
                :zoom="zoom"
                :center="center"
                @click="addMarker"
                @update:zoom="zoomUpdated"
                @update:center="centerUpdated">
            <l-tile-layer :url="url"/>
            <l-marker v-for="(marker, index, key) in markers"
                      :key="key"
                      :lat-lng="marker"
                      :draggable="true"
                      @click="removeMarker(index)"/>
        </l-map>
        <div class="info" style="height: 15%; margin-top: 10px;">
            <span>Center: {{ center }}</span><br>
            <span>Zoom: {{ zoom }}</span><br>
        </div>
    </div>
</template>

<script>
    import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'
    import * as L from "leaflet";

    export default {
        components: {
            LMap,
            LTileLayer,
            LMarker,
        },
        data () {
            return {
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                zoom: 3,
                center: [47.413220, -1.219482],
                markers: [
                    L.latLng(46.412, -12.218),
                    L.latLng(41.413220, -1.219482),
                    L.latLng(55.414, -6.22),
                ]
            };
        },
        methods: {
            zoomUpdated (zoom) {
                this.zoom = zoom;
            },
            centerUpdated (center) {
                this.center = center;
            },
            removeMarker(index) {
                this.markers.splice(index, 1);
            },
            addMarker(event) {
                this.markers.push(event.latlng);
            },
        }
    }
</script>

<style scoped>
    .map {
        min-height: 440px;
        width: 100%;
        border: 1px solid black;
    }
</style>