<template>
    <v-scale-transition
        group
        origin="center center"
        class="d-flex justify-center flex-wrap"
    >
        <v-hover
            v-for="map in maps"
            :key="map.id"
            v-slot:default="{ hover }">
            <v-card
                :max-width="$vuetify.breakpoint.xl ? '360' : '300'"
                :elevation="hover ? 16 : 4"
                class="ma-5 overflow-hidden align-self-start"
                style="cursor: pointer; z-index: 4;"
            >
                <v-list-item>
                    <v-list-item-avatar
                        tile
                        v-if="getSubjectIcon(map.subject_id) !== ''"
                    >
                        <img
                            :src="getSubjectIcon(map.subject_id)"
                            :alt="getSubjectName(map.subject_id)"
                        />
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="headline">{{ map.name }}</v-list-item-title>
                        <v-list-item-subtitle> {{ getSubjectName(map.subject_id) }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-img
                    @click="$router.push({ path: `/viewer/${map.id}` })"
                    :src="require('@/assets/no-image.png').default"
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
                            <v-list-item @click="SET_SHARE_MAP_DIALOG({shareMapId: map.id, showShareMapDialog: true })">
                                <v-list-item-action class="mr-5">
                                    <v-icon>reply</v-icon>
                                </v-list-item-action>
                                <v-list-item-title>Поделиться</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="duplicateMap(map)">
                                <v-list-item-action class="mr-5">
                                    <v-icon>file_copy</v-icon>
                                </v-list-item-action>
                                <v-list-item-title>Создать копию</v-list-item-title>
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
    </v-scale-transition>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'

export default {
    name: "MapsGrid",
    props: {
        maps: Array
    },
    data() {
        return {
            showDescriptionId: null,
            loadingIds: []
        }
    },
    computed: {
        ...mapState('subjects', ['subjects'])
    },
    methods: {
        ...mapActions('maps', {
            destroyMapAction: 'destroyMap',
            duplicateMapAction: 'copyMap',
        }),
        ...mapMutations('maps', ['SET_SHARE_MAP_DIALOG']),
        getSubjectIcon($subject_id) {
            return $subject_id ? (this.subjects.find(el => el.id === $subject_id)).icon : "/storage/subjects/custom.png";
        },
        getSubjectName($subject_id) {
            return $subject_id ? (this.subjects.find(el => el.id === $subject_id)).name : "Другое";
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

