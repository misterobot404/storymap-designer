<template>
    <v-row
        no-gutters
        class="mt-3"
        style="max-height: 36vh; min-height: 36vh;"
    >
        <v-col
            cols="6"
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
        <v-col
            cols="6"
            class="d-flex flex-column pl-2"
            style="max-height: 100%;"
        >
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
                <v-card-text
                    class="d-flex flex"
                    style="max-height: 100%; overflow: auto;"
                >
                    <v-col cols="6" class="d-flex flex-column justify-center">
                        <!-- Add media -->
                        <v-btn
                            block
                            large
                            class="mb-4 primary--text"
                            style="flex-grow: 0"
                            @click="addMediaDialog=true"
                        >
                            <v-icon class="mr-2">insert_photo</v-icon>
                            Добавить медиа
                        </v-btn>
                        <v-dialog
                            v-model="addMediaDialog"
                            max-width="290"
                        >
                            <v-card>
                                <v-card-title class="headline">Добавление медиа</v-card-title>
                                <v-card-text>
                                    <v-text-field
                                        v-model="mediaUrl"
                                        label="Внешняя ссылка"
                                    />
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer/>
                                    <v-btn
                                        color="primary"
                                        text
                                        @click="addMediaDialog = false"
                                    >
                                        Закрыть
                                    </v-btn>
                                    <v-btn
                                        color="primary"
                                        text
                                        :disabled="mediaUrl === ''"
                                        @click="addMediaDialog = false; ADD_EVENT_MEDIA_URL({index:indexSelectedEvent, mediaUrl: mediaUrl})"
                                    >
                                        Добавить
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <!-- Change icon -->
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
                                        @click="changeIconDialog = false; SET_EVENT_ICON_URL({index:indexSelectedEvent, iconUrl: iconUrl, size: [iconWidth, iconHeight]})"
                                    >
                                        Применить
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-col>
                    <v-col
                        cols="6"
                        class="d-flex flex-column justify-center"
                        style="max-height: 100%; overflow: auto;"
                    >
                        <MediaContent height="100%"/>
                    </v-col>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    import MediaContent from "@/components/MediaContentForEvent"
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
        History
    } from 'tiptap-vuetify'

    export default {
        name: "ConstructorForm",
        components: {
            MediaContent,
            TiptapVuetify
        },
        data() {
            return {
                // Dialog. Change icon.
                changeIconDialog: false,
                iconUrl: "",
                iconWidth: null,
                iconHeight: null,
                // Dialog. Add media.
                addMediaDialog: false,
                mediaUrl: "",
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
                    CodeBlock
                ],
            }
        },
        watch: {
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
            }
        },
        methods: {
            ...mapMutations('map', [
                "SET_EVENT_TITLE",
                "SET_EVENT_DESCRIPTION",
                "ADD_EVENT_MEDIA_URL",
                'SET_EVENT_ICON_URL'
            ]),
        }
    }
</script>

<style lang="sass" scoped>
    ::v-deep .border-color-gray:not(.v-input--is-focused) .v-input__control > .v-input__slot fieldset
        color: rgba(0, 0, 0, 0.2) !important
</style>
