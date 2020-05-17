<template xmlns:v-slot="http://www.w3.org/1999/xlink">
    <v-dialog v-model="dialog" max-width="420px">
        <template v-slot:activator="{ on }">
            <v-btn
                class="ml-4"
                large
                outlined
                color="primary"
                v-on="on"
            >
                <v-icon class="mr-1">account_circle</v-icon>
                Войти
            </v-btn>
        </template>
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
                <component v-bind:is="currentTabName" @done="dialog = false"/>
            </v-expand-transition>
        </v-card>
    </v-dialog>
</template>

<script>
    import Authorization from "@/components/Auth/Authorization"
    import Registration from "@/components/Auth/Registration"
    import {mapState} from 'vuex'

    export default {
        name: "Dialog",
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
            ...mapState('layout', {
                appName: state => state.appName,
                appLogo: state => state.appLogo
            }),
            currentTabName: function () {
                if (this.currentTabIndex === 0) return "Authorization"
                else return "Registration"
            }
        }
    }
</script>
