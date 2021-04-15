<template>
    <v-carousel
        :cycle="!videoPlaying"
        :height="height"
        :show-arrows="selectedEvent.mediaUrl.length > 1"
        hide-delimiter-background
        hide-delimiters
    >
        <template v-if="selectedEvent.mediaUrl.length !== 0">
            <v-carousel-item
                v-for="(url, index) in selectedEvent.mediaUrl"
                :key="index"
            >
                <!-- Delete event. Btn -->
                <v-btn
                    fab
                    x-small
                    depressed
                    absolute
                    color="grey"
                    v-if="$route.name === 'constructor'"
                    class="v-btn--active"
                    style="right: 18px; top: 16px"
                    @click="REMOVE_EVENT_MEDIA_URL({indexEvent: indexSelectedEvent, indexMediaUrl: index})"
                >
                    <v-icon dark>clear</v-icon>
                </v-btn>
                <!-- Img -->
                <template v-if="!imgNotExist.includes(url)">
                    <v-img
                        height="100%"
                        contain
                        :src="url"
                        @error="imgNotExist.push(url)"
                    />
                </template>
                <!-- Youtube -->
                <template v-else>
                    <youtube
                        class="youtube"
                        @playing="videoPlaying = true"
                        @paused="videoPlaying = false"
                        @ended="videoPlaying = false"
                        :video-id="$youtube.getIdFromURL(url)"
                    />
                </template>
            </v-carousel-item>
        </template>
        <v-carousel-item v-else>
            <v-sheet
                color="primary"
                height="100%"
            >
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
</template>

<script>
    import Vue from 'vue'
    import VueYouTubeEmbed from 'vue-youtube-embed'
    import {mapGetters, mapMutations} from "vuex";
    Vue.use(VueYouTubeEmbed)

    export default {
        name: "MediaContent",
        props: {
            height: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                imgNotExist: [],
                videoPlaying: false,
            }
        },
        computed: {
            ...mapGetters('map', [
                'selectedEvent',
                'indexSelectedEvent'
            ]),
        },
        methods: {
            ...mapMutations('map',[
                'REMOVE_EVENT_MEDIA_URL'
            ])
        }
    }
</script>
<style lang="sass" scoped>
    ::v-deep .youtube iframe
        position: absolute
        width: 100%
        height: 100%
        left: 0
        top: 0
</style>
