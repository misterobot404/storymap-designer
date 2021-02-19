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
                <v-toolbar-title> Добавить категорию </v-toolbar-title>
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
                <v-text-field
                    v-model="name"
                    label="Название"
                />
                <v-text-field
                    v-model="icon"
                    label="Ссылка на иконку"
                />
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
import {mapActions} from 'vuex'

export default {
    name: "CreateMapDialog",
    data() {
        return {
            createSubjectDialog: false,
            processCreate: false,
            name: "",
            icon: "",
        }
    },
    methods: {
        ...mapActions('subjects', ['createSubject']),
        create() {
            this.processCreate = true;
            this.createSubject({name: this.name, icon: this.icon})
                .then(_ => {
                    this.createSubjectDialog = false;
                    this.name = "";
                    this.icon = "";
                })
                .finally(() => { this.processCreate = false })
        }
    }
}
</script>

