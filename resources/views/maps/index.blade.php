@extends('layouts')
@section('title', "Библиотека - MapDesigner")

@section('data-input')
    window.maps = {!! ($maps) !!};
@endsection

@section('content')
    <div id="app">
        <manager>
        </manager>
    </div>
@endsection
