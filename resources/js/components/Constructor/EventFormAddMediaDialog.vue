<template>
    <v-dialog
        v-model="addMediaDialog"
        :persistent="processing"
        max-width="380"
    >
        <template v-slot:activator="{ on }">
            <v-btn
                block
                large
                class="mb-4 primary--text"
                style="flex-grow: 0"
                v-on="on"
            >
                <v-icon class="mr-2">insert_photo</v-icon>
                Добавить медиа
            </v-btn>
        </template>

        <!-- Dialog -->
        <v-card>
            <v-toolbar
                height="68"
                flat
                class="pr-1"
            >
                <v-toolbar-title>
                    <v-icon large class="mr-1 pb-1">insert_photo</v-icon>
                    Добавление медиа
                </v-toolbar-title>
            </v-toolbar>

            <v-card-text class="pb-0">
                <v-text-field
                    :disabled="mediaFile !== null"
                    v-model.trim="mediaUrl"
                    clearable
                    label="Ссылка на картинку или YouTube"
                />
                или
                <v-file-input
                    :disabled="mediaUrl !== ''"
                    label="Загрузка файла с компьютера"
                    v-model="mediaFile"
                    accept="image/*, video/*"
                    prepend-icon="attach_file"
                />
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn
                    :loading="processing"
                    color="primary"
                    text
                    :disabled="mediaUrl === '' && mediaFile === null"
                    @click="addMediaResource()"
                >
                    Добавить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapActions, mapMutations, mapGetters} from 'vuex'

export default {
    name: "EventFormAddMediaDialog",
    data() {
        return {
            processing: false,
            addMediaDialog: false,
            mediaUrl: "",
            mediaFile: null
        }
    },
    computed: {
        ...mapGetters('map', [
            'indexSelectedEvent'
        ])
    },
    methods: {
        ...mapMutations('map', [
            "ADD_EVENT_MEDIA_URL"
        ]),
        ...mapActions('map', ['addMedia']),

        addMediaResource() {
            // Если был выбран локальный файл, загружаем файл на сервер
            if (this.mediaFile) {
                this.processing = true;
                this.addMedia(this.mediaFile)
                    .then(_ => {
                        // Закрываем диалог и очищаем поля
                        this.addMediaDialog = false;
                        this.mediaFile = null;
                    })
                    .finally(() => { this.processing = false })
            }
            // Если была использована внешняя ссылка
            else if (this.mediaUrl) {
                // Добавляем ссылку на файл к медиа контенту события
                this.ADD_EVENT_MEDIA_URL({
                        index: this.indexSelectedEvent,
                        mediaUrl: this.mediaUrl
                    }
                )
                // Закрываем диалог и очищаем поля
                this.addMediaDialog = false;
                this.mediaUrl = "";
            }
        }
    }
}
</script>

