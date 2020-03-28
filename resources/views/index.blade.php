<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>MapDesigner: Конструктор электронных атласов</title>
    <link rel="icon" href="{{asset('favicon.png')}}">

    <!-- CSS bundle -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons">
</head>

<body>
<div id="app"></div>

<!-- JS bundle -->
<script type="text/javascript" src='{{ asset('js/main.js') }}'></script>

</body>
</html>
