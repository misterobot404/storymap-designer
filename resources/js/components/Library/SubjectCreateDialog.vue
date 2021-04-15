<template>
    <v-dialog
        v-model="createSubjectDialog"
        max-width="340"
    >
        <template v-slot:activator="{ on }">
            <v-btn
                class="ma-2"
                large
                color="primary"
                outlined
                rounded
                v-on="on"
            >
                Добавить категорию
            </v-btn>
        </template>

        <!-- Dialog -->
        <v-card>
            <!-- Header -->
            <v-toolbar
                height="68"
                flat
                class="pr-1"
            >
                <v-icon
                    large
                    class="mr-2"
                >
                    subject
                </v-icon>
                <v-toolbar-title> Добавить категорию</v-toolbar-title>
                <v-spacer/>
                <v-btn
                    icon
                    @click="createSubjectDialog = false"
                >
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-divider/>
            <!-- Body -->
            <v-card-text class="pb-0 pt-2">
                <v-form ref="createSubjectForm">
                    <v-text-field
                        v-model="name"
                        :rules="[ v => name === null || this.subjects.find(subject => subject.name === v) === undefined || 'Такая категория уже существует' ]"
                        label="Название"
                        required
                    />
                    <v-file-input
                        label="Иконка"
                        v-model="icon"
                        accept="image/*"
                        prepend-icon="attach_file"
                    />
                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-spacer/>
                <v-btn
                    color="primary"
                    text
                    @click="createSubjectDialog = false"
                >
                    Закрыть
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    :disabled="name === ''"
                    :loading="processCreate"
                    @click="create"
                >
                    Подтвердить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name: "CreateMapDialog",
    data() {
        return {
            createSubjectDialog: false,
            processCreate: false,
            name: "",
            icon: null,
        }
    },
    computed: {...mapState('subjects', ['subjects'])},
    methods: {
        ...mapActions('subjects', ['createSubject']),
        create() {
            if (this.$refs.createSubjectForm.validate()) {
                let formData = new FormData();
                formData.append('name', this.name);
                if (this.icon) formData.append('icon', this.icon);

                this.processCreate = true;
                this.createSubject(formData)
                    .then(_ => {
                        this.createSubjectDialog = false;
                        this.name = "";
                        this.icon = null;
                    })
                    .finally(() => { this.processCreate = false })
            }
        }
    }
}
</script>

