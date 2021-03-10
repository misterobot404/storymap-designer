<template>
    <v-container
        fluid
        style="height: 100vh"
        class="d-flex flex-column"
    >
        <!-- Control panel -->
        <ControlPanel/>
        <!-- Horizontal line -->
        <v-divider
            class="my-3"
            style="border-style: dashed;"
        />
        <!-- Constructor -->
        <div class="d-flex flex overflow-hidden">
            <!-- Event list -->
            <EventList/>
            <!-- Map + Event form -->
            <div
                class="d-flex flex-column"
                style="flex:1; min-width: 200px; padding-left: 12px;"
            >
                <!-- Map -->
                <Map/>
                <!-- Event form -->
                <EventForm/>
            </div>
        </div>
    </v-container>
</template>
<script>
import store from "../store"
import {mapGetters} from "vuex"
import ControlPanel from "../components/Constructor/ControlPanel"
import EventList from "../components/Constructor/EventList"
import EventForm from "../components/Constructor/EventForm"
import Map from "../components/Constructor/Map"

export default {
    name: "Constructor",
    components: {
        ControlPanel,
        EventList,
        EventForm,
        Map
    },
    computed: {
        ...mapGetters('map', ['wasChanges']),
    },
    methods: {
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
            if (from.name !== "viewer" && to.params.id !== from.params.id) {
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
            if (to.params.id) window.addEventListener("beforeunload", vm.preventNav);
        });
    },
    beforeRouteLeave(to, from, next) {
        // если были сделаны изменения в реальной карте и если мы не переходим между конструктором и вьюером
        if (this.wasChanges && from.params.id && to.name !== "viewer" && !window.confirm("Изменения атласа не будут сохранены. Продолжить?")) {
            next(false);
        } else {
            // remove method called before the tab is closed
            window.removeEventListener("beforeunload", this.preventNav);
            next();
        }
    }
}
</script>

