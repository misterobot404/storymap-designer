<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="{{asset('favicon.png')}}">
    <title>MapHelper</title>
    <style>
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
        }
        .defaultScene {
            justify-content: center;
            display: flex;
            list-style: none;
            cursor: pointer;
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
</head>
<body>
{{--TODO добавить базу данных PostgreSQL--}}
{{--TODO карты и события должны быть получены из базы--}}
{{--TODO все изменения в карте должны сохраняться в базе--}}
<div id="app">
    <ul class="mainMenu">
        <li class="sceneActive defaultScene">
            master
        </li>
    </ul>
    <constructor></constructor>
</div>

<!-- Scripts -->
<script type="text/javascript" src='{{ asset('/js/app.js') }}'></script>

</body>
</html>
