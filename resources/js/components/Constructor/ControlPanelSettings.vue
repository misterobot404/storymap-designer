<template>
    <v-dialog v-model="dialog" max-width="600" scrollable>
        <!-- Open dialog button -->
        <template v-slot:activator="{ on }">
            <v-btn
                height="40"
                class="mx-2"
                v-on="on"
                @click="dialog = true"
            >
                <v-icon class="mr-1" style="opacity: 0.76"> settings </v-icon>
                Настройки
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
                <v-icon large class="mr-2">settings</v-icon>
                <v-toolbar-title>Настройки</v-toolbar-title>
                <v-spacer/>
                <v-btn
                    icon
                    @click="dialog = false"
                >
                    <v-icon> close </v-icon>
                </v-btn>
            </v-toolbar>
            <v-divider/>
            <!-- Body -->
            <v-card-text class="pb-0">
                <v-form ref="form">
                    <v-container class="py-1">
                        <v-card-text class="pb-0">
                            <v-form ref="form">
                                <v-container class="pb-0">
                                    <v-row>
                                        <v-subheader>Основная информация</v-subheader>
                                        <v-col cols="12">
                                            <v-text-field
                                                label="Название"
                                                filled
                                                v-model.trim="model_mapName"
                                                :rules="[
                                        v => !!v || 'Введите название',
                                        v => maps.find(map => map.name === v) === undefined || 'Атлас с таким именем уже существует'
                                    ]"
                                                required
                                            />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-textarea
                                                filled
                                                clearable
                                                label="Описание"
                                                clear-icon="cancel"
                                                v-model.trim="model_mapDescription"
                                                :rules="[v => !!v || 'Введите описание']"
                                                required
                                            />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-select
                                                v-model="model_mapSubject"
                                                height="68"
                                                filled
                                                :items="getSubjectNames"
                                                label="Категория"
                                                :rules="[v => !!v || 'Выберите категорию']"
                                                required
                                            ></v-select>
                                        </v-col>
                                        <v-subheader>Подложка</v-subheader>
                                        <v-col cols="12">
                                            <v-select
                                                v-model="model_tileUrl"
                                                height="68"
                                                filled
                                                :items="getTileNames"
                                                label="Категория"
                                                :rules="[v => !!v || 'Выберите категорию']"
                                                required
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </v-card-text>
                    </v-container>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
        name: "Settings",
        data () {
            return {
                dialog: false
            }
        },
        computed: {
            ...mapState('map',[
                'name' ,
                'description',
                'subject',
                'tile'
            ]),
            ...mapState('maps',[
                'subjects',
                'maps',
                'tiles'
            ]),
            getSubjectNames() {
                let subjectNames = [];
                this.subjects.forEach(el => subjectNames.push(el.name));
                return subjectNames;
            },
            getTileNames() {
                let tileNames = [];
                this.tiles.forEach(el => tileNames.push(el.name));
                return tileNames;
            },
            model_mapName: {
                get() {
                    return this.name
                },
                set(value) {
                    this.SET_MAP_NAME(value)
                }
            },
            model_mapDescription: {
                get() {
                    return this.description
                },
                set(value) {
                    this.SET_MAP_DESCRIPTION(value)
                }
            },
            model_mapSubject: {
                get() {
                    return this.subject
                },
                set(value) {
                    this.SET_MAP_SUBJECT(value)
                }
            },
            model_tileUrl: {
                get() {
                    return this.tiles.find(obj => obj.url === this.tile.url).name
                },
                set(value) {
                    this.SET_TILE_URL(this.tiles.find(obj => obj.name === value).url)
                }
            }
        },
        methods: {
            ...mapMutations('layout',[
                'CHANGE_THEME',
            ]),
            ...mapMutations('map',[
                'SET_MAP_NAME',
                'SET_MAP_DESCRIPTION',
                'SET_MAP_SUBJECT',
                'SET_TILE_URL'
            ])
        }
    }
</script>
