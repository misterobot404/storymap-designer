<template>
    <v-expand-transition>
        <v-row
            no-gutters
            class="mt-3"
            style="max-height: 50%"
            v-if="indexSelectedEvent !== -1"
        >
            <v-col
                class="pr-1 d-flex flex-column"
                style="max-height: 100%; overflow: auto"
            >
                <v-text-field
                    v-model.trim="model_title"
                    label="Название события..."
                    single-line
                    outlined
                    hide-details
                    clearable
                    class="border-color-gray"
                    style="flex-grow: 0;"
                />
                <tiptap-vuetify
                    v-model="model_description"
                    class="d-flex flex-grow-1 mt-3"
                    :extensions="extensions"
                    :card-props="{ outlined: true, style: 'width: 100%' }"
                    placeholder="Описание события..."
                />
            </v-col>
            <v-col class="d-flex flex-column pl-2">
                <v-card
                    height="100%"
                    outlined
                >
                    <v-card-title style="font-size: 1rem !important;">
                        <v-icon class="mr-2">perm_media</v-icon>
                        Медиа-содержимое
                    </v-card-title>
                    <v-divider/>
                    <v-card-text class="d-flex">
                        <v-col class="text-center">
                            <v-text-field
                                v-model.trim="model_mediaUrl"
                                label="Ссылка на медиа ресурс"
                                outlined
                                hide-details
                                class="mb-2"
                            />
                            или
                            <v-file-input
                                filled
                                prepend-icon="backup"
                                accept="image/*"
                                label="Загрузите с компьютера"
                                hide-details
                            />
                        </v-col>

                        <v-col>

                        </v-col>
                        <!--                        <form action="/uploadImg" method="post" enctype="multipart/form-data" class="formRightUploadFile">-->
                        <!--                            <label class="formRightUploadButton">-->
                        <!--                                <img src="/images/cloud-upload.png">Upload from drive-->
                        <!--                                <input type="file" multiple name="image" onchange="this.form.submit()"-->
                        <!--                                       style="display: none">-->
                        <!--                            </label>-->
                        <!--                        </form>-->
                        <!--                        <template v-if="selectedEvent.mediaUrl !== '' && selectedEvent.mediaUrl !== null">-->
                        <!--                            <template v-if="checkExistImages">-->
                        <!--                                <img :src="selectedEvent.mediaUrl"-->
                        <!--                                     alt="image"-->
                        <!--                                     width="340"-->
                        <!--                                     height="176"-->
                        <!--                                     class="emptyMediaBlock">-->
                        <!--                            </template>-->
                        <!--                            <template v-else-if="selectedEvent.mediaUrl.indexOf('.youtu') !== -1">-->
                        <!--                                <youtube :video-id="getYouTubeIdOfSelectedEvent"-->
                        <!--                                         :player-width="260"-->
                        <!--                                         :player-height="140"-->
                        <!--                                         class="emptyMediaBlock">-->
                        <!--                                </youtube>-->
                        <!--                            </template>-->
                        <!--                            <template v-else>-->
                        <!--                                <div class="emptyMediaBlock">-->
                        <!--                                    <p>Broken link</p>-->
                        <!--                                </div>-->
                        <!--                            </template>-->
                        <!--                        </template>-->
                        <!--                        <template v-else>-->
                        <!--                            <div class="emptyMediaBlock">-->
                        <!--                                <p>Empty</p>-->
                        <!--                            </div>-->
                        <!--                        </template>-->
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-expand-transition>
</template>

<script>
    import Vue from 'vue'
    import {mapGetters, mapMutations} from 'vuex'

    import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, CodeBlock, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History, Table, TableCell, TableHeader, TableRow } from 'tiptap-vuetify'

    import VueYouTubeEmbed from 'vue-youtube-embed'
    Vue.use(VueYouTubeEmbed);

    export default {
        name: "ConstructorForm",
        components: {
          TiptapVuetify
        },
        data() {
            return {
                checkExistImages: null,
                // declare extensions you want to use
                extensions: [
                    History,
                    Link,
                    [Heading, {
                        options: {
                            levels: [1, 2, 3, 4]
                        }
                    }],
                    Underline,
                    Strike,
                    Italic,
                    Bold,
                    ListItem,
                    BulletList,
                    OrderedList,
                    Blockquote,
                    HorizontalRule,
                    Paragraph,
                    HardBreak,
                    Code,
                    CodeBlock,
                    Table,
                    TableCell,
                    TableHeader,
                    TableRow
                ],
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
            }
        },
        computed: {
            ...mapGetters('map', [
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
            model_mediaUrl: {
                get() {
                    return this.selectedEvent.mediaUrl
                },
                set(value) {
                    const payload = {'index': this.indexSelectedEvent, 'mediaUrl': value};
                    this.SET_EVENT_MEDIA_URL(payload)
                }
            },
            getYouTubeIdOfSelectedEvent: function () {
                return this.$youtube.getIdFromURL(this.selectedEvent.mediaUrl);
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
    ::v-deep .border-color-gray:not(.v-input--is-focused) .v-input__control > .v-input__slot fieldset
        color: rgba(0, 0, 0, 0.2) !important
</style>
