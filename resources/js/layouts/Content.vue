<template>
    <v-content style="min-width: 320px !important;">
        <keep-alive>
            <router-view/>
        </keep-alive>
    </v-content>
</template>

<script>
    export default {
        name: "Content"
    }
</script>
