<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
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
            <v-card-title>
                <span class="headline">Зарегистрироваться</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Логин*" v-model="login" hint="Не менее 4 символов" required/>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Email*" v-model="email" required/>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Пароль*" type="password" v-model="password" hint="Не менее 4 символов"
                                          required/>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn color="blue darken-1" text @click="dialog = false">Закрыть</v-btn>
                <v-btn color="blue darken-1" text @click="registration()">Зарегистироваться</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "RegistrationDialog",
        data () {
            return {
                dialog: false,
                login: "",
                email: "",
                password: "",
                // rules: {
                //     required: value => !!value || 'Required.',
                //     min: v => v.length >= 4 || 'Min 4 characters',
                //     email: value => true
                // },
            }
        },
        methods: {
            registration: function () {
                this.$store.dispatch('auth/register', {
                    name: this.login,
                    email: this.email,
                    password: this.password
                });
                this.dialog = false;
            }
        }
    }
</script>
