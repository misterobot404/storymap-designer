<template>
    <v-dialog v-model="dialog"
              max-width="400">
        <!-- Open dialog button -->
        <template v-slot:activator="{ on }">
            <v-btn
                class="mt-4 v-btn--active"
                depressed
                color="primary"
                v-on="on"
            >
                Добавить подложку
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
                    color="primary"
                >
                    layers
                </v-icon>
                <v-toolbar-title> Добавление подложки</v-toolbar-title>
                <v-spacer/>
                <v-btn
                    icon
                    @click="dialog = false"
                >
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-divider/>
            <!-- Body -->
            <v-card-text class="pb-0">
                <v-form ref="form">
                    <v-container class="pb-0">
                        <v-row>
                            <v-col cols="12" class="pb-0 pt-3">
                                <v-text-field
                                    label="Название"
                                    filled
                                    v-model.trim="name"
                                    :rules="[
                                        v => !!v || 'Введите название',
                                        v => tiles.find(tile => tile.name === v) === undefined || 'Подложка с таким названием уже существует'
                                    ]"
                                    required
                                />
                            </v-col>
                            <v-col cols="12" class="pt-1">
                                <v-text-field
                                    label="Ссылка на подложку"
                                    filled
                                    v-model.trim="tileUrl"
                                    :rules="[
                                        v => !!v || 'Введите URL',
                                        v => tiles.find(tile => tile.url === v) === undefined || 'Подложка уже используется'
                                    ]"
                                    required
                                />
                                <a
                                    class="text-decoration-none"
                                    href="http://leaflet-extras.github.io/leaflet-providers/preview/index.html"
                                    target="_blank"
                                >
                                    Внешняя библиотека подложек.
                                </a>
                            </v-col>
                            <v-col cols="12">
                                <v-select
                                    height="68"
                                    filled
                                    hide-details
                                    :items="['Фреймы', 'Растяжение', 'Дублирование']"
                                    value="Фреймы"
                                    label="Вид отображения"
                                    :rules="[v => !!v || 'Выберите тип отображения']"
                                    required
                                />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card-text>
            <!-- Footer -->
            <v-card-actions class="px-9 py-4">
                <v-spacer/>
                <v-btn
                    class="px-7"
                    color="primary"
                    outlined
                    :loading="loading"
                    @click="addTile"
                >
                    Добавить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import {mapMutations, mapState} from 'vuex'

    export default {
        name: "CreateMapDialog",
        data() {
            return {
                dialog: false,
                loading: false,
                name: "",
                tileUrl: ""
            }
        },
        computed: {
            ...mapState('maps', [
                'tiles',
            ])
        },
        methods: {
            ...mapMutations('maps',[
                'ADD_TILE'
            ]),
            addTile() {
                this.ADD_TILE({name: this.name, url: this.tileUrl});
                this.dialog = false;
            }
        }
    }
</script>

