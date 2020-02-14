<template>
    <div class="col-sm card m-2 card-casual px-0 pb-2 mb-3 shadow" onclick="">
        <img src="../../../images/no-image.png" class="card-img-top" :alt="map.name" draggable="false">
        <div class="card-body">
            <h5 class="card-title"> {{map.name}} </h5>
            <p class="card-text"> {{map.description}} </p>
        </div>
        <a class="btn btn-light w-25 mx-auto" @click="$store.dispatch('destroyMap', {id: map.id})"> &times; </a>
    </div>
</template>

<script>
    export default {
        name: "MapItem",
        props: {
            map: Object
        }
    }
</script>

<style scoped>

</style>
