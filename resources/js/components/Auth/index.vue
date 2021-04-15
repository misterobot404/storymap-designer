<template>
    <v-dialog
        :value="authDialog"
        max-width="420px"
        @input="v => v || HIDE_AUTH_DIALOG()"
    >
        <v-card>
            <v-toolbar height="88"
                       extended
                       flat
            >
                <v-container fill-height class="mt-4">
                    <v-spacer/>
                    <v-img
                        :src=appLogo
                        contain
                        height="48"
                        width="48"
                        max-width="48"
                    />
                    <span class="title ml-2">{{ appName }}</span>
                    <v-spacer/>
                </v-container>

                <template #extension>
                    <v-tabs
                        v-model="currentTabIndex"
                        fixed-tabs
                    >
                        <v-tab>Войти</v-tab>
                        <v-tab>Создать аккаунт</v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>
            <v-divider/>
            <v-expand-transition>
                <component v-bind:is="currentTabName" @done="done()"/>
            </v-expand-transition>
        </v-card>
    </v-dialog>
</template>

<script>
import Authorization from "./Authorization"
import Registration from "./Registration"
import {mapMutations, mapState} from 'vuex'

export default {
    name: "IndexAuth",
    components: {
        Authorization,
        Registration
    },
    data() {
        return {
            currentTabIndex: 0,
            dialog: false
        }
    },
    computed: {
        ...mapState('layout', [
            'appName',
            'appLogo',
            'authDialog'
        ]),
        ...mapState('map', {map_id : 'id'}),
        currentTabName() {
            if (this.currentTabIndex === 0) return "Authorization"
            else return "Registration"
        }
    },
    methods: {
        ...mapMutations('layout', ["HIDE_AUTH_DIALOG"]),
        done() {
            if (this.map_id !== "test")
                this.$router.push('/library');
            this.HIDE_AUTH_DIALOG();
        }
    }
}
</script>
