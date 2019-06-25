<template>
    <div>
        <div class="constructor">
            <EventList id="eventList"
                       class="eventList"
                       v-model="events"
                       lockAxis="y"
                       :transitionDuration=250
                       :distance=10
                       :lockToContainerEdges="true"
                       helperClass="eventItemDrag">
                <!--fixme При вставки события вниз текущего экрана, скрол автоматически поднимается. Фикс во Vue 2.7-->
                <transition-group name="animatedEvents"
                                  @after-leave="afterLeave"
                                  @enter="afterEnter">
                    <EventItem v-for="(event, index) in events"
                               :index="index"
                               :key="event.id"
                               :class="['eventItem', {eventItemActive : event.id === currentEventId}]">
                        <div style="display: flex"
                             @mouseover="showButtonDeleteEvent = index"
                             @mouseleave="showButtonDeleteEvent = null"
                             @click="selectEventById(event.id)">
                            <div class="eventItemTitle">
                                {{ event.name }}
                            </div>
                            <button :class="[ 'deleteEventButton', {'deleteEventButtonHide' : showButtonDeleteEvent !== index}]"
                                    @click.stop="deleteEventByIndex(index)"
                            >✖
                            </button>
                        </div>
                    </EventItem>
                </transition-group>
                <li @click="addEvent"
                    class="eventItem addEventButton">
                    <div class="plus">+</div>
                </li>
            </EventList>
            <div class="content">
                <l-map class="map"
                       :zoom="zoom"
                       :center="center"
                       @click="addMarker"
                       @update:zoom="zoomUpdated"
                       @update:center="centerUpdated">
                    <l-tile-layer :url="url"/>
                    <l-marker v-for="(marker, index) in events"
                              :key="marker.id"
                              :lat-lng="marker.marker"
                              :draggable="getIndexSelectedEvent === index"
                              @click="activateMarker(marker)"
                              @update:latLng="latLngUpdated">
                        <l-tooltip>
                            {{marker.name}}
                        </l-tooltip>
                        <l-icon v-if="getIndexSelectedEvent !== index"
                                :icon-size="[32, 38]"
                                icon-url="https://image.flaticon.com/icons/svg/148/148828.svg">
                        </l-icon>
                        <l-icon v-else
                                :icon-size="[48, 46]"
                                icon-url="https://image.flaticon.com/icons/svg/148/148834.svg">
                        </l-icon>
                    </l-marker>
                    <l-polyline :lat-lngs="getArrayMarkers" :opacity="0.6" dashArray="6" :weight="2"/>
                </l-map>
                <div class="form">
                    <div class="formLeft">
                        <template v-if="getSelectedEvent !== undefined">
                            <input v-model.lazy="getSelectedEvent.name"
                                   placeholder="Заголовок события"
                                   class="inputHeader">
                            <textarea v-model.lazy="getSelectedEvent.title"
                                      placeholder="Описание события"
                                      class="inputTextarea">
                    </textarea>
                        </template>
                        <template v-else>
                            <input placeholder="Заголовок события"
                                   class="inputHeader">
                            <textarea placeholder="Описание события"
                                      class="inputTextarea">
                    </textarea>
                        </template>
                    </div>
                    <div class="formRight">
                        <div class="formRightContent">
                            <input v-if="getSelectedEvent !== undefined"
                                   v-model.lazy="getSelectedEvent.mediaUrl"
                                   placeholder="Insert media link"
                                   class="formRightInputUrl">
                            <input v-else
                                   placeholder="Insert media link"
                                   class="formRightInputUrl">
                            <button class="formRightUploadButton"
                                    @click="alert('dev')">Upload from drive
                            </button>
                            <template v-if="getSelectedEvent !== undefined && getSelectedEvent.mediaUrl !== ''">
                                <template v-if="checkExistImages">
                                    <img :src="getSelectedEvent.mediaUrl"
                                         alt="image"
                                         width="270"
                                         height="144">
                                </template>
                                <template v-else-if="getSelectedEvent.mediaUrl.indexOf('.youtu') !== -1">
                                    <youtube :video-id="getYouTubeIdOfSelectedEvent"
                                             :player-width="270"
                                             :player-height="144">
                                    </youtube>
                                </template>
                                <template v-else>
                                    <div class="emptyMediaBlock">
                                        <p>Broken link</p>
                                    </div>
                                </template>
                            </template>
                            <template v-else>
                                <div class="emptyMediaBlock">
                                    <p>Empty</p>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table">
            <div class="info" style="height: 15%; margin-top: 10px;">
                <span>Center: {{ center }}</span><br>
                <span>Zoom: {{ zoom }}</span><br>
            </div>
            <p>Создержание базы данных</p>
            <table>
                <tr v-for="item in events" :key="item.id">
                    <td>Id : {{item.id}}</td>
                    <td>Name: {{item.name}}</td>
                    <td>Description: {{item.title}}</td>
                    <td>Marker: {{item.marker}}</td>
                    <td>mediaURL: {{item.mediaUrl}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {SlickItem, SlickList} from 'vue-slicksort'
    import {LMap, LTileLayer, LMarker, LTooltip, LIcon, LPolyline} from 'vue2-leaflet'
    import VueYouTubeEmbed from 'vue-youtube-embed'
    import axios from 'axios'

    Vue.use(VueYouTubeEmbed)

    export default {
        components: {
            EventList: SlickList,
            EventItem: SlickItem,
            LMap,
            LTileLayer,
            LMarker,
            LTooltip,
            LIcon,
            LPolyline,
            axios,
        },
        data() {
            return {
                events: [
                    {
                        name: 'Item1',
                        id: 1,
                        title: "",
                        marker: [59.102667, 10.028418],
                        mediaUrl: "",
                    },
                    {
                        name: 'Item2',
                        id: 2,
                        title: "",
                        marker: [68.412, -41.218],
                        mediaUrl: "https://www.youtube.com/watch?v=tz1XUyGP8gQ&t"
                    },
                    {
                        name: 'Item3',
                        id: 3,
                        title: "",
                        marker: [19.176301, -5.801195],
                        mediaUrl: "https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg"
                    },
                    {
                        name: 'Item4',
                        id: 4,
                        title: "Четвертое событие",
                        marker: [48.828566, -76.858569],
                        mediaUrl: ""
                    },
                    {
                        name: 'Item5',
                        id: 5,
                        title: "Пятое событие",
                        marker: [7.917793, -62.787802],
                        mediaUrl: ""
                    },
                    {
                        name: 'Item6',
                        id: 6,
                        title: "Шестое событие",
                        marker: [6.315299, -9.497961],
                        mediaUrl: ""
                    },
                ],
                currentEventId: 1,
                deletedEventIndex: null,
                nextId: 7,
                showButtonDeleteEvent: null,
                ///////////////////////////
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                zoom: 2,
                center: [47.413220, -5.219482],
                ////////////////////////////
                checkExistImages: ''
            }
        },
        methods: {
            selectEventById: function (id) {
                this.currentEventId = id;
            },
            addEvent: function () {
                this.events.push({
                    name: "Item" + this.nextId,
                    id: this.nextId,
                    title: ' ',
                    marker: [47.413220, -1.219482],
                    mediaUrl: ""
                });
                // Если добавленное событие является единственным назначаем его активным
                if (this.getLengthEventArray === 1) {
                    this.currentEventId = this.nextId;
                }
                this.nextId++;
            },
            deleteEventByIndex: function (index) {
                this.deletedEventIndex = index;
                this.events.splice(index, 1);
            },
            // Хук срабатывающий после удаления и окончания анимации удаления на панели событий
            afterLeave: function () {
                // Если было удалёно активное событие (активное событие не надено), устанавливаем новое
                if (this.getIndexSelectedEvent === -1) {
                    // Если после удаления события массив событий пуст новый элемент назначать не нужно, выходим
                    if (this.getLengthEventArray === 0) {
                        this.currentEventId = null;
                        return;
                    }

                    // Если удаленный элемент являлся последним в массиве, смещаем текущий активный элемент назад
                    if (this.deletedEventIndex === this.getLengthEventArray) {
                        this.deletedEventIndex--;
                    }

                    // Установка нового активного элемента
                    this.currentEventId = this.events[this.deletedEventIndex].id;
                }
            },
            afterEnter: function () {
                let element = document.getElementById("eventList");
                element.scrollTop = element.scrollHeight - element.clientHeight;
            },
            //////////////////////////////
            zoomUpdated: function (zoom) {
                this.zoom = zoom;
            },
            centerUpdated: function (center) {
                this.center = center;
            },
            latLngUpdated: function (latLng) {
                this.getSelectedEvent.marker = latLng;
            },
            activateMarker: function (marker) {
                // this.getIndexSelectedEvent === index ? this.events[index].marker = 0 : null;
                this.currentEventId = marker.id;
                // this.center = marker.marker;
                // this.zoom = 4;

            },
            addMarker: function (event) {
                this.events[this.getIndexSelectedEvent].marker = event.latlng;
            },
            //////////////////////////////
            uploadFiles() {
                const data = new FormData(document.getElementById('uploadForm'));
                let imagefile = document.querySelector('#file');
                window.console.log(imagefile.files[0]);
                data.append('file', imagefile.files[0]);
                axios.post('http://95.70.121.38:8080', data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then(response => {
                        window.console.log(response)
                    })
                    .catch(error => {
                        window.console.log(error.response)
                    })
            }
        },
        computed: {
            getSelectedEvent: function () {
                return this.events.find(obj => obj.id === this.currentEventId);
            },
            getIndexSelectedEvent: function () {
                return this.events.findIndex(obj => obj.id === this.currentEventId);
            },
            getLengthEventArray: function () {
                return this.events.length;
            },
            getArrayMarkers: function () {
                return this.events.map(a => a.marker);
            },
            getYouTubeIdOfSelectedEvent: function () {
                return this.$youtube.getIdFromURL(this.getSelectedEvent.mediaUrl);
            },
        },
        watch: {
            'getSelectedEvent.mediaUrl': {
                immediate: true,
                handler(val) {
                    const img = new Image();
                    img.onload = () => this.checkExistImages = img.height > 0;
                    img.onerror = () => this.checkExistImages = false;
                    img.src = val;
                }
            },
        }
    }

</script>

<style scoped>
    .my_polyline {
        color: black;
        stroke: green;
        fill: none;
        stroke-dasharray: 10, 10;
        stroke-width: 5;
    }

    .constructor {
        margin: 20px;
        border: 1px solid #CCC;
        display: flex;
        padding: 10px;
        min-height: 70vh;
        max-height: 70vh;
        overflow: hidden;
    }

    .eventList {
        max-height: 80vh;
        overflow-y: scroll;
    }

    .eventItem {
        -webkit-box-align: center;
        align-items: center;
        box-sizing: border-box;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        cursor: pointer;
        list-style: none;
        font-size: 20px;
        display: flex;
        justify-content: center;
        height: 56px;
        margin: 18px 14px; /*убираем верхнее и нижнее поле, равное 1em*/
        max-width: 110px;
        min-width: 50px;
        border-radius: 5px;
        background-color: #35495E;
        color: #41B883;
        border: 2px solid transparent;
    }

    .eventItem:hover {
        background-color: #41B883;
        color: #35495E;
        border: 2px groove black;
    }

    .eventItemTitle {
        margin: 22px 11px 22px 35px;
        min-width: 52px;
        max-width: 52px;
        min-height: 23px;
        max-height: 23px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .deleteEventButton {
        background-color: #35495E;
        color: white;
        text-align: center;
        text-decoration: none;
        font-size: 12px;
        border-radius: 50%;
        border: none;
        outline: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 22px;
        width: 22px;
        align-content: center;
    }

    .deleteEventButtonHide {
        visibility: hidden;
    }

    .addEventButton {
        background-color: transparent;
        border: 2px groove black;
        color: #35495E;
        font-size: 36px;
        font-weight: lighter;
        transition: 0.5s ease; /* скорость поворота */
        padding: 22px;
        overflow: hidden;
    }

    .addEventButton:hover {
        background-color: transparent;
    }

    .plus {
        transition: 0.5s ease; /* скорость поворота */
        transform-style: preserve-3d; /* стиль трансформирования 3-д */
        padding: 14px 28px;
    }

    .plus:hover {
        transform: rotate(180deg);
    }

    .animatedEvents-enter-active {
        transition: all 0.5s;
    }

    .animatedEvents-enter {
        opacity: 0;
        transform: translateY(50px);
    }

    .animatedEvents-leave-active {
        animation: animatedEvents-in .4s reverse;
    }

    @keyframes animatedEvents-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.15);
        }
        100% {
            transform: scale(1);
        }
    }

    .eventItemActive {
        color: white;
        background-color: #DA0000;
        border-radius: 2px;
    }

    .eventItemActive:hover {
        color: white;
        background-color: #DA0000;
        border: transparent;
    }

    .eventItemDrag {
        background-color: #41B883;
        color: #35495E;
        border: 2px dashed black;
        font-size: 20px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }

    .content {
        width: 88%;
        margin: auto;
        padding-left: 6px;
    }

    .map {
        min-height: 450px;
        width: 100%;
        margin: auto;
        border: 1px solid #4d565661;
    }

    .form {
        display: flex;
        margin-top: 20px;
    }

    .formLeft {
        float: left;
        width: 44%;
    }

    .inputHeader {
        font-size: 24px;
        margin: 2px 2% 2% 2px;
        padding: 3px;
        float: left;
        width: 96.2%;
        border: 1px solid #4d565661;
        border-radius: 4px;
    }

    .inputTextarea {
        font-size: 18px;
        width: 96%;
        padding: 3px;
        height: 60%;
        resize: none;
        margin: 2% 2% 2% 2px;
        border: 1px solid #4d565661;
        border-radius: 4px;
        font-family: 'Turnip RE', Georgia, 'Times New Roman', Times, serif;
    }

    .formRight {
        float: right;
        width: 56%;
        min-height: 166px;
        margin: auto 0 auto 5px;
        border: 1px solid #4d565661;
        border-radius: 4px;
        background: #f8f8f8;
    }

    .formRightContent {
        margin-top: 10px;
    }

    .formRightInputUrl {
        font-size: 20px;
        margin: 4% 2% 2% 2%;
        float: left;
        width: 55%;
    }

    .formRightUploadButton {
        font-size: 18px;
        margin: 2%;
        padding: 0.35em 1.2em;
        background: none;
        float: left;
        width: 55%;
        border: 1px dashed #4d565661;
        transition: all 0.2s;
    }

    .formRightUploadButton:hover {
        color: #35495E;
        background-color: #FFFFFF;
        border: 1px solid #4d565661;
    }


    .table {
        font-size: 14px;
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

    .emptyMediaBlock {
        width: 270px;
        height: 144px;
        display: flex;
        vertical-align: center;
    }

    .emptyMediaBlock p {
        font-size: 26px;
        text-align: center;
        background-color: #dddddd;
        color: #777777;
        line-height: 144px;
        width: 100%;
        margin: auto;
        font-family: "Helvetica Neue", Helvetica, sans-serif;
    }
</style>
