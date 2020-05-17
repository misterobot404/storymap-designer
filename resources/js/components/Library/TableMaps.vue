<template>
    <v-slide-y-reverse-transition>
        <div class="mt-4 d-flex justify-center flex-wrap">
            <v-hover
                v-for="map in maps"
                :key="map.id"
                v-slot:default="{ hover }">
                <v-card
                    :max-width="$vuetify.breakpoint.xl ? '360' : '300'"
                    :elevation="hover ? 16 : 4"
                    class="ma-5 overflow-hidden align-self-start"
                    style="cursor: pointer"
                >
                    <v-list-item>
                        <v-list-item-avatar tile>
                            <img
                                :src="getSubjectIcon(map.subject)"
                                :alt="map.subject"
                            />
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="headline">{{ map.name }}</v-list-item-title>
                            <v-list-item-subtitle v-if="map.subject"> {{ map.subject }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-img
                        @click="$router.push({ path: `/viewer/${map.id}` })"
                        :src="require('@/assets/images/no-image.png')"
                    />
                    <v-card-actions>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    @click="$router.push({ path: `/viewer/${map.id}` })"
                                    large
                                    icon
                                    v-on="on"
                                >
                                    <v-icon>launch</v-icon>
                                </v-btn>
                            </template>
                            <span>Просмотр</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    @click="$router.push({ path: `/constructor/${map.id}` })"
                                    large
                                    icon
                                    v-on="on"
                                >
                                    <v-icon>create</v-icon>
                                </v-btn>
                            </template>
                            <span>Редактор</span>
                        </v-tooltip>

                        <v-menu
                            top
                            offset-y
                            transition="slide-y-reverse-transition"
                            origin="center center"
                        >
                            <template v-slot:activator="{ on: menu }">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on: tooltip }">
                                        <v-btn
                                            @click=""
                                            :loading="loadingIds.includes(map.id)"
                                            icon
                                            large
                                            v-on="{ ...tooltip, ...menu }"
                                        >
                                            <v-icon>settings</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Настройки</span>
                                </v-tooltip>
                            </template>
                            <v-list>
                                <v-list-item  @click="duplicateMap(map)">
                                    <v-list-item-action class="mr-5">
                                        <v-icon>file_copy</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-title>Создать копию</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="">
                                    <v-list-item-action class="mr-5">
                                        <v-icon>folder</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-title>Добавить в папку</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="destroyMap(map)">
                                    <v-list-item-action class="mr-5">
                                        <v-icon>delete</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-title>Удалить</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>

                        <v-spacer></v-spacer>

                        <v-tooltip top>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    icon
                                    v-on="on"
                                    @click="showDescriptionId === map.id ? showDescriptionId = null : showDescriptionId = map.id"
                                >
                                    <v-icon>{{ showDescriptionId === map.id ? 'expand_less' : 'expand_more' }}</v-icon>
                                </v-btn>
                            </template>
                            <span v-if="showDescriptionId !== map.id">Показать описание</span>
                            <span v-else>Скрыть описание</span>
                        </v-tooltip>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="showDescriptionId === map.id">
                            <v-divider></v-divider>
                            <v-card-text>
                                {{ map.description }}
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-hover>
        </div>
    </v-slide-y-reverse-transition>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: "TableMaps",
        props: {
            maps: Array
        },
        data() {
            return {
                showDescriptionId: null,
                loadingIds: [],
            }
        },
        computed: {
            ...mapState('maps', [
                'subjects'
            ])
        },
        methods: {
            ...mapActions('maps', {
                destroyMapAction: 'destroyMap',
                duplicateMapAction: 'duplicateMap',
            }),
            getSubjectIcon($subject) {
                return this.subjects.find(el => el.name === $subject).icon;
            },
            destroyMap($map) {
                this.loadingIds.push($map.id);
                this.destroyMapAction($map)
                    .finally(() => {
                        this.loadingIds = this.loadingIds.filter(el => el !== $map.id);
                    })
            },
            duplicateMap($map) {
                this.loadingIds.push($map.id);
                this.duplicateMapAction($map)
                    .finally(() => {
                        this.loadingIds = this.loadingIds.filter(el => el !== $map.id);
                    })
            }
        }
    }
</script>

