<template>
    <v-dialog
        v-model="addMediaDialog"
        max-width="340"
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
            <v-card-title class="headline">Добавление медиа</v-card-title>
            <v-card-text>
                <v-text-field
                    v-model="mediaUrl"
                    label="Ссылка на картинку или YouTube видео"
                />
                или
                <v-file-input
                    label="Загрузка с компьютера"
                    v-model="media"
                    accept="image/*, video/*"
                    prepend-icon="attach_file"
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
</template>

<script>
import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'

export default {
    name: "EventFormAddMediaDialog",
    data() {
        return {
            addMediaDialog: false,
            mediaUrl: "",
            media
        }
    },
    computed: {
        ...mapGetters('map', [
            'indexSelectedEvent'
        ])
       /* ...mapState('subjects', ['subjects'])*/
    },
    methods: {
        ...mapMutations('map', [
            "ADD_EVENT_MEDIA_URL"
        ]),
        /*...mapActions('subjects', ['createSubject']),*/

        /*create() {
            if (this.$refs.createSubjectForm.validate()) {
                let formData = new FormData();
                formData.append('name', this.name);
                if (this.icon) formData.append('icon', this.icon);

                this.processCreate = true;
                this.createSubject(formData)
                    .then(_ => {
                        this.addMediaDialog = false;
                        this.name = "";
                        this.icon = null;
                    })
                    .finally(() => { this.processCreate = false })
            }
        }*/
    }
}
</script>

