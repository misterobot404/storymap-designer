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
        }
    </style>
</head>
<body>

<div id="app">
    <constructor :input-events="{{$map_events}}" :input-config="{{$map_config}}">
        {{ csrf_field() }}
    </constructor>
</div>
<!-- Scripts -->
<script type="text/javascript" src='{{ asset('/js/app.js') }}'></script>
</body>
</html>
