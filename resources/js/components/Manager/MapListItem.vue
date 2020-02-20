<template>
    <div class="col-sm card m-2 card-casual px-0 pb-2 mb-3 shadow" onclick="">
        <img src="../../../images/no-image.png" class="card-img-top" :alt="map.name" draggable="false">
        <div class="card-body">
            <h5 class="card-title"> {{map.name}} </h5>
            <p class="card-text"> {{map.description}} </p>
        </div>
        <div class="row w-50 mx-auto">
            <a v-if="map.other!==true" class="btn btn-light col mx-1" @click=""> &#x270E </a>
            <a class="btn btn-light col mx-1" @click="$store.dispatch('destroyMap', {id: map.id})"> &times; </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MapItem",
        props: {
            map: Object,
            mapOwner: String
        }
    }
</script>

<style scoped>

</style>
