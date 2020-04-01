<template>
    <div style="position: absolute; right: 10px">

        <v-alert
            v-for="(error,index) in $store.state.alerts.errors"
            :key=index
            value
            dense
            dismissible
            style="width: fit-content;  position: relative; top: 10px;"
            class=""
            type="error"
        >
            {{ error }}
        </v-alert>

    </div>
</template>

<script>
    export default {
        name: "Alerts"
    }
</script>

<style scoped>

</style>
