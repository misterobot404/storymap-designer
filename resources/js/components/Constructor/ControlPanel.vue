<template>
    <div class="d-flex">
        <v-btn
            v-if="!mapIsExample"
            to="/library"
            height="40"
            class="mr-2"
        >
            <v-icon class="mr-1" color="primary"> arrow_back_ios</v-icon>
            Моя библиотека
        </v-btn>
        <v-btn
            v-else
            to="/"
            height="40"
            class="mr-2 primary--text"
        >
            <v-icon class="mr-1"> home</v-icon>
            Главная
        </v-btn>
        <v-btn
            height="40"
            class="mx-2"
            @click="save()"
        >
            <v-icon
                :style="wasChanges ? '' : 'opacity: 0.76'"
                class="mr-1"
                :class="{'primary--text': wasChanges}"
            >
                save
            </v-icon>
            Сохранить
        </v-btn>
        <v-dialog
            v-model="procSave"
            overlay-opacity="0"
            persistent
            width="300"
        >
            <v-card
                color="primary"
                dark
            >
                <v-card-text class="pt-3">
                    Сохранение
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-btn
            height="40"
            class="mx-2"
            @click="recoveryMap()"
        >
            <v-icon class="mr-1" style="opacity: 0.76">
                restore
            </v-icon>
            Восстановить
        </v-btn>
        <Settings/>
        <Help/>
        <v-text-field
            dense
            single-line
            rounded
            filled
            clearable
            hide-details
            prepend-inner-icon="search"
            label="Поиск события..."
            class="mx-4"
        />
        <v-btn
            height="40"
            class="ml-2"
            @click="mapIsExample ? $router.push(`/viewer`) : $router.push({ path: `/viewer/${id}` })"
        >
            <v-icon color="primary" class="mr-1">pageview</v-icon>
            Предпросмотр
        </v-btn>
    </div>
</template>

<script>
import {mapGetters, mapActions, mapState, mapMutations} from 'vuex'
import Settings from "../Constructor/ControlPanelSettings"
import Help from "../Constructor/ControlPanelHelp"

export default {
    name: "ControlPanel",
    components: {
        Settings,
        Help
    },
    data() {
        return {
            procSave: false,
            waitUserAuth: false
        }
    },
    computed: {
        ...mapGetters('map', [
            'wasChanges'
        ]),
        ...mapGetters('auth', [
            'isAuth'
        ]),
        ...mapState('map', ['id']),
        ...mapState('layout', ["authDialog"]),
        mapIsExample() {
            return !this.$route.params.id
        }
    },
    methods: {
        ...mapActions('map', [
            'saveMap',
            'recoveryMap'
        ]),
        ...mapMutations('layout', ['SHOW_AUTH_DIALOG']),
        save() {
            if (this.isAuth) {
                this.procSave = true;
                this.saveMap().finally(() => this.procSave = false)
            }
            else {
                this.SHOW_AUTH_DIALOG();
                this.waitUserAuth = true;
            }
        }
    },
    watch: {
        authDialog(newValue, oldValue) {
            if (oldValue && !newValue && this.waitUserAuth && this.isAuth) {
                this.procSave = true;
                this.saveMap().finally(() => {
                    this.procSave = false;
                    this.waitUserAuth = false;
                })
            }
        }
    }
}
</script>
