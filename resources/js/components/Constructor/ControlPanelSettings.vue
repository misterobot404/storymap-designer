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
                                                    v-model.trim="m_name"
                                                    :rules="[
                                        v => !!v || 'Введите название',
                                       /* v => maps.find(map => map.name === v && map.id !== ) === undefined || 'Атлас с таким именем уже существует'*/
                                    ]"
                                                    required
                                                />
                                            </v-col>
                                            <v-col cols="12">
                                                <v-textarea
                                                    filled
                                                    label="Описание"
                                                    v-model.trim="m_description"
                                                    :rules="[v => !!v || 'Введите описание']"
                                                    required
                                                />
                                            </v-col>
                                            <v-col cols="12">
                                                <v-select
                                                    v-model="m_subjectId"
                                                    :items="subjects"
                                                    item-text="name"
                                                    item-value="id"
                                                    height="68"
                                                    filled
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
                                        <v-subheader>Настройки отображения</v-subheader>
                                        <v-col cols="12">
                                            <v-select
                                                v-model="m_tileId"
                                                height="68"
                                                filled
                                                hide-details
                                                :items="tiles"
                                                item-text="name"
                                                item-value="id"
                                                label="Выберите"
                                                :rules="[v => !!v || 'Выберите подложку']"
                                                required
                                            />
                                            <AddTileDialog/>
                                        </v-col>
                                        <v-col cols="12" class="pt-0">
                                            <v-switch
                                                v-model="m_showPolyline"
                                                label="Отображение связывающих линий"
                                                hide-details
                                            />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-slider
                                                v-model="m_polylineWeight"
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
                                                v-model.trim="m_minZoom"
                                                :rules="[
                                                        v => !!v || 'Введите значение',
                                                        v => v >= 0 || 'Значение меньше ноля',
                                                        v => v <= config.maxZoom || 'Минимальный зум должен быть меньше максимального'
                                                        ]"
                                            />
                                        </v-col>
                                        <v-col cols="12" class="pt-0">
                                            <v-text-field
                                                label="Максимальный зум"
                                                filled
                                                dense
                                                type="number"
                                                v-model.trim="m_maxZoom"
                                                :rules="[
                                                        v => !!v || 'Введите значение',
                                                        v => v >= 0 || 'Значение меньше ноля',
                                                        v => v >= config.minZoom || 'Максимальный зум должен быть больше минимального'
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
    import {mapState, mapMutations} from 'vuex'
    import ControlPanelSettingAddTileDialog from "./ControlPanelSettingAddTileDialog"

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
                'subject_id',
                'tile_id',
                'config'
            ]),
            ...mapState({
                maps: state => state.maps.maps,
                tiles: state => state.tiles.tiles,
                subjects: state => state.subjects.subjects
            }),
            m_name: {
                get() {
                    return this.name
                },
                set(value) {
                    this.SET_MAP_NAME(value)
                }
            },
            m_description: {
                get() {
                    return this.description
                },
                set(value) {
                    this.SET_MAP_DESCRIPTION(value)
                }
            },
            m_subjectId: {
                get() {
                    return this.subject_id
                },
                set(value) {
                    this.SET_MAP_SUBJECT_ID(value)
                }
            },
            m_tileId: {
                get() {
                    return this.tile_id
                },
                set(value) {
                    this.SET_TILE_ID(value)
                }
            },
            m_minZoom: {
                get() {
                    return this.config.minZoom;
                },
                set(v) {
                    if (!!v && v >= 0 && v <= this.config.maxZoom)
                        this.SET_MIN_TILE_ZOOM(parseInt(v));
                }
            },
            m_maxZoom: {
                get() {
                    return this.config.maxZoom;
                },
                set(v) {
                    if (!!v && v >= 0 && v >= this.config.minZoom)
                        this.SET_MAX_TILE_ZOOM(parseInt(v));
                }
            },
            m_polylineWeight: {
                get() {
                    if (this.config.polylineWeight === undefined) return 2;
                    else return this.config.polylineWeight;
                },
                set(value) {
                    this.SET_POLYLINE_WEIGHT(value);
                }
            },
            m_showPolyline: {
                get() {
                    return this.config.showPolyline
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
                'SET_SHOW_POLYLINE',
                'SET_POLYLINE_WEIGHT',
                'SET_MIN_TILE_ZOOM',
                'SET_MAX_TILE_ZOOM',
                'SET_MAP_NAME',
                'SET_MAP_DESCRIPTION',
                'SET_MAP_SUBJECT_ID',
                'SET_TILE_ID'
            ])
        }
    }
</script>
