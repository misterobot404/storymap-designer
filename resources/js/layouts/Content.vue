<template>
    <v-main id="main" style="min-width: 320px !important;">
        <!-- Exclude: remove component from cached -->
        <!-- $store.state.auth.token ? null : 'Library' - сбрасывать кеш компонента Library, если пользователь разлогинился -->
        <keep-alive :exclude="[$store.state.auth.token ? null : 'Library', 'Viewer', 'Constructor']">
            <!-- cached by key -->
            <router-view/>
        </keep-alive>
    </v-main>
</template>

<script>
    export default { name: "Content"}
</script>
