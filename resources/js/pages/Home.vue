<template>
    <v-col>

    </v-col>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style lang>
    .main-top {
        color: rgb(255, 255, 255);
        background: #2b3137 url('../assets/images/simple-codelines.svg') center 10%;
        background-size: cover;
        height: 64vh;
        max-height: 680px;
        min-height: 460px;
    }

    .main-bottom {
        background-color: rgb(255, 255, 255);
    }

    .pulse {
        animation: radial-pulse 2.2s infinite;
    }

    @keyframes radial-pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
            text-shadow: 0 0 0 #3790DC;
        }
        50% {
            text-shadow: 0 0 10px #2b76dc, 0 0 15px #2158dc;
        }
        75% {
            box-shadow: 0 0 12px 20px rgba(0, 0, 0, 0);
        }
        100% {
            text-shadow: 0 0 10px #2b76dc, 0 0 0 #3790DC;
        }
    }
</style>
