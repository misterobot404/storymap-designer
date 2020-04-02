<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn
                text
                color="primary"
                v-on="on"
            >
                Войти
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">Войти</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Email*" v-model="email" required/>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Password*" type="password" v-model="password" required/>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn color="blue darken-1" text @click="dialog = false">Закрыть</v-btn>
                <v-btn color="blue darken-1" text @click="auth()">Войти</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Authorization",
        data() {
            return {
                dialog: false,
                email: "",
                password: ""
            }
        },
        methods: {
            auth: function () {
                this.$store.dispatch('auth/login', {
                    email: this.email,
                    password: this.password
                });
                this.dialog = false;
            }
        }
    }
</script>
