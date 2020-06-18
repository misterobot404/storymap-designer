<template>
    <EventList id="eventList"
               v-model="model_events"
               lockAxis="y"
               appendTo="div#eventList"
               lockToContainerEdges
               :distance=3
               lockOffset="20%"
               helperClass="eventDraggable"
               class="d-flex flex-column pr-2"
               :style="{ width: config.eventListWidth + 'px'}"
    >
        <!-- Events -->
        <EventItem v-for="(event, index) in events"
                   :index="index"
                   :key="event.id"
                   class="d-flex mb-1"
                   style="position: relative; cursor: pointer"
        >
            <!-- Delete btn -->
            <v-icon
                v-show="events.length !== 1"
                @mouseover="showButtonDeleteEvent = index"
                @mouseleave="showButtonDeleteEvent = null"
                :class="{'d-none' : showButtonDeleteEvent !== index}"
                @click.stop="deleteEventByIndex(index)"
                style="position:absolute; right: 2px; top: 2px; z-index: 4"
            >
                close
            </v-icon>
            <!-- Event -->
            <div
                @mouseover="showButtonDeleteEvent = index"
                @mouseleave="showButtonDeleteEvent = null"
                @click="SET_SELECTED_EVENT_ID(event.id)"
                class="v-btn v-btn--block v-btn--depressed v-size--x-large text-wrap"
                :class="[{'v-btn--text primary--text v-btn--active' : config.selectedEventId === event.id }, $vuetify.theme.dark ? 'theme--dark' : 'theme--light']"
                style="margin-bottom: 2px; border: 1px solid; min-height: 80px; max-width: 100%;"
                :style="config.selectedEventId === event.id ? 'border-color: #1976d2' : 'border-color: rgba(0, 0, 0, 0.24)'"
            >
                <span class="v-btn__content">
                    {{ event.title }}
                </span>
            </div>
        </EventItem>
        <!-- Add button -->
        <v-btn
            x-large
            depressed
            icon
            @click="addEventLocal()"
            class="mx-auto"
            style="color: rgba(0, 0, 0, 0.74);"
        >
            <v-icon>add</v-icon>
        </v-btn>
    </EventList>
</template>

<script>
    import {SlickItem, SlickList} from 'vue-slicksort'
    import {mapState, mapMutations, mapActions} from 'vuex'

    export default {
        name: "ConstructorEventList",
        components: {
            EventList: SlickList,
            EventItem: SlickItem
        },
        data() {
            return {
                showButtonDeleteEvent: null
            }
        },
        computed: {
            ...mapState('map', [
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
            ...mapActions('map', [
                'deleteEventByIndex',
                'addEvent'
            ]),
            addEventLocal() {
                this.addEvent().then(() => {
                    let element = document.getElementById("eventList");
                    element.scrollTop = element.scrollHeight;
                });
            }
        }
    }
</script>

<style lang="sass" scoped>
    ::v-deep .v-btn__content
        display: inline-block
        max-width: 100%
        max-height: 60px
        text-align: center
        overflow: hidden
        text-overflow: ellipsis

    #eventList
        max-width: 50%
        min-width: 160px
        overflow-y: scroll
        overflow-x: hidden
        resize: horizontal

    .eventDraggable
        pointer-events: auto !important
        cursor: grab !important
</style>
