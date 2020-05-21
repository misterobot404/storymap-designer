<template>
    <event-list id="eventList"
                class="mainEventList"
                v-model="model_events"
                lockAxis="y"
                :transitionDuration=250
                :pressDelay=200
                :lockToContainerEdges="true"
                helperClass="eventItemDrag">
        <!--FIXME: При вставки события вниз текущего экрана, скрол автоматически поднимается. Фикс во Vue 2.7-->
        <transition-group name="animatedEvents"
                          @after-leave="afterLeave"
                          @enter="afterEnter"
                          class="eventList">
            <!--            Сюда нельзя повесить события, поэтому используем див ниже-->
            <!--TODO: Настроить цвет событий при наведении и нажатии-->
            <EventItem v-for="(event, index) in events"
                        :index="index"
                        :key="event.id"
                        :class="['mainEventItem', {eventItemActive : event.id === config.selectedEventId}]">
                <div @mouseover="showButtonDeleteEvent = index"
                     @mouseleave="showButtonDeleteEvent = null"
                     @click="selectEventById(event.id)"
                     class="eventItem">
                    <div class="eventItemTitle">
                        {{ event.title }}
                    </div>
                    <!--TODO: ПЕРЕДЕЛАТЬ кнопку удаления события-->
<!--                    <button :class="[ 'deleteEventButton', {'deleteEventButtonHide' : showButtonDeleteEvent !== index}]"-->
<!--                            @click.stop="deleteEventByIndex(index)"-->
<!--                    >✖-->
<!--                    </button>-->
                </div>
            </EventItem>
        </transition-group>
        <li @click="addEvent"
            class="mainEventItem addEventButton">
                <div id="addEventButtonPlus"
                     @mouseover="plusRotate"
                >+</div>
        </li>
    </event-list>
</template>

<script>
    import {SlickItem, SlickList} from 'vue-slicksort'
    import {mapMutations, mapGetters} from 'vuex'

    export default {
        name: "ConstructorEventList",
        components: {
            EventList: SlickList,
            EventItem: SlickItem
        },
        data() {
            return {
                deletedEventIndex: null,
                showButtonDeleteEvent: null,
                plusRotateValue: 0,
            }
        },
        computed: {
            ...mapGetters('map', [
                'config',
                'events'
            ]),
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
            ...mapMutations('map', [
                'SET_EVENTS',
                'SET_SELECTED_EVENT_ID',
                'DELETE_EVENT_BY_INDEX'
            ]),
            addEvent: function () {
                this.$store.dispatch('map/addEvent');
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
                this.$store.dispatch("map/eventSelectionAfterDelete", this.deletedEventIndex);
                this.deletedEventIndex = null;
            },
            afterEnter: function () {
                let element = document.getElementById("eventList");
                element.scrollTop = element.scrollHeight - element.clientHeight;
            },
            // CSS method
            plusRotate: function () {
                this.plusRotateValue += 180;
                var plus = document.getElementById('addEventButtonPlus');
                plus.style.transform = 'rotate('+ this.plusRotateValue +'deg)';
            }
        }
    }
</script>

<style lang="sass" scoped>
    .mainEventList
        display: flex
        flex-direction: column
        align-items: center
        width: 14%
        min-width: 160px
        max-width: 280px
        height: 100%
        overflow-y: scroll

    .eventList
        display: flex
        flex-direction: column
        align-items: center
        width: 100%

    .mainEventItem
        display: flex
        align-items: center
        box-sizing: border-box
        user-select: none
        cursor: pointer
        list-style: none
        font-size: 20px
        justify-content: center
        height: 56px
        margin-bottom: 14px

        /*убираем верхнее и нижнее поле, равное 1em
        width: 90%
        border-radius: 5px
        background-color: #C4D8F0
        color: #111111

        /*box-shadow: 0 1px 1px rgba(0,0,0,.25),
        /*inset 0 2px 0 rgba(255,255,255,.6),
        /*0 2px 0 rgba(0,0,0,.1),
        /*inset 0 0 20px rgba(0,0,0,.1);

        &:hover
            background-color: #41B883
            color: #35495E
            border: 2px groove black

    .eventItem
        width: 100%
        height: 100%
        display: flex
        justify-content: center
        align-items: center

    .eventItemActive
        border: 2px solid black

        &:hover
            color: white
            background-color: #DA0000
            border: transparent

    .eventItemDrag
        background-color: #41B883
        color: #35495E
        border: 2px dashed black
        font-size: 20px
        font-family: 'Avenir', Helvetica, Arial, sans-serif

    .eventItemTitle
        width: 90%
        overflow: hidden
        text-overflow: ellipsis

    .deleteEventButton
        display: flex
        background-color: #35495E
        color: white
        text-align: center
        text-decoration: none
        font-size: 12px
        border-radius: 50%
        border: none
        outline: none
        cursor: pointer
        flex-direction: column
        align-items: flex-start
        justify-content: center
        height: 22px
        width: 22px
        align-content: center

    .deleteEventButtonHide
        visibility: hidden

    .addEventButton
        background-color: transparent
        border: 2px groove black
        color: #35495E

        &:hover
            background-color: transparent

    #addEventButtonPlus
        transition: 0.6s ease

        /* скорость поворота
        transform: rotate(0deg)
        transform-style: preserve-3d

        /* стиль трансформирования 3-д
        font-size: 36px
        line-height: 52px
        width: 100%

    .animatedEvents-enter-active
        transition: all 0.6s

    .animatedEvents-enter
        opacity: 0
        transform: translateY(50px)

    .animatedEvents-leave-active
        animation: animatedEvents-in .5s reverse

    @keyframes animatedEvents-in
        0%
            transform: scale(0.1)

        50%
            transform: scale(1.1)

        100%
            transform: scale(1)
</style>
