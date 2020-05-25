<template>
    <!-- Table -->
    <v-data-table
        v-model="selected"
        :loading="loading"
        :headers="headers"
        :items="maps"
        single-expand
        show-expand
        item-key="id"
        show-select
        class="elevation-1 mt-6 mb-4"
    >
        <!-- Header. Multiply delete / move to folder -->
        <template v-slot:top>
            <v-slide-y-reverse-transition>
                <v-container class="pb-2 pt-5">
                    <v-row class="align-center my-1 mx-2">
                        <span class="subtitle-1">Выбрано: {{selected.length}}</span>
                        <v-divider
                            class="mt-0 ml-8 mr-4"
                            vertical
                            inset
                        />
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    icon
                                    :disabled="selected.length === 0"
                                    class="mx-1"
                                    v-on="on"
                                >
                                    <v-icon> move_to_inbox</v-icon>
                                </v-btn>
                            </template>
                            <span>Переместить в папку</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    @click="destroyMaps(selected)"
                                    icon
                                    :disabled="selected.length === 0"
                                    class="mx-1"
                                    v-on="on"
                                >
                                    <v-icon> delete</v-icon>
                                </v-btn>
                            </template>
                            <span>Удалить</span>
                        </v-tooltip>
                    </v-row>
                </v-container>
            </v-slide-y-reverse-transition>
        </template>
        <!-- Item actions -->
        <template v-slot:item.actions="{ item }">
            <!-- View -->
            <v-icon
                small
                class="mr-2"
                @click="$router.push({ path: `/viewer/${item.id}` })"
            >
                play_circle_outline
            </v-icon>
            <!-- Edit -->
            <v-icon
                small
                class="mr-2"
                @click="$router.push({ path: `/constructor/${item.id}` })"
            >
                create
            </v-icon>
            <!-- Move to folder -->
            <v-icon
                small
                class="mr-2"
                @click=""
            >
                move_to_inbox
            </v-icon>
            <!-- Share -->
            <v-icon
                small
                class="mr-2"
                @click=""
            >
                reply
            </v-icon>
            <!-- Delete -->
            <v-icon
                small
                @click="destroyMap(item)"
            >
                delete
            </v-icon>
        </template>
        <!-- Item expanded -->
        <template v-slot:expanded-item="{ item }">
            <td>{{ item.description }}</td>
        </template>
    </v-data-table>
</template>

<script>
    import {mapActions} from "vuex"

    export default {
        name: "ListMaps",
        props: {
            maps: Array
        },
        data() {
            return {
                selected: [],
                headers: [
                    {
                        text: 'Название',
                        value: 'name',
                    },
                    {text: 'Направление', value: 'subject'},
                    {text: 'Дата создания', value: 'created_at'},
                    {text: 'Дата обновления', value: 'updated_at'},
                    {text: 'Действия', value: 'actions', sortable: false, align: 'center'},
                    {text: '', value: 'data-table-expand'},
                ],
                loading: false
            }
        },
        methods: {
            ...mapActions('maps', {
                destroyMapAction: 'destroyMap',
                destroyMapsAction: 'destroyMaps'
            }),
            destroyMap($map) {
                this.loading = true;
                this.destroyMapAction($map)
                    .then(() => {
                        const index = this.selected.findIndex(n => n.id === $map.id);
                        if (index !== -1) {
                            this.selected.splice(index, 1);
                        }
                    })
                    .finally(() => {
                        this.loading = false;
                    })
            },
            destroyMaps($maps) {
                this.loading = true;
                this.destroyMapsAction($maps)
                    .finally(() => {
                        this.loading = false;
                        this.selected = [];
                    })
            }
        }
    }
</script>
