<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
            <v-btn
                height="40"
                class="mx-2"
                v-on="on"
            >
                <v-icon class="mr-1" style="opacity: 0.76"> settings </v-icon>
                Настройки
            </v-btn>
        </template>
        <v-card>
            <v-toolbar dark color="primary" style="border-radius: 0 !important;">
                <v-btn icon dark @click="dialog = false">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Настройки</v-toolbar-title>
            </v-toolbar>
            <v-list three-line subheader>
                <v-subheader>Настройки интерфейса</v-subheader>
                <v-list-item>
                    <v-list-item>
                        <v-list-item-action>
                            <v-switch :input-value="this.$vuetify.theme.dark"
                                      prepend-icon="nights_stay"
                                      @change="CHANGE_THEME()"
                            />
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Тёмная тема</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Password</v-list-item-title>
                        <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list three-line subheader>
                <v-subheader>General</v-subheader>
                <v-list-item>
                    <v-list-item-action>
                        <v-checkbox v-model="notifications"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Notifications</v-list-item-title>
                        <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                        <v-checkbox v-model="sound"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Sound</v-list-item-title>
                        <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                        <v-checkbox v-model="widgets"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Auto-add widgets</v-list-item-title>
                        <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-dialog>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: "Settings",
        data () {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
            }
        },
        methods: {
            ...mapMutations('layout', [
                'CHANGE_THEME',
            ])
        }
    }
</script>
