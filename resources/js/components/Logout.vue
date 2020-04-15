<template>
    <v-btn
        :loading="logoutProcess"
        text
        @click="logout"
    >
        Выйти
    </v-btn>
</template>

<script>
    import store from '@/store'

    export default {
        name: "Logout",
        data() {
            return {
                logoutProcess: false
            }
        },
        methods: {
            logout: function () {
                this.logoutProcess = true;

                this.$store.dispatch('auth/logout')
                    .finally(() => {
                        store.commit('auth/LOGOUT', null, {root: true});
                        this.logoutProcess = false;
                    })
            }
        }
    }
</script>

<style scoped>

</style>
