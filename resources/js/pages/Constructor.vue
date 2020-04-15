<template>
    <div>
        <ConstructorControlPanel/>
        <ConstructorMain/>
    </div>
</template>

<script>
    import ConstructorMain from '@/Constructor/Main'
    import ConstructorControlPanel from '@/Constructor/ControlPanel'

    export default {
        name: "Constructor",
        components: {
            ConstructorControlPanel,
            ConstructorMain
        },
    }
</script>

