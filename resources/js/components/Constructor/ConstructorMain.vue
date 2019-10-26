<template>
    <div class="constructor">
        <constructor-main-event-list/>
        <div class="content">
            <constructor-main-map/>
            <constructor-main-form/>
        </div>
    </div>
</template>

<script>
    import ConstructorMainEventList from './ConstructorMainEventList'
    import ConstructorMainMap from "./ConstructorMainMap"
    import ConstructorMainForm from "./ConstructorMainForm";

    export default {
        name: "ConstructorMain",
        components: {
            ConstructorMainEventList,
            ConstructorMainMap,
            ConstructorMainForm
        }
    }
</script>

<style scoped>
    .constructor {
        margin: auto;
        border-top: 1px dashed #CCC;
        border-right: 1px solid #CCC;
        border-bottom: 1px solid #CCC;
        border-left: 1px solid #CCC;
        display: flex;
        padding: 10px;
        height: 88vh;
        min-height: 400px;
        min-width: 428px;
    }
    .content {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        width: 96%;
        min-width: 200px;
        margin: 0 auto;
        padding-left: 10px;
    }
</style>
