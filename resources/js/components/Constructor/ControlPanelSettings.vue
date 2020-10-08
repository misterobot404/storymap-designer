<template>
    <v-dialog v-model="dialog" max-width="800" scrollable>
        <!-- Open dialog button -->
        <template v-slot:activator="{ on }">
            <v-btn
                height="40"
                class="mx-2"
                v-on="on"
                @click="dialog = true"
            >
                <v-icon class="mr-1" style="opacity: 0.76"> settings</v-icon>
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
                    <v-icon> close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-divider/>
            <!-- Body -->
            <v-card-text class="pa-0">
                <v-form ref="form">
                    <v-card-text>
                        <v-row no-gutters>
                            <v-col>
                                <v-form ref="form">
                                    <v-container class="py-0">
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
                                                    label="Описание"
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
                                        </v-row>
                                    </v-container>
                                </v-form>
                            </v-col>
                            <v-divider class="mx-2" vertical/>
                            <v-col>
                                <v-container class="py-0">
                                    <v-row>
                                        <v-subheader>Изменение подложки</v-subheader>
                                        <v-col cols="12">
                                            <v-select
                                                v-model="model_tileUrl"
                                                height="68"
                                                filled
                                                hide-details
                                                :items="getTileNames"
                                                label="Выберите"
                                                :rules="[v => !!v || 'Выберите категорию']"
                                                required
                                            />
                                            <AddTileDialog/>
                                        </v-col>
                                        <v-col cols="12" class="pt-0">
                                            <v-switch
                                                v-model="model_tileShowPolyline"
                                                :items="getTileNames"
                                                label="Отображение связывающих линий"
                                                hide-details
                                            />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-slider
                                                v-model="model_tilePolylineWeight"
                                                min="1"
                                                max="10"
                                                label="Толщина связывающих линий"
                                                hide-details
                                            />
                                        </v-col>
                                        <v-col cols="12" class="pt-2">
                                            <v-text-field
                                                label="Минимальный зум"
                                                filled
                                                dense
                                                type="number"
                                                step="1"
                                                v-model.trim="model_tileMinZoom"
                                                :rules="[
                                                        v => !!v || 'Введите значение',
                                                        v => v >= 0 || 'Значение меньше ноля',
                                                        v => v <= tile.maxZoom || 'Минимальный зум должен быть меньше максимального'
                                                        ]"
                                            />
                                        </v-col>
                                        <v-col cols="12" class="pt-0">
                                            <v-text-field
                                                label="Максимальный зум"
                                                filled
                                                dense
                                                type="number"
                                                v-model.trim="model_tileMaxZoom"
                                                :rules="[
                                                        v => !!v || 'Введите значение',
                                                        v => v >= 0 || 'Значение меньше ноля',
                                                        v => v >= tile.minZoom || 'Максимальный зум должен быть больше минимального'
                                                        ]"
                                            />
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import {mapState, mapMutations, mapGetters} from 'vuex'
    import ControlPanelSettingAddTileDialog from "@/components/Constructor/ControlPanelSettingAddTileDialog"

    export default {
        name: "Settings",
        components: {
            AddTileDialog: ControlPanelSettingAddTileDialog
        },
        data() {
            return {
                dialog: false
            }
        },
        computed: {
            ...mapState('map', [
                'name',
                'description',
                'subject',
                'tile'
            ]),
            ...mapState('maps', [
                'maps',
                'tiles'
            ]),
            ...mapGetters('maps', [
                'subjects'
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
                    let tile = this.tiles.find(obj => obj.url === this.tile.url);
                    if (tile !== undefined) return tile.name;
                },
                set(value) {
                    this.SET_TILE_URL(this.tiles.find(obj => obj.name === value).url)
                }
            },
            model_tileMinZoom: {
                get() {
                    return this.tile.minZoom;
                },
                set(v) {
                    if (!!v && v >= 0 && v <= this.tile.maxZoom)
                        this.SET_MIN_TILE_ZOOM(parseInt(v));
                }
            },
            model_tileMaxZoom: {
                get() {
                    return this.tile.maxZoom;
                },
                set(v) {
                    if (!!v && v >= 0 && v >= this.tile.minZoom)
                        this.SET_MAX_TILE_ZOOM(parseInt(v));
                }
            },
            model_tilePolylineWeight: {
                get() {
                    if (this.tile.polylineWeight === undefined) return 2;
                    else return this.tile.polylineWeight;
                },
                set(value) {
                    this.SET_POLYLINE_WEIGHT(value);
                }
            },
            model_tileShowPolyline: {
                get() {
                    return this.tile.showPolyline
                },
                set(value) {
                    this.SET_SHOW_POLYLINE(value);
                }
            }
        },
        methods: {
            ...mapMutations('layout', [
                'CHANGE_THEME',
            ]),
            ...mapMutations('map', [
                'SET_MAP_NAME',
                'SET_MAP_DESCRIPTION',
                'SET_MAP_SUBJECT',
                'SET_TILE_URL',
                'SET_SHOW_POLYLINE',
                'SET_POLYLINE_WEIGHT',
                'SET_MIN_TILE_ZOOM',
                'SET_MAX_TILE_ZOOM'
            ])
        }
    }
</script>
