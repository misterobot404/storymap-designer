<template>
    <div>
        <div id="constructor-header">
            <a class="constructor-header-button">Setting</a>
            <a class="constructor-header-button" @click="saveData">Save</a>
            <a class="constructor-header-button">View</a>
        </div>
        <div class="constructor">
            <EventList id="eventList"
                       class="eventList"
                       :style=""
                       v-model="events"
                       lockAxis="y"
                       :transitionDuration=250
                       :pressDelay=200
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
                       ref="map"
                       :zoom="mapZoom"
                       :minZoom="minZoom"
                       :center="center"
                       :maxBounds="bounds"
                       :maxBoundsViscosity="maxBoundsViscosity"
                       @click="addMarker"
                       @update:zoom="zoomUpdated"
                       @update:center="centerUpdated">
                    <l-tile-layer :url="tileUrl"
                                  :attribution="tileAttribution"/>
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
                    <l-polyline :lat-lngs="getArrayMarkers"
                                :opacity="polylineOpacity"
                                :dashArray="polylineDashArray"
                                :weight="polylineWeight"/>
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
                            <form action="/upload" method="post" enctype="multipart/form-data" class="formRightUploadFile">
                                <slot>
                                </slot>
                                <label class="formRightUploadButton">
                                    <img src="/images/cloud-upload.png">Upload from drive
                                    <input type="file" name="image" onchange="this.form.submit()" style="display: none">
                                </label>
                            </form>
                        </div>
                            <template v-if="getSelectedEvent !== undefined && getSelectedEvent.mediaUrl !== '' && getSelectedEvent.mediaUrl !== null">
                                <template v-if="checkExistImages">
                                    <img :src="getSelectedEvent.mediaUrl"
                                         alt="image"
                                         width="270"
                                         height="144"
                                         class="emptyMediaBlock">
                                </template>
                                <template v-else-if="getSelectedEvent.mediaUrl.indexOf('.youtu') !== -1">
                                    <youtube :video-id="getYouTubeIdOfSelectedEvent"
                                             :player-width="270"
                                             :player-height="144"
                                             class="emptyMediaBlock">
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
        <div class="table">
            <div class="info" style="height: 15%; margin-top: 10px;">
                <span>Center: {{ center }}</span><br>
                <span>Zoom: {{ mapZoom }}</span><br>
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
    // TODO добавить анимацию перехода между событиями
    // TODO настроить скачивание файлов
    import Vue from 'vue'
    import {SlickItem, SlickList} from 'vue-slicksort'
    import {LMap, LTileLayer, LMarker, LTooltip, LIcon, LPolyline} from 'vue2-leaflet'
    import VueYouTubeEmbed from 'vue-youtube-embed'
    import axios from 'axios'
    Vue.use(VueYouTubeEmbed);

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
            axios
        },
        props: [
            'inputEvents',
            'inputConfig'
        ],
        data() {
            return {
                events: this.inputEvents,
                currentEventId: 1,
                deletedEventIndex: null,
                nextId: this.inputConfig[0].nextId,
                showButtonDeleteEvent: null,
                checkExistImages: null,
                //// l-map config
                mapZoom: 4,
                minZoom: 3,
                bounds: new L.LatLngBounds(new L.LatLng(-85, -170), new L.LatLng(85, 175)),
                maxBoundsViscosity: 0.9,
                center: null,
                //// l-tile-layer config
                tileUrl: this.inputConfig[0].tileUrl,
                tileAttribution: '&copy; <a href="https://knastu.ru/">knastu</a>',
                //// l-polyline config
                polylineOpacity: 0.6,
                polylineDashArray: "6",
                polylineWeight: 2
            }
        },
        created: function () {
            //
            this.center = this.getSelectedEvent.marker;
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
                this.mapZoom = zoom;
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
            // Отправка текущего состояния карты post запросом
            saveData : function () {
                console.log("hello");
                axios.post('api/save', {
                    events: this.events,
                    config:
                        [{"nextId":this.nextId,
                        "tileUrl":this.tileUrl}]
                })
                    .then(response => {
                        alert( "Данные успешно сохранены" );
                    })
                    .catch(error => {
                        alert( "Ошибка: " + error.response );
                    });
            },
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
            'getSelectedEvent.marker': {
                handler(val) {
                    this.$refs.map.mapObject.flyTo(val);
                }
            },
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

    .eventList {
        min-width: 120px;
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
        margin: 14px 14px 14px 10px; /*убираем верхнее и нижнее поле, равное 1em*/
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

    .map {
        width: 100%;
        margin: auto;
        border: 1px solid #4d565661;
    }

    .form {
        display: flex;
        margin-top: 10px;
    }

    .formLeft {
        display: flex;
        flex-direction: column;
        margin-right: 1%;
        width: 46%;
    }

    .inputHeader {
        font-size: 24px;
        margin-bottom: 2%;
        padding: 3px;
        height: 28px;
        border: 1px solid #4d565661;
        border-radius: 4px;
    }

    .inputTextarea {
        font-size: 18px;
        padding: 3px;
        flex-grow: 1;
        resize: none;
        border: 1px solid #4d565661;
        border-radius: 4px;
        font-family: 'Turnip RE', Georgia, 'Times New Roman', Times, serif;
    }

    .formRight {
        display: flex;
        flex-wrap: wrap;
        width: 53%;
        min-height: 166px;
        border: 1px solid #4d565661;
        border-radius: 4px;
        background: #f8f8f8;
    }

    .formRightContent {
        display: flex;
        flex-wrap: wrap;
        margin: auto;
        max-width: 540px;
        width: 100%;
    }

    .formRightInputUrl {
        font-size: 20px;
        margin: 4% 2% 2% 2%;
        width: 100%;
    }
    .formRightUploadFile {
        display: flex;
        width: 100%;
    }

    .formRightUploadButton {
        font-size: 18px;
        margin: 2%;
        padding: 6px 0;
        background: none;
        width: 100%;
        border: 1px dashed #4d565661;
        transition: all 0.2s;
        cursor: pointer;
    }

    .formRightUploadButton:hover {
        background-color: #FFFFFF;
        border: 1px solid #4d565661;
    }
    .formRightUploadButton img {
        height: 18px;
        position:relative;
        bottom: -3px;
        margin-right: 4px;
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
        padding: 8px;
        margin: auto;
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
    #constructor-header a{
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
        background: rgb(64,199,129);
        box-shadow: 0 -3px rgb(53,167,110) inset;
        transition: 0.2s;
        cursor: pointer;
        width: 116px;
    }
    .constructor-header-button:hover { background: rgb(53, 167, 110); }
    .constructor-header-button:active {
        background: rgb(33,147,90);
        box-shadow: 0 3px rgb(33,147,90) inset;
    }

</style>
