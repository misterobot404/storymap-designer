@extends('layouts')
@section('title', "Библиотека - MapDesigner")

@section('data-input')
    window.maps = {!! ($maps) !!};
@endsection

@section('content')
    <manager/>
@endsection
