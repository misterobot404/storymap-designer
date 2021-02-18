<template>
    <div
        class="d-flex flex-column"
        :style="{'min-height': minHeight}"
    >
        <!-- Hero. Creat map / folder -->
        <v-container class="content-width">
            <v-row
                style="min-height: 168px"
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
                <v-col align-self="center">
                    <v-row
                        :class="[$vuetify.breakpoint.xs ? 'justify-center' : 'justify-end']"
                        style="height: 100%"
                    >
                        <CreateSubjectDialog/>
                        <!-- ModalDialog. Create map -->
                        <CreateMapDialog/>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <!-- Grey field. Filter and maps. -->
        <v-container
            fluid
            class="flex d-flex py-0"
            :class="{'grey lighten-4': !$vuetify.theme.dark}"
        >
            <v-container class="pb-0 content-width d-flex flex-column">
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
                        {{ role.name }}
                    </v-btn>
                    <!-- space -->
                    <v-spacer/>
                    <!-- Search -->
                    <v-text-field
                        v-model.trim="search"
                        dense
                        single-line
                        rounded
                        filled
                        clearable
                        hide-details
                        prepend-inner-icon="search"
                        label="Поиск атласа..."
                        class="my-2 mx-1"
                        style="max-width: 400px"
                    />
                    <!-- separation -->
                    <v-divider
                        class="mx-3 my-auto hidden-md-and-down"
                        style="height: 38px"
                        inset
                        vertical
                    />
                    <v-menu
                        transition="slide-y-transition"
                        offset-y
                        bottom
                    >
                        <template v-slot:activator="{ on: menu }">
                            <v-tooltip top>
                                <template v-slot:activator="{ on: tooltip }">
                                    <v-btn
                                        v-on="{ ...tooltip, ...menu }"
                                        style="text-transform: unset !important; opacity: 0.87"
                                        text
                                        class="mr-2"
                                    >
                                        <span class="hidden-lg-and-down"> Категория:&nbsp; </span>
                                        <span v-if="selectedSubjectIndex"> {{ subjects[selectedSubjectIndex - 1].name }} </span>
                                        <span v-else> Все </span>
                                    </v-btn>
                                </template>
                                <span>Выбор категории</span>
                            </v-tooltip>
                        </template>
                        <v-list>
                            <v-list-item-group v-model="selectedSubjectIndex">
                                <v-list-item>
                                    <v-list-item-title>Все</v-list-item-title>
                                </v-list-item>
                                <template v-for="(subject, index) in subjects">
                                    <v-hover v-slot="{ hover }">
                                        <v-list-item :key="index">
                                            <v-list-item-title>{{ subject.name }}</v-list-item-title>
                                            <v-list-item-action @click.stop>
                                                <v-btn
                                                    v-show="hover"
                                                    @click=""
                                                    icon
                                                >
                                                    <v-icon>close</v-icon>
                                                </v-btn>
                                            </v-list-item-action>
                                        </v-list-item>
                                    </v-hover>
                                </template>
                            </v-list-item-group>
                        </v-list>
                    </v-menu>
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
                                    <v-icon style="opacity: 0.87">view_module</v-icon>
                                </v-btn>
                            </template>
                            <span>Показать плитками</span>
                        </v-tooltip>
                        <v-tooltip top open-delay="200">
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    value="list"
                                    v-on="on"
                                    text
                                >
                                    <v-icon style="opacity: 0.87">reorder</v-icon>
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
                            :size="64"
                            color="primary"
                        />
                    </div>
                </template>
                <!-- Maps empty -->
                <template v-else-if="!maps.length">
                    <v-row align="center" justify="center" class="flex-column my-6 mx-2">
                        <v-img
                            max-width="300"
                            max-height="300"
                            style="opacity: 0.92"
                            :src="require('@/assets/images/no-data-icon.png')"
                            contain
                        />
                        <div class="mb-4 headline font-weight-medium">У вас еще нет атласов</div>
                    </v-row>
                </template>
                <!-- Maps empty after filtering -->
                <template v-else-if="!filteredMaps.length">
                    <v-row align="center" justify="center" class="flex-column my-6 mx-2">
                        <v-img
                            max-width="400"
                            max-height="300"
                            :src="require('@/assets/images/no-data-filtered-icon.png')"
                            contain
                        />
                        <div class="mb-4 headline font-weight-medium">Ничего не найдено</div>
                    </v-row>
                </template>
                <!-- Maps -->
                <template v-else>
                    <!-- Table / List mode -->
                    <keep-alive>
                        <component :is="selectedViewMode === 'table' ? 'GridMaps' : 'ListMaps'" :maps="filteredMaps"/>
                    </keep-alive>
                </template>
            </v-container>
        </v-container>

        <!-- Floating button. Scroll up -->
        <v-fab-transition>
            <v-btn
                v-scroll="onScroll"
                v-show="showScrollUpBtn"
                fab
                dark
                fixed
                bottom
                right
                color="primary"
                style="bottom: 100px; right: 24px"
                @click="$vuetify.goTo(0)"
            >
                <v-icon>keyboard_arrow_up</v-icon>
            </v-btn>
        </v-fab-transition>
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from "vuex"
import CreateMapDialog from "@/components/Library/CreateMapDialog"
import CreateSubjectDialog from "@/components/Library/CreateSubjectDialog"
import GridMaps from "@/components/Library/GridMaps"
import ListMaps from "@/components/Library/ListMaps"

export default {
    name: "Library",
    components: {
        CreateMapDialog,
        CreateSubjectDialog,
        GridMaps,
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
            // Filters
            search: "",
            selectedSubjectIndex: 0,
            // Other
            selectedViewMode: localStorage.getItem("Library.selectedViewMode") !== null ? localStorage.getItem("Library.selectedViewMode") : "table",
            showScrollUpBtn: false,
            loadingMaps: false
        }
    },
    computed: {
        ...mapState({
            maps: state => state.maps.maps,
            subjects: state => state.subjects.subjects,
        }),
        // Min grey height
        minHeight() {
            const height = '100vh';
            return `calc(${height} - ${this.$vuetify.application.top}px - ${this.$vuetify.application.footer}px)`
        },
        // Filter
        filteredMaps() {
            let filteredMaps = this.maps;
            // search filter
            if (this.search) {
                filteredMaps = this.maps.filter(el => {
                    return el.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
                })
            }
            // subject filter
            if (this.selectedSubjectIndex) {
                filteredMaps = filteredMaps.filter(el => {
                    return el.subject === this.subjects[this.selectedSubjectIndex - 1].name;
                })
            }
            return filteredMaps;
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
        ...mapActions('subjects', [
            ''
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
