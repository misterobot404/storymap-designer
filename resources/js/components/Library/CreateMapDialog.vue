<template>
    <v-dialog v-model="dialog"
              max-width="460">
        <!-- Open dialog button -->
        <template v-slot:activator="{ on }">
            <v-btn
                class="ma-2"
                large
                color="primary"
                rounded
                v-on="on"
            >
                <v-icon class="mr-1">add</v-icon>
                Создать атлас
            </v-btn>
        </template>
        <!-- Dialog -->
        <v-card>
            <!-- Header -->
            <v-toolbar
                color="primary"
                dark
                flat
                class="pl-6 pr-7 mb-2 title"
                style="opacity: 0.87"
            >
                <v-icon class="mr-2">map</v-icon>
                Создание атласа
                <v-spacer/>
                <v-btn
                    icon
                    @click="dialog = false"
                >
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <!-- Body -->
            <v-card-text class="pb-0">
                <v-form ref="form">
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    label="Название"
                                    filled
                                    v-model.trim="name"
                                    :rules="[
                                        v => !!v || 'Введите название',
                                        v => maps === null || maps.find(map => map.name === v) === undefined || 'Атлас с таким именем уже существует'
                                    ]"
                                    required
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-textarea
                                    filled
                                    clearable
                                    auto-grow
                                    rows="1"
                                    label="Описание"
                                    clear-icon="cancel"
                                    v-model.trim="description"
                                    :rules="[v => !!v || 'Введите описание']"
                                    required
                                />
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-select
                                    v-model="subject"
                                    height="68"
                                    filled
                                    :items="getSubjectNames()"
                                    label="Категория"
                                    :rules="[v => !!v || 'Выберите категорию']"
                                    required
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-autocomplete
                                    filled
                                    chips
                                    :items="['6ИСб-1', 'ВТБ', 'КГБ', 'ИСВА']"
                                    label="Папки"
                                    multiple
                                ></v-autocomplete>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card-text>
            <v-divider/>
            <!-- Footer -->
            <v-card-actions class="px-9 py-4">
                <v-btn
                    text
                    @click="clearField()"
                >
                    Очистить
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    class="px-7"
                    color="primary"
                    outlined
                    :loading="loading"
                    @click="createMap()"
                >
                    Создать
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "CreateMapDialog",
        data() {
            return {
                dialog: false,
                loading: false,
                name: "",
                description: "",
                subject: "",
                folders: []
            }
        },
        computed: {
            ...mapState('maps', [
                'maps',
                'subjects'
            ])
        },
        methods: {
            createMap() {
                if (this.$refs.form.validate()) {
                    this.loading = true;

                    this.$store.dispatch('maps/createMap', {
                        name: this.name,
                        subject: this.subject,
                        description: this.description
                    })
                        .then(() => {
                            this.dialog = false;
                            this.clearField();
                        })
                        .finally(() => {
                            this.loading = false;
                        })
                }
            },
            clearField() {
                this.$refs.form.reset()
            },
            getSubjectNames() {
                let subjectNames = [];
                this.subjects.forEach(el => subjectNames.push(el.name));
                return subjectNames;
            }
        }
    }
</script>

