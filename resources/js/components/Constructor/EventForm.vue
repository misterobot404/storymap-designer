<template>
        <div class="form">
            <div class="formLeft">
                <template v-if="indexSelectedEvent !== -1">
                    <input v-model.lazy="model_title"
                           placeholder="Заголовок события"
                           class="inputHeader">
                    <textarea v-model.lazy="model_description"
                              placeholder="Описание события"
                              class="inputTextarea">
                        </textarea>
                </template>
            </div>
            <div class="formRight">
                <div class="formRightContent">
                    <input v-if="indexSelectedEvent !== -1"
                           v-model.lazy="model_mediaUrl"
                           placeholder="Insert media link"
                           class="formRightInputUrl">
                    <input v-else
                           placeholder="Insert media link"
                           class="formRightInputUrl">
                    <form action="/uploadImg" method="post" enctype="multipart/form-data" class="formRightUploadFile">
                        <label class="formRightUploadButton">
                            <img src="/images/cloud-upload.png">Upload from drive
                            <input type="file" multiple name="image" onchange="this.form.submit()"
                                   style="display: none">
                        </label>
                    </form>
                </div>
                <template v-if="indexSelectedEvent !== -1 && selectedEvent.mediaUrl !== '' && selectedEvent.mediaUrl !== null">
                    <template v-if="checkExistImages">
                        <img :src="selectedEvent.mediaUrl"
                             alt="image"
                             width="340"
                             height="176"
                             class="emptyMediaBlock">
                    </template>
                    <template v-else-if="selectedEvent.mediaUrl.indexOf('.youtu') !== -1">
                        <youtube :video-id="getYouTubeIdOfSelectedEvent"
                                 :player-width="260"
                                 :player-height="140"
                                 class="emptyMediaBlock">
                        </youtube>
                    </template>
                    <template v-else>
                        <div class="emptyMediaBlock">
                            <p>Broken link</p>
                        </div>
                    </template>
                </template>
                <template v-else>
                    <div class="emptyMediaBlock">
                        <p>Empty</p>
                    </div>
                </template>
            </div>
        </div>
</template>

<script>
    import Vue from 'vue'
    import {mapGetters,mapMutations} from 'vuex'
    import VueYouTubeEmbed from 'vue-youtube-embed'

    Vue.use(VueYouTubeEmbed);

    export default {
        name: "ConstructorForm",
        data() {
            return {
                checkExistImages: null,
            }
        },
        watch: {
            'selectedEvent.mediaUrl': {
                immediate: true,
                handler(val) {
                    const img = new Image();
                    img.onload = () => this.checkExistImages = img.height > 0;
                    img.onerror = () => this.checkExistImages = false;
                    img.src = val;
                }
            },
        },
        computed: {
            ...mapGetters('map', [
                'events',
                'selectedEvent',
                'indexSelectedEvent'
            ]),
            model_title: {
                get() {
                    return this.selectedEvent.title
                },
                set(value) {
                    const payload = {'index': this.indexSelectedEvent, 'title': value};
                    this.SET_EVENT_TITLE(payload)
                }
            },
            model_description: {
                get() {
                    return this.selectedEvent.description
                },
                set(value) {
                    const payload = {'index': this.indexSelectedEvent, 'description': value};
                    this.SET_EVENT_DESCRIPTION(payload)
                }
            },
            getYouTubeIdOfSelectedEvent: function () {
                return this.$youtube.getIdFromURL(this.selectedEvent.mediaUrl);
            },
            model_mediaUrl: {
                get() {
                    return this.selectedEvent.mediaUrl
                },
                set(value) {
                    const payload = {'index': this.indexSelectedEvent, 'mediaUrl': value};
                    this.SET_EVENT_MEDIA_URL(payload)
                }
            },
        },
        methods: {
            ...mapMutations('map', [
                "SET_EVENT_TITLE",
                "SET_EVENT_DESCRIPTION",
                "SET_EVENT_MEDIA_URL"
            ]),
        }
    }
</script>

<style lang="sass" scoped>
    .form
        display: flex
        margin-top: 10px

    .formLeft
        display: flex
        flex-direction: column
        margin-right: 1%
        width: 46%

    .inputHeader
        font-size: 24px
        margin-bottom: 2%
        padding: 3px
        height: 28px
        border: 1px solid #4d565661
        border-radius: 4px

    .inputTextarea
        font-size: 18px
        padding: 3px
        flex-grow: 1
        resize: none
        border: 1px solid #4d565661
        border-radius: 4px
        font-family: 'Turnip RE', Georgia, 'Times New Roman', Times, serif

    .formRight
        display: flex
        flex-wrap: wrap
        width: 53%
        min-height: 180px
        border: 1px solid #4d565661
        border-radius: 4px
        background: #f8f8f8

    .formRightContent
        display: flex
        flex-wrap: wrap
        margin: auto
        max-width: 540px
        width: 100%

    .formRightInputUrl
        font-size: 20px
        margin: 4% 2% 2% 2%
        width: 100%

    .formRightUploadFile
        display: flex
        width: 100%

    .emptyMediaBlock
        width: 270px
        height: 144px
        display: flex
        padding: 8px
        margin: auto

        p
            font-size: 26px
            text-align: center
            background-color: #dddddd
            color: #777777
            line-height: 144px
            width: 100%
            margin: auto
            font-family: "Helvetica Neue", Helvetica, sans-serif

    .formRightUploadButton
        font-size: 18px
        margin: 2%
        padding: 6px 0
        background: none
        width: 100%
        border: 1px dashed #4d565661
        transition: all 0.2s
        cursor: pointer

        &:hover
            background-color: #FFFFFF
            border: 1px solid #4d565661

        img
            height: 18px
            position: relative
            bottom: -3px
            margin-right: 4px
</style>
