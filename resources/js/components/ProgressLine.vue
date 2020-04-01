<template>
            <v-progress-linear
                :active="$store.state.loading.isLoading"
                :value="$store.state.loading.progress"
                absolute
                height="2"
                color="black"
                background-color="white"
                style="z-index: 99999"
            />
</template>

<script>
    export default {
        name: "ProgressLine"
    }
</script>

<style scoped>

</style>
