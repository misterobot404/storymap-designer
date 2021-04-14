<template>
    <div style="position: relative; overflow: hidden; width: 100%; height: 100vh;">
        <!-- Map -->
        <Map style="position: absolute; z-index: 0"/>
        <!-- Content -->
        <div
            style="position: absolute; right: 100px; height: 100vh; width: 34vw; z-index: 1; pointer-events: none"
            class="d-flex flex-column justify-center"
        >
            <div class="pa-4 d-flex flex-column text-center" style="max-height: 90vh; background-color:rgba(225, 225, 225, 0.7); pointer-events: all; overflow: hidden">
                <MediaContent height="38vh" style="flex-shrink: 0"/>
                <div class="display-1 mx-6 mt-6">{{ selectedEvent.title }}</div>
                <div
                    style="overflow-y: auto;"
                    class="mx-6 mt-4"
                    v-html="selectedEvent.description"
                />
            </div>
        </div>
    </div>
</template>

<script>
import store from "../store"
import {mapGetters, mapMutations} from "vuex"
import Map from "../components/Viewer/Map"
import MediaContent from "../components/MediaContentForEvent"

export default {
    name: "Viewer",
    components: {
        Map,
        MediaContent
    },
    computed: {
        ...mapGetters('map', ['selectedEvent', 'wasChanges'])
    },
    methods: {
        ...mapMutations('map', [
            'SET_SELECTED_EVENT_ID',
            'SET_TILE_CENTER'
        ]),
        // Вызов подтверждения при закрытии конструктора с несохраненными изменениями
        preventNav(event) {
            if (!this.wasChanges) return;
            event.preventDefault();
            // Chrome requires returnValue to be set.
            event.returnValue = "";
        }
    },
    async beforeRouteEnter(to, from, next) {
        // example
        if (to.name === "example") {
            await store.dispatch('map/setExampleMap', to.params.id, {root: true})
        }
        // real map
        else if (to.params.id) {
            // map is not loaded yet
            if (from.name !== "constructor" && to.params.id !== from.params.id) {
                await store.dispatch('map/getMap', to.params.id, {root: true})
            }
            // set seo header
            document.title = store.state.map.name + " - MapDesigner";
            document.description = store.state.map.description;
        }
        // test map
        else {
            // test map not loaded yet
            if (store.state.map.id !== 'test') {
                await store.dispatch("map/setEmptyExampleMap", null, {root: true});
            }
            // set seo header
            document.title = "Пробное использование конструктора карт и атласов - MapDesigner";
            document.description = "Попробуйте возможности для онлайн создания карт и электронных атласов в конструкторе MapDesigner бесплатно.";
        }

        next(vm => {
            // add method called before the tab is closed
            if (to.name !== "example" && to.params.id) window.addEventListener("beforeunload", vm.preventNav);
        });
    },
    beforeRouteLeave(to, from, next) {
        // если были сделаны изменения в реальной карте и если мы не переходим между конструктором и вьюером
        if (from.name !== "example" && this.wasChanges && from.params.id && to.name !== "constructor" && !window.confirm("Изменения атласа не будут сохранены. Продолжить?")) {
            next(false);
        } else {
            // remove method called before the tab is closed
            window.removeEventListener("beforeunload", this.preventNav);
            next();
        }
    }
}
</script>

<style>

</style>
