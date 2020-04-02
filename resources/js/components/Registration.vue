<template>
    <v-dialog v-model="dialog" max-width="460px">
        <template v-slot:activator="{ on }">
            <v-btn
                text
                color="primary"
                v-on="on"
            >
                Зарегистрироваться
            </v-btn>
        </template>
        <v-card>
            <v-toolbar
                color="primary"
                dark
                flat
            >
                <v-card-title>Зарегистрироваться</v-card-title>
            </v-toolbar>
            <v-card-text class="pt-2 pb-0">
                <v-form v-model="valid">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Имя пользователя"
                                          v-model="name"
                                          autocomplete="name"
                                          prepend-icon="person"
                                          :rules="[rules.name]"
                                          hint="Под этим именем вас будут знать другие пользователи MapDesigner."
                                          required/>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Эл. почта"
                                          v-model="email"
                                          autocomplete="email"
                                          prepend-icon="mail"
                                          :rules="[rules.email]"
                                          hint="Вам нужно будет подтвердить, что этот адрес электронной почты принадлежит вам."
                                          required/>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Пароль"
                                          :type="passwordShow ? 'text' : 'password'"
                                          :append-icon="passwordShow ? 'visibility_off' : 'visibility'"
                                          @click:append="passwordShow = !passwordShow"
                                          autocomplete="new-password"
                                          v-model="password"
                                          prepend-icon="lock"
                                          :rules="[rules.password]"
                                          hint="Пароль должен содержать не менее 6 символов."
                                          required/>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Подтвердите пароль"
                                          :type="passwordConfirmShow ? 'text' : 'password'"
                                          :append-icon="passwordConfirmShow ? 'visibility_off' : 'visibility'"
                                          @click:append="passwordConfirmShow = !passwordConfirmShow"
                                          v-model="passwordConfirm"
                                          prepend-icon="lock"
                                          :rules="[rules.passwordConfirm]"
                                          required/>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions class="px-6 pb-8">
                <v-spacer/>
                <v-btn color="primary"
                       :disabled="!valid || !filled"
                       @click="registration()">Зарегистироваться
                </v-btn>
                <v-spacer/>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Registration",
        data() {
            return {
                dialog: false,
                valid: true,
                name: "",
                email: "",
                password: "",
                passwordShow: false,
                passwordConfirm: "",
                passwordConfirmShow: false,
                rules: {
                    name: v => !v || v.length >= 4 && v.length <= 25 || 'Имя пользователя должно содержать от 4 до 25 символов.',
                    password: v => !v || v.length >= 6 || 'Пароль должен содержать от 6 символов.',
                    passwordConfirm: v => !v || v === this.password || 'Пароли не совпадают. Повторите попытку.',
                    email: v => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return !v || pattern.test(v) || 'Введите действующий адрес электронной почты.'
                    },
                },
            }
        },
        computed: {
            filled: function () {
                return this.name.length !== 0 && this.email.length !== 0 && this.password.length !== 0 && this.passwordConfirm.length !== 0
            }
        },
        methods: {
            registration: function () {
                this.$store.dispatch('auth/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });
                this.dialog = false;
            }
        }
    }
</script>
