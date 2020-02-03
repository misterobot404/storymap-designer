<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="{{asset('favicon.png')}}">
    <!-- app.css bundle -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
    <title>@yield('title')</title>
    <script>
        @yield('data-input')
    </script>
    <style>
        @font-face {
            font-family: 'Arciform';
            src: url("{{asset('fonts/Arciform.otf')}}");
        }

        .font-arciform {
            font-family: Arciform, -apple-system, sans-serif;
            letter-spacing: 0.05em;
        }
    </style>
</head>

<body>
<div id="app">
    <header class="header">
        <nav class="container navbar navbar-expand-md navbar-dark">
            {{-- Brand --}}
            <a class="navbar-brand font-size-32" href="{{ url('/') }}">
                <img src="{{asset('favicon.png')}}" class="d-inline-block navbar-logo" alt="Lisa">
                <div class="font-arciform d-inline-block">{{ config('app.name_short') }}</div>
            </a>

            @guest
            <!-- Сollapse toggler -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
                    <!-- Left Side Of Navbar (may be -> <ul class="navbar-nav mr-auto">) -->
                    <!-- Right Side Of Navbar (may be -> <ul class="navbar-nav ml-auto">) -->
                    <ul id="navbar-nav-guest" class="navbar-nav">
                        <li class="nav-item text-center my-1">
                            <a href="{{ route('login') }}" class="button-auth text-white text-decoration-none">Авторизироваться</a>
                        </li>
                        <li class="nav-item mx-auto text-center my-1">
                            <a href="{{ route('register') }}" class="button-reg text-white text-decoration-none">Зарегистрироваться</a>
                        </li>
                    </ul>
                </div>
            @endguest
            @auth
                <div class="dropdown ml-auto">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle text-white" href="#" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        <img src="{{asset('images/avatar-default.png')}}"
                             class="d-inline-block navbar-logo-avatar" alt="Lisa">
                        <span class="caret"></span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item"
                           style="cursor: pointer; user-select: none;">
                            <span class="font-weight-bolder">{{ Auth::user()->login }}</span> <br>
                            <span style="opacity: 0.7;">{{ Auth::user()->email }}</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item"
                           style="cursor: pointer;"
                           href="{{ route('maps.index') }}">
                            Библиотека <span v-show="$store.getters.mapCount" class="badge badge-secondary">@{{ $store.getters.mapCount }}</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item"
                           href="{{ route('logout') }}"
                           onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                            Выйти
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST"
                              style="display: none;">
                            @csrf
                        </form>
                    </div>
                </div>
            @endauth
        </nav>
    </header>
    <main>
        @yield('content')
    </main>
    <footer class="footer">
        © LiSa Inc. 2020
    </footer>
</div>
<!-- app.js bundle -->
<script type="text/javascript" src='{{ asset('js/app.js') }}'></script>
</body>
</html>

