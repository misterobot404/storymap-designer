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
            <!-- Floating button -->
            <v-fab-transition>
                <v-btn
                    v-scroll="onScroll"
                    v-show="showFloatingBtnCreate"
                    x-large
                    fab
                    dark
                    fixed
                    bottom
                    right
                    color="primary"
                    v-on="on"
                >
                    <v-icon>add</v-icon>
                </v-btn>
            </v-fab-transition>
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
                    map
                </v-icon>
                <v-toolbar-title> Создание атласа</v-toolbar-title>
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
                    <v-container>
                        <v-row>
                            <v-col cols="12" class="pb-0 pt-8">
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
                            <v-col cols="12" class="py-0">
                                <v-textarea
                                    filled
                                    label="Описание"
                                    v-model.trim="description"
                                    :rules="[v => !!v || 'Введите описание']"
                                    required
                                />
                            </v-col>
                            <v-col cols="12" class="py-0">
                                <v-select
                                    v-model="tile_id"
                                    height="68"
                                    filled
                                    :items="tiles"
                                    item-text="name"
                                    item-value="id"
                                    label="Подложка"
                                    :rules="[v => !!v || 'Выберите подложку']"
                                    required
                                />
                            </v-col>
                            <v-col cols="12" class="py-0">
                                <v-select
                                    v-model="subject_id"
                                    height="68"
                                    filled
                                    :items="subjects"
                                    item-text="name"
                                    item-value="id"
                                    label="Категория"
                                    :rules="[v => !!v || 'Выберите категорию']"
                                    required
                                ></v-select>
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
                <v-spacer/>
                <v-btn
                    class="px-7"
                    color="primary"
                    outlined
                    :loading="loading"
                    @click="lCreateMap()"
                >
                    Создать
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
            dialog: false,
            loading: false,
            name: "",
            description: "",
            tile_id: "",
            subject_id: "",
            folders: [],
            showFloatingBtnCreate: false,
        }
    },
    computed: {
        ...mapState({
            maps: state => state.maps.maps,
            subjects: state => state.subjects.subjects,
            tiles: state => state.tiles.tiles
        })
    },
    methods: {
        ...mapActions('maps', ['createMap']),
        lCreateMap() {
            if (this.$refs.form.validate()) {
                this.loading = true;

                this.createMap({
                    name: this.name,
                    description: this.description,
                    tile_id: this.tile_id,
                    subject_id: this.subject_id
                })
                    .then(_ => {
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
        // showScrollUpBtn
        onScroll(e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset || e.target.scrollTop || 0
            this.showFloatingBtnCreate = top > 20
        },
    }
}
</script>

