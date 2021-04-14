<template>
    <div>
        <!-- Hero -->
        <v-img
            :src="require('@/assets/images/home_art.jpg')"
            class="white--text"
            gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
            :min-height="minHeight"
        >
            <v-container
                class="fill-height px-4"
                :class="[$vuetify.breakpoint.mdAndUp ? '' : 'py-6']"
            >
                <v-responsive
                    class="d-flex align-center"
                    height="100%"
                    max-width="680"
                    width="100%"
                >
                    <h1 class="display-2 font-weight-black mt-4 mb-8 mt-md-0 mb-md-4 text-left white--text"
                        :style="['padding-top: 48px']">
                        Есть вещи, которые нельзя изобразить<br>
                        Для всего остального есть MapDesigner
                    </h1>

                    <p class="grey--text text--lighten-1 text-left mb-10">
                        MapDesigner - это бесплатный сервис, который поможет вам рассказать истории в Интернете, освещающие места, события или предметы.<br>
                        Конструктор позволяет быстро создавать гибкие иформационно-развлекательные ресурсы для использования их в сфере обучения, туризма и
                        маркетинга.
                    </p>

                    <div
                        :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
                        class="d-flex flex-wrap"
                    >
                        <v-btn
                            color="blue"
                            x-large
                            dark
                            tile
                            depressed
                            to="/constructor"
                            class="font-weight-bold"
                            style="min-width: 164px;"
                        >
                            Попробовать сейчас
                        </v-btn>
                        <span class="font-weight-bold ml-6 mr-2 my-4"> или </span>
                        <v-btn color="blue" large text @click="goToFutures">
                            Узнать больше
                        </v-btn>
                    </div>
                </v-responsive>
            </v-container>
        </v-img>
        <!-- Features -->
        <div
            id="futures"
            class="text-center"
            style="padding-top: 96px"
        >
            <h1 class="text-uppercase headline font-weight-bold mb-2 text-center">
                Возможности
            </h1>
            <v-responsive
                class="grey lighten-2 mx-auto mb-8"
                max-width="28"
            >
                <v-divider style="border-width: 2px 0 0 0!important;"/>
            </v-responsive>

            <v-container>
                <v-row>
                    <v-col
                        v-for="card in features"
                        :key="card.title"
                        cols="12"
                        md="4"
                    >
                        <div class="container pa-0">
                            <div
                                class="row no-gutters "
                                :class="[$vuetify.breakpoint.mdAndUp ? 'justify-start' : 'justify-center']"
                            >
                                <div class="col col-9">
                                    <div class="body-2 font-weight-regular mb-1 text-left grey--text"> {{ card.subtitle}}</div>
                                    <h3 class="text-uppercase title font-weight-bold mb-1 text-left"> {{ card.title}} </h3>
                                    <v-responsive class="primary mr-auto mb-6" max-width="28">
                                        <v-divider style="border-width: 2px 0 0 0!important;"/>
                                    </v-responsive>
                                    <p class="base-body body-1 grey--text text--darken-1 text-left mb-6">
                                        {{ card.text }}
                                    </p>
                                </div>
                                <div class="col col-2">
                                    <div class="display-3 grey--text text--lighten-4 font-weight-bold pr-8">{{ card.callout}}</div>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!-- Examples -->
        <div
            id="examples"
            class="text-center"
            style="padding-top: 52px"
        >
            <h1 class="text-uppercase headline font-weight-bold mb-2 text-center">
                Примеры
            </h1>

            <v-responsive
                class="grey lighten-2 mx-auto mb-11"
                max-width="28"
            >
                <v-divider style="border-width: 2px 0 0 0!important;"/>
            </v-responsive>

            <!-- iframe map -->
            <iframe
                width="100%"
                height="720"
                style="border-style: none;"
                :src="selectedMapUrl"
            />

            <!-- Maps to choose -->
            <v-container>
                <v-row
                    dense
                    class="mt-12"
                    justify="center"
                >
                    <v-col
                        :cols="$vuetify.breakpoint.lgAndUp ? '3' : $vuetify.breakpoint.xs ? '11' : '5'"
                        v-for="(card, index) in examples"
                        :key="index"
                        class="mx-4 mb-6"
                    >
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                :max-width="$vuetify.breakpoint.mdAndUp ? '450' : '360'"
                                raised
                                height="100%"
                                class="mx-auto"
                                style="cursor: pointer"
                                @click="goToIframeMap(card.url)"
                            >
                                <v-img :src="card.img">
                                    <v-expand-transition>
                                        <div
                                            v-if="hover"
                                            class="d-flex blue darken-2 v-card--reveal display-3 white--text"
                                            style="height: 100%"
                                        >
                                            OPEN
                                        </div>
                                    </v-expand-transition>
                                </v-img>
                                <div style="text-align: start;">
                                    <v-card-title style="word-break: keep-all; line-height: 1.8rem;"> {{card.name}}</v-card-title>
                                    <v-card-subtitle> {{card.subtitle}}</v-card-subtitle>
                                    <v-card-text> {{ card.description }}</v-card-text>
                                </div>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!-- Feedback -->
        <v-fab-transition>
            <v-btn
                @click="SHOW_FEEDBACK_DIALOG(true)"
                fab
                dark
                large
                fixed
                bottom
                right
                color="primary"
                style="bottom: 34px; right: 34px"
            >
                <v-icon>feedback</v-icon>
            </v-btn>
        </v-fab-transition>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import Feedback from "../components/Feedback";

    export default {
        name: "Home",
        components: {Feedback},
        data() {
            return {
                features: [
                    {
                        title: 'Экономьте своё время и деньги',
                        subtitle: 'Лучшая производительность',
                        text: 'Конструктор позволяет быстро создать гибкий электронный атлас на нужную тему абсолютно бесплатно. Существует удобная возможность командной разработки.',
                        callout: '01',
                    },
                    {
                        title: 'Применяйте в различных областях',
                        subtitle: 'Большая гибкость',
                        text: 'Эл. атласы рекомендуется применять в областях, где требуется увеличить доступность, наглядность и эфективность восприятия информации, например, обучение, туризм и маркетинг.',
                        callout: '02',
                    },
                    {
                        title: 'Распостраняйте ресурс в интернете',
                        subtitle: 'Удобное использование',
                        text: 'Эл. атлас можно встраивать на любые веб-ресурсы, информационные стенды и т.д. Созданным эл. атласом можно поделиться с любым пользователем сервиса.',
                        callout: '03',
                    }
                ],
                selectedMapUrl: 'https://mapdesigner.do-edu.pro/1?iframe=true'
            }
        },
        computed: {
            ...mapState('maps',[
                'examples'
            ]),
            minHeight() {
                const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

                return `calc(${height} - ${this.$vuetify.application.top}px)`
            },
        },
        methods: {
            ...mapMutations('layout',["SHOW_FEEDBACK_DIALOG"]),
            goToFutures() {
                let slide = document.getElementById("futures");
                // Определение расстояния от начала страницы до нужного элемента
                let top = window.scrollY + slide.getBoundingClientRect().y;
                this.$vuetify.goTo(top);
            },
            goToIframeMap(selectedMapUrl) {
                // Устанавливаем новую ссылку для Iframe с картой
                this.selectedMapUrl = selectedMapUrl;

                // Перемещаемся к Iframe
                let slide = document.getElementById("examples");
                // Определение расстояния от начала страницы до нужного элемента
                let top = window.scrollY + slide.getBoundingClientRect().y;
                this.$vuetify.goTo(top);
            }
        }
    }
</script>


