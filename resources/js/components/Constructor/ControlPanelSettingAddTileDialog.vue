<template>
    <v-dialog v-model="dialog"
              max-width="800"
              hide-overlay
              scrollable
              transition="fade-transition"
    >
        <!-- Open dialog button -->
        <template v-slot:activator="{ on }">
            <v-btn
                :disabled="!isAuth"
                class="mt-4 v-btn--active"
                depressed
                color="primary"
                v-on="on"
            >
                Добавить подложку
            </v-btn>
        </template>
        <!-- Dialog -->
        <v-card height="575" :loading="loading">
            <!-- Header -->
            <v-toolbar
                height="68"
                flat
                class="pr-1"
            >
                <v-btn
                    icon
                    @click="dialog = false"
                >
                    <v-icon>arrow_back</v-icon>
                </v-btn>
                <v-icon
                    large
                    class="mx-2"
                    color="primary"
                >
                    layers
                </v-icon>
                <v-toolbar-title> Добавление подложки</v-toolbar-title>
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
                                        <v-subheader>Создание</v-subheader>
                                        <div class="d-flex flex-column pt-2">
                                            <div class="d-flex pb-0">
                                                <v-col cols="6" class="pb-0">
                                                    <v-text-field
                                                        label="Название"
                                                        filled
                                                        v-model.trim="name"
                                                        :rules="[
                                        v => tiles.find(tile => tile.name === v) === undefined || 'Подложка с таким названием уже существует'
                                    ]"
                                                        required
                                                    />
                                                </v-col>
                                                <v-col cols="6" class="pb-0">
                                                    <v-select
                                                        filled
                                                        :items="['Фреймы', 'Растяжение', 'Дублирование']"
                                                        value="Фреймы"
                                                        label="Вид отображения"
                                                        required
                                                    />
                                                </v-col>
                                            </div>
                                            <v-col cols="12" class="pt-2">
                                                <div class="d-flex">
                                                    <v-text-field
                                                        style="flex-basis: 200px;"
                                                        :disabled="tileImage !== null"
                                                        label="Ссылка на картинку / подложку"
                                                        filled
                                                        v-model.trim="tileUrl"
                                                        :rules="[
                                        v => tiles.find(tile => tile.name === v) === undefined || 'Такое название уже используется',
                                        v => tiles.find(tile => tile.url === v) === undefined || 'Подложка с такой ссылкой уже используется'
                                    ]"
                                                        required
                                                    />
                                                    <span class="flex-grow-0 mx-3 pt-5"> или </span>
                                                    <v-file-input
                                                        style="flex-basis: 200px;"
                                                        :disabled="tileUrl !== ''"
                                                        label="Загрузка с компьютера"
                                                        v-model="tileImage"
                                                        accept="image/*"
                                                        outlined
                                                    />
                                                </div>
                                                <v-row no-gutters align="center">
                                                    <a
                                                        class="text-decoration-none"
                                                        href="http://leaflet-extras.github.io/leaflet-providers/preview/index.html"
                                                        target="_blank"
                                                    >
                                                        Внешняя библиотека подложек.
                                                    </a>
                                                    <v-spacer/>
                                                    <v-btn
                                                        :loading="loading"
                                                        class="px-7"
                                                        color="primary"
                                                        outlined
                                                        @click="l_createTile"
                                                    >
                                                        Добавить
                                                    </v-btn>
                                                </v-row>
                                            </v-col>
                                        </div>
                                    </v-container>
                                </v-form>
                            </v-col>
                        </v-row>
                        <v-divider class="mx-2 my-6"/>
                        <v-row>
                            <v-col>
                                <v-container class="py-0">
                                    <v-subheader>Подложки от разработчиков</v-subheader>
                                    <v-row justify="center" class="pt-3">
                                        <v-hover
                                            v-for="(tile, index) in sharedTiles"
                                            :key="tile.id"
                                            v-slot:default="{ hover }">
                                            <v-card
                                                :max-width="$vuetify.breakpoint.xl ? '180' : '100'"
                                                class="ma-5 align-self-start"
                                                :loading="loadingSharedTile && sharedTileIndex === index"
                                            >
                                                <v-img
                                                    @click="$router.push({ path: `/viewer/${map.id}` })"
                                                    :src="require('@/assets/no-image.png').default"
                                                />
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-list-item-title>{{ tile.name }}</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>

                                                <v-fade-transition>
                                                    <v-overlay
                                                        v-if="hover"
                                                        absolute
                                                        color="primary"
                                                        opacity="0.2"
                                                    >
                                                        <v-btn
                                                            v-if="!loadingSharedTile"
                                                            @click="l_createSharedTile(tile, index)"
                                                        >
                                                            Добавить
                                                        </v-btn>
                                                    </v-overlay>
                                                </v-fade-transition>
                                            </v-card>
                                        </v-hover>
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
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'

export default {
    name: "CreateMapDialog",
    data() {
        return {
            dialog: false,
            loading: false,
            loadingSharedTile: false,
            sharedTileIndex: null,
            name: "",
            tileUrl: "",
            tileImage: null
        }
    },
    computed: {
        ...mapState('tiles', ['tiles', 'sharedTiles']),
        ...mapGetters('auth',['isAuth'])
    },
    methods: {
        ...mapMutations('layout', [
            'SHOW_MSG_DIALOG'
        ]),
        ...mapActions('tiles', [
            'createTile',
        ]),
        l_createSharedTile(tile, index) {
            this.loadingSharedTile = true;
            this.sharedTileIndex = index;
            this.createTile(tile)
                .then(_ => this.SHOW_MSG_DIALOG({show: true, text: "Подложка добавлена!"}))
                .finally(() => {
                    this.loadingSharedTile = false;
                    this.sharedTileIndex = null;
                })
        },
        l_createTile() {
            this.loading = true;
            let tile = {
                name: this.name,
                url: this.tileUrl,
                image: this.tileImage
            };
            this.createTile(tile)
                .then(_ => {
                    this.SHOW_MSG_DIALOG({show: true, text: "Подложка добавлена!"});
                    this.name = "";
                    this.tileUrl = "";
                    this.tileImage = null;
                })
                .finally(() => this.loading = false)
        },
    }
}
</script>

