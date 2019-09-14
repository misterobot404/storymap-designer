<template>
    <div class="table">
        <div class="info" style="height: 15%; margin-top: 10px;">
            <span>Center: {{ center }}</span><br>
            <span>Zoom: {{ mapZoom }}</span><br>
        </div>
        <p>Создержание базы данных</p>
        <table>
            <tr v-for="item in events" :key="item.id" style="padding: 2px;">
                <td>Id : {{item.id}}</td>
                <td>Name: {{item.name}}</td>
                <td>Description: {{item.title}}</td>
                <td>Marker: {{item.marker}}</td>
                <td>mediaURL: {{item.mediaUrl}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        props: [
            'center',
            'mapZoom',
            'events'
        ]
    }
</script>

<style scoped>
    .table {
        font-size: 16px;
        margin-top: 50px;
    }

    .table table {
        margin: auto;
        border: 1px solid #35495E;
    }

    .table td {
        padding: 3px;
        list-style: none;
        text-align: left;
    }
</style>
