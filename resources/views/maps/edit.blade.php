@extends('layouts')

@section('data-input')
        window.inputMaps = {!! $maps !!};
@endsection

@section('content')
    <div id="app">
        <constructor>
            {{ csrf_field() }}
        </constructor>
    </div>
@endsection
