<template>
    <v-main style="min-width: 320px !important;">
        <!-- Max: maximum number of component instances to cache -->
        <!-- Exclude: remove component from cached -->
        <keep-alive exclude="Constructor, Viewer">
            <!-- cached by key -->
            <router-view/>
        </keep-alive>
    </v-main>
</template>

<script>
    export default {
        name: "Content"
    }
</script>
