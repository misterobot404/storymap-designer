<template>
    <div class="d-flex mb-3">
        <v-btn
            to="/library"
            height="40"
            depressed
            class="mr-2"
        >
            <v-icon class="mr-1"> arrow_back_ios </v-icon>
            Моя библиотека
        </v-btn>
        <v-btn
            height="40"
            class="mx-2"
            depressed
        >
            <v-icon class="mr-1" style="opacity: 0.77"> save </v-icon>
            Сохранить
        </v-btn>
        <Settings/>
        <Help/>
        <v-text-field
            dense
            single-line
            rounded
            filled
            clearable
            hide-details
            prepend-inner-icon="search"
            label="Поиск событий..."
            class="mx-4"
        />
        <v-btn
            height="40"
            class="ml-2"
            depressed
        >
            <v-icon class="mr-1" style="opacity: 0.77">pageview</v-icon>
            Предпросмотр
        </v-btn>
    </div>
</template>

<script>
    import Settings from "@/components/Constructor/ControlPanelSettings"
    import Help from "@/components/Constructor/ControlPanelHelp"

    export default {
        name: "ControlPanel",
        components: {
            Settings,
            Help
        },
        data() {
            return {
                procSave: false,
            }
        },
    }
</script>

<style scoped>

</style>
