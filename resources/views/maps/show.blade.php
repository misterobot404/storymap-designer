@extends('layouts')
@section('title', "Карта - MapDesigner")

@section('data-input')
    window.inputMap = {!! $map !!}
@endsection

@section('content')
        <viewer>
            {{ csrf_field() }}
        </viewer>
@endsection



