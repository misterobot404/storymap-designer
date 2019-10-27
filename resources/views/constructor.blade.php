<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="{{asset('favicon.png')}}">
    <title>LiSa</title>
    <script>
        // Данные будут получены УЖЕ в массиве/обьекте, а не в JSON
        <!--fixme PhpStorm ругается на неизвестные переменные которые мы получили из laravel-->
        window.init_map_events = <?= $map_events; ?>;
        window.init_map_config = <?= $map_config; ?>;
    </script>
</head>
<body>

<div id="app">
    {{ csrf_field() }}
</div>

<!-- Scripts -->
<script type="text/javascript" src='{{ asset('js/app.js') }}'></script>
</body>
</html>
