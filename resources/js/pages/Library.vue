<template>
    <div
        class="d-flex flex-column"
        :style="{'min-height': minHeight}"
    >
        <!-- Creation hero -->
        <v-container class="content-width">
            <v-row
                style="min-height: 144px"
                align-content="center"
            >
                <v-col style="min-width: 230px">
                    <h1 class="display-1 font-weight-medium pb-2">
                        Мои атласы
                    </h1>
                    <p class="grey--text text--darken-2 mb-0 font-weight-light">
                        Выберите атлас для редактирования, просмотра и управления.
                    </p>
                </v-col>
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
                        <v-btn
                            @click="createMap()"
                            class="ma-2"
                            large
                            color="primary"
                            rounded
                        >
                            <v-icon class="mr-1">add</v-icon>
                            Создать атлас
                        </v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>

        <!-- Grey field. Filter and maps. -->
        <v-container
            fluid
            class="flex"
            :class="{'grey lighten-4': !$vuetify.theme.dark}"
        >
            <v-container class="content-width">

                <!-- Filter -->
                <v-row class="my-5 align-center">
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

                    <v-spacer/>

                    <!-- Search -->
                    <v-text-field
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

                    <div>

                    </div>

                </v-row>

                <!-- Maps -->
                <v-row
                    dense
                    justify="center"
                    class="mt-12"
                >
                    <v-col
                        :cols="$vuetify.breakpoint.mdAndUp ? '3' : '12'"
                        v-for="map in maps"
                        :key="map.id"
                        class="mx-2 mb-4"
                    >
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                :max-width="$vuetify.breakpoint.mdAndUp ? '450' : '360'"
                                raised
                                height="100%"
                                class="mx-auto"
                                style="cursor: pointer"
                            >
                                <v-img :src="require('@/assets/images/no-image.png')">
                                    <v-expand-transition>
                                        <div
                                            v-if="hover"
                                            class="d-flex blue darken-2 v-card--reveal display-3 white--text"
                                            style="height: 100%"
                                        >
                                            OPEN
                                        </div>
                                    </v-expand-transition>
                                </v-img>
                                <div style="text-align: start;">
                                    <v-card-title style="word-break: keep-all; line-height: 1.8rem;"> {{ map.name }}</v-card-title>
                                    <v-card-subtitle> {{ map.subtitle ? map.subtitle : 'empty' }}</v-card-subtitle>
                                    <v-card-text> {{ map.description }}</v-card-text>
                                </div>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
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

    export default {
        name: "Constructor",
        components: {},
        data() {
            return {
                selectedRole: "Все атласы",

                roles: [
                    {name: "Все атласы"},
                    {name: "Автор"},
                    {name: "Разработчик"},
                    {name: "Пользователь"}
                ],
                selectedViewMode: "table",

                showScrollUpBtn: false
            }
        },
        computed: {
            ...mapState('maps', [
                'maps'
            ]),
            minHeight() {
                const height = '100vh';
                return `calc(${height} - ${this.$vuetify.application.top}px - ${this.$vuetify.application.footer}px)`
            }
        },
        methods: {
            ...mapActions('maps', [
                'getMaps',
                'createMap'
            ]),

            onScroll(e) {
                if (typeof window === 'undefined') return
                const top = window.pageYOffset || e.target.scrollTop || 0
                this.showScrollUpBtn = top > 20
            },
        },
        beforeMount() {
            this.getMaps()
        }
    }
</script>

<style lang="sass" scoped>

    .content-width
        width: 84%

</style>
