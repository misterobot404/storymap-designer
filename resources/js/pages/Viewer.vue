<template>
    <div
        style="height: 100vh"
        class="d-flex flex-row"
    >
        <!-- Map -->
        <Map/>
        <!-- Content -->
        <div
            class="text-center"
            style="width: 34vw;"
        >
            <MediaContent height="34vh"/>
            <v-container class="px-6" style="height: 66vh; overflow-y: scroll">
                <div class="headline mt-6 mb-4">{{ selectedEvent.title }}</div>
                <div v-html="selectedEvent.description"/>
            </v-container>
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
