<template>
    <v-main id="main" style="min-width: 320px !important;">
        <!-- Max: maximum number of component instances to cache -->
        <!-- Exclude: remove component from cached -->
        <keep-alive :exclude="['Constructor', 'Viewer']">
            <!-- cached by key -->
            <router-view/>
        </keep-alive>

        <!-- Other -->
        <Feedback/>
    </v-main>
</template>

<script>
    import Feedback from "@/components/Core/Feedback"

    export default {
        name: "Content",
        components: {Feedback}
    }
</script>
