@extends('layouts')
@section('title', "Карта - MapDesigner")

@section('data-input')
    window.inputMap = {!! $map !!}
@endsection

@section('content')
    <div id="app">
        <viewer>
            {{ csrf_field() }}
        </viewer>
    </div>
@endsection



