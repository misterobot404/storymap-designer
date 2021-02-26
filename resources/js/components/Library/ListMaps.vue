<template>
    <!-- Table -->
    <v-data-table
        v-model="selected"
        :loading="loading"
        :headers="headers"
        :items="mapsWithSubjectNames"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
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
                        <span class="subtitle-1">Выбрано: {{ selected.length }}</span>
                        <v-divider
                            class="mt-0 ml-8 mr-4"
                            vertical
                            inset
                        />
                        <ListMapsSetSubjectForMaps :selected-maps="selected"/>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    @click="lDestroyMaps(selected)"
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
                @click="lDestroyMap(item)"
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
import {mapActions, mapState} from "vuex"
import ListMapsSetSubjectForMaps from "./ListMapsSetSubjectForMapsDialog";

export default {
    name: "ListMaps",
    components: {
        ListMapsSetSubjectForMaps
    },
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
                {text: 'Категория', value: 'subject_name'},
                {text: 'Дата создания', value: 'created_at'},
                {text: 'Дата обновления', value: 'updated_at'},
                {text: 'Действия', value: 'actions', sortable: false, align: 'center'},
                {text: '', value: 'data-table-expand'},
            ],
            loading: false,
            sortBy: 'updated_at',
            sortDesc: true,
        }
    },
    computed: {
        ...mapState('subjects', ['subjects']),
        mapsWithSubjectNames() {
            let temp_maps = [...this.maps];
            temp_maps.forEach(map => map.subject_name = (this.subjects.find(el => el.id === map.subject_id)).name);
            return temp_maps;
        }
    },
    methods: {
        ...mapActions('maps', ['destroyMap', 'destroyMaps']),
        lDestroyMap($map) {
            this.loading = true;
            this.destroyMap($map)
                .then(_ => {
                    const index = this.selected.findIndex(n => n.id === $map.id);
                    if (index !== -1) {
                        this.selected.splice(index, 1);
                    }
                })
                .finally(() => {
                    this.loading = false;
                })
        },
        lDestroyMaps($maps) {
            this.loading = true;
            this.destroyMaps($maps)
                .then(_ => this.selected = [])
                .finally(() => this.loading = false)
        }
    }
}
</script>
