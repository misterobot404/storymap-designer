<template>
    <event-list id="eventList"
                class="eventList"
                v-model="this.model_events"
                lockAxis="y"
                :transitionDuration=250
                :pressDelay=200
                :lockToContainerEdges="true"
                helperClass="eventItemDrag">
        <!--fixme При вставки события вниз текущего экрана, скрол автоматически поднимается. Фикс во Vue 2.7-->
        <transition-group name="animatedEvents"
                          @after-leave="afterLeave"
                          @enter="afterEnter">
            <event-item v-for="(event, index) in events"
                        :index="index"
                        :key="event.id"
                        :class="['eventItem', {eventItemActive : event.id === config.selectedEventId}]">
                <div style="display: flex"
                     @mouseover="showButtonDeleteEvent = index"
                     @mouseleave="showButtonDeleteEvent = null"
                     @click="selectEventById(event.id)">
                    <div class="eventItemTitle">
                        {{ event.name }}
                    </div>
                    <button
                            :class="[ 'deleteEventButton', {'deleteEventButtonHide' : showButtonDeleteEvent !== index}]"
                            @click.stop="deleteEventByIndex(index)"
                    >✖
                    </button>
                </div>
            </event-item>
        </transition-group>
        <li @click="addEvent"
            class="eventItem addEventButton">
            <div class="plus">+</div>
        </li>
    </event-list>
</template>

<script>
    import {SlickItem, SlickList} from 'vue-slicksort'
    import {mapMutations,mapGetters} from 'vuex'

    export default {
        name: "ConstructorEventList",
        components: {
            EventList: SlickList,
            EventItem: SlickItem
        },
        data() {
            return {
                deletedEventIndex: null,
                showButtonDeleteEvent: null
            }
        },
        computed: {
            ...mapGetters(['config','events']),
            model_events: {
                get() {
                    return this.events
                },
                set(value) {
                    this.SET_EVENTS(value)
                }
            }
        },
        methods: {
            ...mapMutations([
                'SET_EVENTS',
                'SET_SELECTED_EVENT_ID',
                'DELETE_EVENT_BY_INDEX'
            ]),

            addEvent: function () {
                this.$store.dispatch('addEvent');
            },
            selectEventById: function (id) {
                this.SET_SELECTED_EVENT_ID(id);
            },
            deleteEventByIndex: function (index) {
                this.DELETE_EVENT_BY_INDEX(index);
                this.deletedEventIndex = index;
            },
            // Хук срабатывающий после удаления и окончания анимации удаления события
            afterLeave: function () {
                this.$store.dispatch("eventSelectionAfterDelete",this.deletedEventIndex);
                this.deletedEventIndex = null;
            },
            afterEnter: function () {
                let element = document.getElementById("eventList");
                element.scrollTop = element.scrollHeight - element.clientHeight;
            }
        }
    }
</script>

<style scoped>
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
        transition: all 0.6s;
    }

    .animatedEvents-enter {
        opacity: 0;
        transform: translateY(50px);
    }

    .animatedEvents-leave-active {
        animation: animatedEvents-in .5s reverse;
    }

    @keyframes animatedEvents-in {
        0% {
            transform: scale(0.1);
        }
        50% {
            transform: scale(1.1);
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
</style>
