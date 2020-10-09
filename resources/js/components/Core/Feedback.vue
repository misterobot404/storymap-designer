<template>
    <v-dialog v-model="model_feedbackDialog"
              transition="none"
              persistent
              no-click-animation
              hide-overlay
    >
        <!-- Dialog -->
        <v-card style="position: absolute; bottom: 20px; right: 20px; max-width: 440px;">
            <!-- Header -->
            <v-toolbar
                height="68"
                flat
                class="pr-1"
            >
                <v-icon
                    large
                    class="mr-2"
                    color="primary"
                >
                    feedback
                </v-icon>
                <v-toolbar-title> Обратная связь</v-toolbar-title>
                <v-spacer/>
                <v-btn
                    icon
                    @click="HIDE_FEEDBACK_DIALOG()"
                >
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-divider/>
            <!-- Body -->
            <v-card-text class="pb-0">
                <v-form ref="form">
                    <v-container class="pb-0">
                        <v-row>
                            <v-col cols="12" class="pb-0 pt-3">
                                <v-text-field
                                    label="Как Вас зовут?"
                                    filled
                                    v-model.trim="name"
                                    prepend-icon="person"
                                    :rules="[ v => !!v || 'Введите Ваше имя' ]"
                                    required
                                />
                            </v-col>
                            <v-col cols="12" class="pb-0 pt-1">
                                <v-text-field
                                    label="Ваш Email"
                                    filled
                                    v-model.trim="email"
                                    prepend-icon="mail"
                                    :rules="[
                                        v => !!v || 'Введите Email',
                                        v => /.+@.+/.test(v) || 'Email введён не верно.'
                                    ]"
                                    required
                                />
                            </v-col>
                            <v-col cols="12" class="pb-0 pt-1">
                                <v-textarea
                                    filled
                                    label="Опишите проблему или задайте вопрос"
                                    v-model.trim="message"
                                    :rules="[v => !!v || 'Это обязательное поле']"
                                    required
                                />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card-text>
            <v-divider/>
            <!-- Footer -->
            <v-card-actions class="px-9 py-4">
                <v-btn
                    text
                    @click="clearField()"
                >
                    Очистить
                </v-btn>
                <v-spacer/>
                <v-btn
                    class="px-7"
                    color="primary"
                    outlined
                    :loading="loading"
                    @click="sendMail()"
                >
                    Отправить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
    name: "Feedback",
    data() {
        return {
            loading: false,
            name: "",
            email: "",
            message: ""
        }
    },
    computed: {
        model_feedbackDialog: {
            get() {
                return this.feedbackDialog
            },
            set() {
                this.HIDE_FEEDBACK_DIALOG()
            }
        },
        ...mapState('layout', ["feedbackDialog"])
    },
    methods: {
        ...mapMutations('layout', ["HIDE_FEEDBACK_DIALOG"]),
        sendMail() {
            if (this.$refs.form.validate()) {
                this.loading = true;


                // ('maps/sendMessage', {
                //     name: this.name,
                //     email: this.email,
                //     message: this.message
                // })
                //     .then(() => {
                //         this.dialog = false;
                //         this.clearField();
                //     })
                //     .finally(() => {
                //         this.loading = false;
                //     })
            }
        },
        clearField() {
            this.$refs.form.reset()
        },
    }
}
</script>
