<template>
    <div id="constructor-header">
        <a class="constructor-header-button">Настройки</a>
        <a class="constructor-header-button" @click="saveMap">Сохранить</a>
        <a class="constructor-header-button">Viewer</a>
    </div>
</template>

<script>

    export default {
        name: "ConstructorControlPanel",
        methods: {
            saveMap: function () {
                this.$store.dispatch("setMap");
            },
        }
    }
</script>

<style scoped>
    #constructor-header {
        height: 6vh;
        min-width: 438px;
        border-top: 1px solid #CCC;
        border-right: 1px solid #CCC;
        border-left: 1px solid #CCC;
        display: flex;
        align-items: center;
        padding: 5px;
    }

    #constructor-header a {
        margin: 5px;
    }

    #constructor-header > a:nth-child(3) {
        margin-left: auto;
    }

    .constructor-header-button {
        font-weight: 700;
        color: white;
        text-decoration: none;
        padding: .8em 1em calc(.8em + 3px);
        border-radius: 3px;
        background: rgb(64, 199, 129);
        box-shadow: 0 -3px rgb(53, 167, 110) inset;
        transition: 0.2s;
        cursor: pointer;
        width: 116px;
    }

    .constructor-header-button:hover {
        background: rgb(53, 167, 110);
    }

    .constructor-header-button:active {
        background: rgb(33, 147, 90);
        box-shadow: 0 3px rgb(33, 147, 90) inset;
    }
</style>
