<template>
    <div id="app">
        <ul class="mainMenu">
            <li v-for="(tab,index) in tabs"
                :key="index"
                :class="['defaultScene', {sceneActive: currentTab === tab}]"
                @click="currentTab = tab">
                {{ tab }}
            </li>
        </ul>
        <transition name="fade" mode="out-in">
            <!--<keep-alive>-->
                <component v-bind:is="currentTab" />
            <!--</keep-alive>-->
        </transition>
    </div>
</template>

<script>
    import Master from './components/Constructor.vue'
    import dev from './components/dev.vue'

    export default {
        components: {
            Master,
            dev,
        },
        data() {
            return {
                currentTab: 'dev',
                tabs: ['Master', 'dev']
            }
        }
    }
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin: 30px 10%;
        min-width: 720px;
    }

    .mainMenu {
        vertical-align: middle;
        margin: auto;
        padding-left: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    .defaultScene {
        justify-content: center;
        display: flex;
        list-style: none;
        cursor: pointer;
        height: 2em;
        transition: color 0.4s ease;
        transition: font-size 0.4s;
        color: #000;
        font-size: 1.5em;
    }

    .sceneActive {
        color: #41B883;
        font-size: 1.8em;
    }
</style>
