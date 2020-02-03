<template>
    <div class="app">
        <ConstructorControlPanel/>
        <ConstructorMain/>
    </div>
</template>

<script>
    import ConstructorMain from './Constructor/ConstructorMain'
    import ConstructorControlPanel from './Constructor/ConstructorControlPanel'

    export default {
        name: "Constructor",
        components: {
            ConstructorControlPanel,
            ConstructorMain
        },
    }

</script>

<style lang="sass" scoped>
    .app
        font-family: 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        text-align: center
        margin: 8px
</style>
