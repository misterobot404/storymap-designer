<template>
    <v-row
        no-gutters
        class="mt-3"
        style="max-height: 40%"
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
                class="d-flex flex-column"
            >
                <v-card-title style="font-size: 1rem !important;">
                    <v-icon class="mr-2">perm_media</v-icon>
                    Медиа-содержимое
                </v-card-title>
                <v-divider/>
                <v-card-text class="d-flex flex">
                    <v-col class="d-flex flex-column justify-center">
                        <v-btn block x-large class="mb-4 primary--text" style="flex-grow: 0">
                            <v-icon class="mr-2">insert_photo</v-icon>
                            Добавить медиа
                        </v-btn>
                        <v-btn
                            block
                            large
                            style="flex-grow: 0"
                            @click="changeIconDialog = true"
                        >
                            <v-img
                                max-height="32"
                                max-width="32"
                                contain
                                :src="selectedEvent.marker.url"
                                class="mr-2"
                            />
                            Изменить иконку
                        </v-btn>
                        <v-dialog
                            v-model="changeIconDialog"
                            max-width="290"
                        >
                            <v-card>
                                <v-card-title class="headline">Изменение иконки</v-card-title>

                                <v-card-text>
                                    <v-text-field
                                        v-model="iconUrl"
                                        label="Ссылка на иконку"
                                    />
                                    <v-text-field
                                        v-model="iconWidth"
                                        label="Ширина"
                                    />
                                    <v-text-field
                                        v-model="iconHeight"
                                        label="Высота"
                                    />
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="primary"
                                        text
                                        @click="changeIconDialog = false"
                                    >
                                        Закрыть
                                    </v-btn>
                                    <v-btn
                                        color="primary"
                                        text
                                        @click="changeIconDialog = false; SET_EVENT_ICON_URL({id:indexSelectedEvent, iconUrl: iconUrl, size: [iconWidth, iconHeight]})"
                                    >
                                        Применить
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-col>

                    <v-col>
                        <v-carousel
                            cycle
                            height="100%"
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
                    </v-col>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import Vue from 'vue'
    import {mapGetters, mapMutations} from 'vuex'

    import {
        TiptapVuetify,
        Heading,
        Bold,
        Italic,
        Strike,
        Underline,
        Code,
        CodeBlock,
        Paragraph,
        BulletList,
        OrderedList,
        ListItem,
        Link,
        Blockquote,
        HardBreak,
        HorizontalRule,
        History,
        Table,
        TableCell,
        TableHeader,
        TableRow
    } from 'tiptap-vuetify'

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
                // Dialog/ Change icon.
                changeIconDialog: false,
                iconUrl: "",
                iconWidth: null,
                iconHeight: null,
                // declare extensions you want to use  in html editor
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
            },
            changeIconDialog(val) {
                if (val) {
                    this.iconUrl = this.selectedEvent.marker.url;
                    this.iconWidth = this.selectedEvent.marker.size[0];
                    this.iconHeight = this.selectedEvent.marker.size[1];
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
                "SET_EVENT_MEDIA_URL",
                'SET_EVENT_ICON_URL'
            ]),
        }
    }
</script>

<style lang="sass" scoped>
    ::v-deep .border-color-gray:not(.v-input--is-focused) .v-input__control > .v-input__slot fieldset
        color: rgba(0, 0, 0, 0.2) !important
</style>
