<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

    <title>MapDesigner: Конструктор электронных атласов</title>

    <link href="{{asset('favicon.ico')}}" rel="icon">

    <!-- media + onload its trick to triggering an asynchronous stylesheet download -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons&display=block" rel="stylesheet" media="trick" onload="media='all'">
</head>

<body>
<div id="app"></div>
<!-- JS bundle -->
<script type="text/javascript" src='{{ asset('js/main.js') }}'></script>
</body>

</html>
