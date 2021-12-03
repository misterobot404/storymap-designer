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
                        <SubjectCreateDialog/>
                        <MapCreateDialog/>
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
                    <!-- Subjects -->
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
                                <v-list-item style="height: 48px !important">
                                    <v-list-item-title>Все</v-list-item-title>
                                    <v-list-item-action @click.stop v-show="loadingSubjects">
                                        <v-btn icon small loading></v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                                <template v-for="(subject, index) in subjects">
                                    <v-hover v-slot="{ hover }">
                                        <v-list-item :disabled="loadingSubjects" :key="index" style="height: 48px !important">
                                            <v-list-item-title>{{ subject.name }}</v-list-item-title>
                                            <v-list-item-action @click.stop>
                                                <v-btn
                                                    @click="openEditSubjectDialog(subject)"
                                                    :style="hover ? 'opacity: 1' : 'opacity: 0'"
                                                    icon
                                                >
                                                    <v-icon>edit</v-icon>
                                                </v-btn>
                                            </v-list-item-action>
                                            <v-list-item-action @click.stop>
                                                <v-btn
                                                    @click="lDeleteSubject(subject.id)"
                                                    :style="hover ? 'opacity: 1' : 'opacity: 0'"
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
                        v-model="viewMode"
                        color="primary"
                        class="my-1 mx-1"
                        :class="{ 'mx-auto' : $vuetify.breakpoint.mdAndDown}"
                        dense
                        mandatory
                    >
                        <v-tooltip top open-delay="200">
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    value="grid"
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
                                    value="table"
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
                            :src="require('@/assets/no-data-icon.png').default"
                            contain
                        />
                        <div class="mb-4 headline font-weight-medium">У вас еще нет атласов</div>
                    </v-row>
                </template>
                <!-- Maps empty after filtering -->
                <template v-else-if="!filteredMapsBySubjectAndSearch.length && viewMode === 'grid'">
                    <v-row align="center" justify="center" class="flex-column my-6 mx-2">
                        <v-img
                            max-width="400"
                            max-height="300"
                            :src="require('@/assets/no-data-filtered-icon.png').default"
                            contain
                        />
                        <div class="mb-4 headline font-weight-medium">Ничего не найдено</div>
                    </v-row>
                </template>
                <!-- Maps -->
                <template v-else>
                    <!-- Table / List mode -->
                    <keep-alive>
                        <MapsGrid v-if="viewMode === 'grid'" :maps="filteredMapsBySubjectAndSearch"/>
                        <MapsTable v-else :maps="filteredMapsBySubject" :search="search"/>
                    </keep-alive>
                </template>
            </v-container>
        </v-container>

        <ShareMapDialog/>
        <SubjectEditDialog
            :show-edit-subject-dialog.sync="showEditSubjectDialog"
            :editable-subject="editableSubject"
        />
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
import {mapState, mapActions} from "vuex"
import MapCreateDialog from "../components/Library/MapCreateDialog"
import SubjectCreateDialog from "../components/Library/SubjectCreateDialog"
import SubjectEditDialog from "../components/Library/SubjectEditDialog"
import MapsGrid from "../components/Library/MapsGrid"
import MapsTable from "../components/Library/MapsTable"
import ShareMapDialog from "../components/Library/ShareMapDialog"

export default {
    name: "Library",
    components: {
        MapCreateDialog,
        SubjectCreateDialog,
        ShareMapDialog,
        SubjectEditDialog,
        MapsGrid,
        MapsTable
    },
    data() {
        return {
            // Roles
            selectedRole: localStorage.getItem("librarySelectedRole") !== null ? localStorage.getItem("librarySelectedRole") : "Все атласы",
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
            viewMode: localStorage.getItem("libraryViewMode") !== null ? localStorage.getItem("libraryViewMode") : "grid",
            showScrollUpBtn: false,
            loadingMaps: false,
            loadingSubjects: false,
            // Subjects
            showEditSubjectDialog: false,
            editableSubject: null,

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
        filteredMapsBySubjectAndSearch() {
            let filteredMaps = this.maps;

            // search filter
            if (this.search)
                filteredMaps = this.maps.filter(el => el.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1)

            // subject filter
            if (this.selectedSubjectIndex)
                filteredMaps = filteredMaps.filter(el => el.subject_id === this.subjects[this.selectedSubjectIndex - 1].id)

            return filteredMaps;
        },
        filteredMapsBySubject() {
            let filteredMaps = this.maps;

            // subject filter
            if (this.selectedSubjectIndex)
                filteredMaps = filteredMaps.filter(el => el.subject_id === this.subjects[this.selectedSubjectIndex - 1].id)

            return filteredMaps;
        }
    },
    watch: {
        viewMode(val) {
            localStorage.setItem("libraryViewMode", val)
        },
        selectedRole(val) {
            localStorage.setItem("librarySelectedRole", val)
        }
    },
    methods: {
        ...mapActions('maps', ['getMaps']),
        ...mapActions('subjects', ['deleteSubject']),

        // showScrollUpBtn
        onScroll(e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset || e.target.scrollTop || 0
            this.showScrollUpBtn = top > 20
        },
        openEditSubjectDialog(subject) {
            this.editableSubject = subject;
            this.showEditSubjectDialog = true;
        },
        lDeleteSubject($id) {
            this.loadingSubjects = true;
            this.deleteSubject($id)
                .finally(() => { this.loadingSubjects = false })
        }
    },
    // Load maps
    async beforeMount() {
        this.loadingMaps = true;
        await this.getMaps()
            .finally(() => { this.loadingMaps = false })
    }
}
</script>

<style lang="sass" scoped>
.content-width
    width: 84%
</style>
