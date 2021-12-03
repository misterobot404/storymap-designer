<template>
    <v-dialog v-model="dialog" max-width="660" scrollable>
        <!-- Open dialog button -->
        <template v-slot:activator="{ on }">
            <v-btn
                v-on="on"
                height="40"
                class="mx-2"
            >
                <v-icon class="mr-1" style="opacity: 0.76">help_outline</v-icon>
                Помощь
            </v-btn>
        </template>
        <!-- Dialog -->
        <v-card>
            <!-- Header -->
            <v-toolbar
                height="68"
                flat
                class="pr-1"
            >
                <v-icon large class="mr-2">help_outline</v-icon>
                <v-toolbar-title> Помощь</v-toolbar-title>
                <v-spacer/>
                <v-btn
                    icon
                    @click="dialog = false"
                >
                    <v-icon> close </v-icon>
                </v-btn>
            </v-toolbar>
            <v-divider/>
            <!-- Body -->
            <v-card-text class="pb-0">
                <v-form ref="form">
                    <v-container class="py-1">
                        <v-stepper
                            vertical
                            non-linear
                            class="elevation-0"
                        >
                            <v-stepper-step editable step="1">
                                Установите подложку
                                <small>Стандартную или пользовательскую</small>
                            </v-stepper-step>
                            <v-stepper-content step="1">
                                <v-img contain max-height="100%" :src="require('@/assets/help/part-1.gif').default" class="mb-8"/>
                            </v-stepper-content>

                            <v-stepper-step editable step="2">Добавьте событие</v-stepper-step>
                            <v-stepper-content step="2">
                                <v-img contain max-height="100%" :src="require('@/assets/help/part-2.gif').default" class="mb-8"/>
                            </v-stepper-content>

                            <v-stepper-step editable step="3">Установите название и описание</v-stepper-step>
                            <v-stepper-content step="3">
                                <v-img contain max-height="100%" :src="require('@/assets/help/part-3.gif').default" class="mb-8"/>
                            </v-stepper-content>

                            <v-stepper-step editable step="4">Установите нужные медиа-обьекты к описываемому событию</v-stepper-step>
                            <v-stepper-content step="4">
                                <v-img max-height="100%" contain :src="require('@/assets/help/part-4.gif').default" class="mb-8"/>
                            </v-stepper-content>

                            <v-stepper-step editable step="5">
                                Установите метку на информационной карте
                                <small>Иконки и размер меток можно изменять</small>
                            </v-stepper-step>
                            <v-stepper-content step="5">
                                <v-img contain max-height="100%" :src="require('@/assets/help/part-5.gif').default" class="mb-8"/>
                            </v-stepper-content>

                            <v-stepper-step editable step="6">
                                Сохранить и поделиться атласом
                                <small>Разместить атлас на нужном веб-ресурсе</small>
                            </v-stepper-step>
                            <v-stepper-content step="6">
                                <v-img contain max-height="100%" :src="require('@/assets/help/part-6.gif').default" class="mb-8"/>
                            </v-stepper-content>
                        </v-stepper>
                    </v-container>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "ControlPanelHelp",
        data() {
            return {
                dialog: false
            }
        }
    }
</script>
