<template>
    <div
        class="d-flex flex-column"
        :style="{'min-height': minHeight}"
    >
        <!-- Hero. Creat map / folder -->
        <v-container class="content-width">
            <v-row
                style="min-height: 144px"
                align-content="center"
            >
                <!-- Hero -->
                <v-col style="min-width: 230px">
                    <h1 class="display-1 font-weight-medium pb-2">
                        Мои атласы
                    </h1>
                    <p class="grey--text text--darken-2 mb-0 font-weight-light">
                        Выберите атлас для редактирования, просмотра и управления.
                    </p>
                </v-col>
                <!-- Creat map / folder -->
                <v-col>
                    <v-row
                        class="align-center"
                        :class="[$vuetify.breakpoint.xs ? 'justify-center' : 'justify-end']"
                        style="height: 100%"
                    >
                        <v-btn
                            class="ma-2"
                            large
                            color="primary"
                            outlined
                            rounded
                        >
                            <v-icon class="mr-1">create_new_folder</v-icon>
                            Создать папку
                        </v-btn>
                        <!-- ModalDialog. Create map -->
                        <CreateMapDialog/>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <!-- Grey field. Filter and maps. -->
        <v-container
            fluid
            class="flex d-flex"
            :class="{'grey lighten-4': !$vuetify.theme.dark}"
        >
            <v-container class="content-width d-flex flex-column">
                <!-- Filter -->
                <v-row
                    class="my-5 align-center"
                    style="flex: none"
                >
                    <!-- Roles -->
                    <v-btn
                        v-for="(role, index) in roles"
                        :key="index"
                        text
                        rounded
                        small
                        class="mx-1 my-1"
                        :class="{ 'v-btn--active' : role.name === selectedRole }"
                        @click="selectedRole = role.name"
                    >
                        {{role.name}}
                    </v-btn>
                    <!-- space -->
                    <v-spacer/>
                    <!-- Search -->
                    <v-text-field
                        v-model.trim="search"
                        dense
                        flat
                        rounded
                        solo-inverted
                        clearable
                        hide-details
                        prepend-inner-icon="search"
                        label="Поиск по атласам..."
                        style="max-width: 400px"
                        class="my-2 mx-1"
                    />
                    <!-- separation -->
                    <v-divider
                        class="mx-3 my-auto hidden-md-and-down"
                        style="height: 38px"
                        inset
                        vertical
                    />
                    <!-- View mode -->
                    <v-btn-toggle
                        v-model="selectedViewMode"
                        color="primary"
                        class="my-1 mx-1"
                        :class="{ 'mx-auto' : $vuetify.breakpoint.mdAndDown}"
                        dense
                        mandatory
                    >
                        <v-tooltip top open-delay="200">
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    value="table"
                                    v-on="on"
                                    text
                                >
                                    <v-icon>border_all</v-icon>
                                </v-btn>
                            </template>
                            <span>Показать таблицей</span>
                        </v-tooltip>
                        <v-tooltip top open-delay="200">
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    value="list"
                                    v-on="on"
                                    text
                                >
                                    <v-icon>reorder</v-icon>
                                </v-btn>
                            </template>
                            <span>Показать списком</span>
                        </v-tooltip>
                    </v-btn-toggle>
                </v-row>
                <!-- Loading -->
                <template v-if="loadingMaps">
                    <div
                        class="justify-center align-center d-flex"
                        style="flex:1"
                    >
                        <v-progress-circular
                            indeterminate
                            :size="50"
                            color="primary"
                        />
                    </div>
                </template>
                <!-- Maps empty -->
                <template v-else-if="maps.length === 0">
                    <v-row align="center" justify="center" class="flex-column my-6 mx-2">
                        <v-img
                            max-width="300"
                            max-height="300"
                            style="opacity: 0.92"
                            :src="require('@/assets/images/no-data-icon.png')"
                            contain
                        />
                        <div class="mb-4 headline font-weight-medium">У вас еще нет атласов.</div>
                    </v-row>
                </template>
                <!-- Maps -->
                <template v-else>
                    <keep-alive>
                        <!-- Table mode -->
                        <template v-if="selectedViewMode === 'table'">
                            <TableMaps :maps="filteredMaps"/>
                        </template>
                        <!-- List mode -->
                        <template v-else>
                            <ListMaps :maps="filteredMaps"/>
                        </template>
                    </keep-alive>
                </template>
            </v-container>
        </v-container>

        <!-- Floating button. Scroll up -->
        <v-fab-transition>
            <v-btn
                v-scroll="onScroll"
                v-show="showScrollUpBtn"
                x-large
                fab
                dark
                fixed
                bottom
                right
                color="primary"
                @click="$vuetify.goTo(0)"
            >
                <v-icon>keyboard_arrow_up</v-icon>
            </v-btn>
        </v-fab-transition>
    </div>
</template>

<script>
    import {mapState, mapActions} from "vuex"
    import CreateMapDialog from "@/components/Library/CreateMapDialog"
    import TableMaps from "@/components/Library/TableMaps"
    import ListMaps from "@/components/Library/ListMaps"

    export default {
        name: "Constructor",
        components: {
            CreateMapDialog,
            TableMaps,
            ListMaps
        },
        data() {
            return {
                // Roles
                selectedRole: localStorage.getItem("Library.selectedRole") !== null ? localStorage.getItem("Library.selectedRole") : "Все атласы",
                roles: [
                    {name: "Все атласы"},
                    {name: "Автор"},
                    {name: "Разработчик"},
                    {name: "Пользователь"}
                ],
                // Other
                selectedViewMode: localStorage.getItem("Library.selectedViewMode") !== null ? localStorage.getItem("Library.selectedViewMode") : "table",
                showScrollUpBtn: false,
                loadingMaps: false,
                search: ""
            }
        },
        computed: {
            ...mapState('maps', [
                'maps'
            ]),
            // Min grey height
            minHeight() {
                const height = '100vh';
                return `calc(${height} - ${this.$vuetify.application.top}px - ${this.$vuetify.application.footer}px)`
            },
            // Search filter
            filteredMaps: function () {
                if (this.search) {
                    let name = this.search;
                    return this.maps.filter(function (elem) {
                        if (name === '') return true;
                        else return elem.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
                    })
                } else return this.maps;
            }
        },
        watch: {
            selectedViewMode(val) {
                localStorage.setItem("Library.selectedViewMode", val)
            },
            selectedRole(val) {
                localStorage.setItem("Library.selectedRole", val)
            }
        },
        methods: {
            ...mapActions('maps', [
                'getMaps'
            ]),

            // showScrollUpBtn
            onScroll(e) {
                if (typeof window === 'undefined') return
                const top = window.pageYOffset || e.target.scrollTop || 0
                this.showScrollUpBtn = top > 20
            },
        },
        // Load maps
        async beforeMount() {
            this.loadingMaps = true;
            await this.getMaps()
                .finally(() => {
                    this.loadingMaps = false;
                })
        }
    }
</script>

<style lang="sass" scoped>
    .content-width
        width: 84%
</style>
