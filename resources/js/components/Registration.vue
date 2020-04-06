<template>
    <v-dialog v-model="dialog" max-width="420px">
        <template v-slot:activator="{ on }">
            <v-btn
                text
                color="primary"
                v-on="on"
            >
                Регистрация
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
                            <v-text-field v-model="name"
                                          @input="inputName"
                                          :error-messages="nameError"
                                          :loading="nameLoading"
                                          :rules="rules.name"
                                          label="Имя пользователя"
                                          autocomplete="name"
                                          prepend-icon="person"
                                          hint="Под этим именем вас будут знать другие пользователи MapDesigner."
                                          required/>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="email"
                                          label="Эл. почта"
                                          autocomplete="email"
                                          prepend-icon="mail"
                                          :rules="rules.email"
                                          hint="Вам нужно будет подтвердить, что этот адрес электронной почты принадлежит вам."
                                          required/>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="password"
                                          label="Пароль"
                                          :type="passwordShow ? 'text' : 'password'"
                                          :append-icon="passwordShow ? 'visibility_off' : 'visibility'"
                                          @click:append="passwordShow = !passwordShow"
                                          autocomplete="new-password"
                                          prepend-icon="lock"
                                          :rules="rules.password"
                                          hint="Пароль должен содержать не менее 6 символов."
                                          required/>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="passwordConfirm"
                                          label="Подтвердите пароль"
                                          :type="passwordConfirmShow ? 'text' : 'password'"
                                          :append-icon="passwordConfirmShow ? 'visibility_off' : 'visibility'"
                                          @click:append="passwordConfirmShow = !passwordConfirmShow"
                                          prepend-icon="lock"
                                          :rules="rules.passwordConfirm"
                                          required/>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions class="px-6 pb-6">
                <v-btn color="primary"
                       block
                       :loading="registrationProcess"
                       :disabled="!valid || !filled || nameLoading || nameInputSuccessful"
                       @click="registration()">Зарегистироваться
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import debounce from "lodash/debounce";

    export default {
        name: "Registration",
        data() {
            return {
                dialog: false,
                valid: false,

                registrationProcess: false,

                name: "",
                nameInputSuccessful: false,
                nameLoading: false,
                nameError: "",
                email: "",
                password: "",
                passwordShow: false,
                passwordConfirm: "",
                passwordConfirmShow: false,

                rules: {
                    name: [
                        v => !v || RegExp('^[A-Za-zА-Яа-я0-9]+( [A-Za-zА-Яа-я0-9]+)*$').test(v) || 'Имя пользователя должно содержать только буквы и цифры.',
                        v => !v || v.length >= 4 && v.length <= 30 || 'Имя пользователя должно содержать от 4 до 30 символов.',
                        // workaround for delayed asynchronous data validation
                        v => {
                            this.nameError = '';
                            if (v && RegExp('^[A-Za-zА-Яа-я0-9]+( [A-Za-zА-Яа-я0-9]+)*$').test(v) && v.length >= 4 && v.length <= 30) this.nameInputSuccessful = true;
                            return true
                        }
                    ],
                    email: [v => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return !v || pattern.test(v) || 'Введите действующий адрес электронной почты.'
                    }],
                    password: [v => !v || v.length >= 6 || 'Пароль должен содержать от 6 символов.'],
                    passwordConfirm: [v => !v || v === this.password || 'Пароли не совпадают. Повторите попытку.']
                }
            }
        },
        computed: {
            filled: function () {
                return this.name.length !== 0 && this.email.length !== 0 && this.password.length !== 0 && this.passwordConfirm.length !== 0
            }
        },
        methods: {
            registration: function () {

                this.registrationProcess = true;

                this.$store.dispatch('auth/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });

                this.registrationProcess = false;
                this.dialog = false;
            },

            // waiting for user input to finish
            inputName: debounce(function (v) {
                // if the input was successful this.nameLoading will be TRUE
                if (this.nameInputSuccessful) {
                    this.nameLoading = true;

                    // verification via api
                    this.$store.dispatch('auth/checkRegistrationName', {name: v})
                        .then(({data}) => {
                            if (data.status !== 200 && data.name === this.name)
                                this.nameError = 'Это имя пользователя недоступно.';
                        })
                        .finally(() => {
                            this.nameLoading = false;
                        });

                    this.nameInputSuccessful = false;
                }
            }, 600) // time to last input
        }
    }
</script>
