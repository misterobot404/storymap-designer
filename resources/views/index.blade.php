@extends('layouts')

@section('title', "MapDesigner: Конструктор электронных атласов")


@section('content')
    <div class="container-fluid">
        <div class="row main-top justify-content-center">
            <div class="mx-3 my-auto text-center">
                <h1 class="mb-2 display-5"><em>«Есть вещи, которые нельзя изобразить. Для всего остального есть {{ config('app.name') }}»</em></h1>
                <p class="mb-4 w-85 mx-auto lead">{{ config('app.name') }} - это бесплатный сервис, который поможет вам рассказывать истории в Интернете, освещающие
                    места, события или предметы. <br>
                    <span class="d-none d-md-block">Конструктор позволяет быстро создавать гибкие иформационно-развлекательные ресурсы для использования их в сфере обучения, туризма и маркетинга.</span>
                </p>
                <a class="pulse btn btn-primary btn-lg mb-2 mb-sm-0" href="">Попробовать</a>
            </div>
        </div>
        <div class="row main-bottom">
            <div class="container">
                <div class="mt-4">
                    <h3 class="text-center display-6 pt-sm-2 pb-1">Примеры</h3>
                    <div class="row justify-content-center text-center">
                        <div class="col-sm card m-2 card-casual px-0 pb-2" onclick="">
                            <img src="{{ asset('images/card/human.png') }}" class="card-img-top" alt="..." draggable="false">
                            <div class="card-body">
                                <h5 class="card-title">Организма человека</h5>
                                <p class="card-text">Внутреннее строение организма человека с моделями всех основных органов. За обьект был взят макет, никто из
                                    людей не постарадал. </p>
                            </div>
                        </div>
                        <div class="col-sm card m-2 card-casual px-0 pb-2" onclick="">
                            <img src="{{ asset('images/card/dv.jpg') }}" class="card-img-top" alt="..." draggable="false">
                            <div class="card-body">
                                <h5 class="card-title">Парки и заповедники Дальнего Востока</h5>
                                <p class="card-text">Карта путешественника. Описание коллекций оживотных и особенностей парков для животных.</p>
                            </div>
                        </div>
                        <div class="col-sm card m-2 card-casual px-0 pb-2" onclick="">
                            <img src="{{ asset('images/card/alch.jpg') }}" class="card-img-top" alt="..." draggable="false">
                            <div class="card-body">
                                <h5 class="card-title">Таблица Менделеева</h5>
                                <p class="card-text">Классическая таблица химических элементов, описывающая свойста элементов и демонстрирующая модели атомного
                                    ядра.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

<style>

    .main-top {
        color: rgb(255, 255, 255);
        background: #2b3137 url("{{ asset('images/simple-codelines.svg') }}") center 10%;
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
