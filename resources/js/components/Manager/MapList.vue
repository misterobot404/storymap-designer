<template>
    <div class="row justify-content-center text-center">
        <div v-for="(map, index) in filteredMaps" :index="index">
           <MapItem :map=map :map-owner="mapOwner"/>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    import MapItem from "./MapListItem";

    export default {
        name: "MapList",
        components: {
            MapItem
        },
        props: {
            sortMethod: String,
            sortUp: Boolean,
            nameSearch: String,
            mapOwner: String
        },
        computed: {
            // Список атласов, в названии которых есть слово из поиска
            filteredMaps: function () {
                let maps;
                if (this.mapOwner === 'all') {
                    maps = [...this.$store.getters.maps, ...this.$store.getters.mapsOther];
                }
                else if(this.mapOwner === 'my') maps = [...this.$store.getters.maps];
                else maps = [...this.$store.getters.mapsOther];

                if (this.sortMethod === "sortByDataCreated") {
                    if (this.sortUp === false) {
                        this.SORT_BY_DATA_CREATED_DOWN();
                    } else this.SORT_BY_DATA_CREATED_UP();
                }
                if (this.sortMethod === "sortByDataModified") {
                    if (this.sortUp === false) {
                        this.SORT_BY_DATA_MODIFIED_DOWN()
                    } else this.SORT_BY_DATA_MODIFIED_UP();

                }
                let name = this.nameSearch;
                return maps.filter(function (elem) {
                    if (name === '') return true;
                    else return elem.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
                })
            }
        },
        methods: {
            ...mapMutations([
                "SORT_BY_DATA_CREATED_DOWN",
                "SORT_BY_DATA_CREATED_UP",
                "SORT_BY_DATA_MODIFIED_DOWN",
                "SORT_BY_DATA_MODIFIED_UP"
            ])
        }
    }
</script>

<style scoped>

</style>
