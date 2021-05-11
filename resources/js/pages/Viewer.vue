<template>
    <div style="position: relative; overflow: hidden; width: 100%; height: 100vh;">
        <!-- Map -->
        <Map style="position: absolute; z-index: 0"/>
        <!-- Content. Desktop -->
        <div
            v-if="pageUsedFromDesktop"
            style="position: absolute; right: 100px; height: 100vh; width: 34vw; z-index: 1; pointer-events: none"
            class="d-flex flex-column justify-center"
        >
            <div class="pa-4 d-flex flex-column text-center rounded"
                 style="max-height: 90vh; background-color:rgba(225, 225, 225, 0.8); pointer-events: all; overflow: hidden">
                <MediaContent
                    v-if="selectedEvent.mediaUrl.length > 0"
                    height="38vh"
                    style="flex-shrink: 0"
                />
                <div class="display-1 mx-6 mt-6">{{ selectedEvent.title }}</div>
                <div
                    style="overflow-y: auto;"
                    class="mx-6 mt-4"
                    v-html="selectedEvent.description"
                />
            </div>
        </div>
        <!-- Content. Mobile -->
        <div
            v-else
            style="position: absolute; bottom: 20px; max-height: 40vh; width: 100vw; z-index: 1; pointer-events: none"
            class="d-flex flex-row justify-center"
        >
            <div
                class="pa-4 d-flex flex-column align-center text-center rounded"
                style="max-width: 94vw; background-color:rgba(225, 225, 225, 0.8); pointer-events: all; overflow-y: auto;"
            >
                <div class="headline mt-3">{{ selectedEvent.title }}</div>
                <MediaContent
                    v-if="selectedEvent.mediaUrl.length > 0"
                    height="28vh"
                    class="mt-3"
                    style="flex-shrink: 0; max-width: 42vh"
                />
                <div
                    class="mx-2 mt-3"
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
        ...mapGetters('map', ['selectedEvent', 'wasChanges']),
        pageUsedFromDesktop() {
            return this.$vuetify.breakpoint.mdAndUp
        }
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
        // real map
        if (to.params.id) {
            // map is not loaded yet
            if (from.name !== "constructor" && to.params.id !== from.params.id) {
                store.dispatch('tiles/getTiles', null, {root: true})
                await store.dispatch('map/getMap', to.params.id, {root: true});
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
