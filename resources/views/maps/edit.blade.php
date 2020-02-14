@extends('layouts')

@section('data-input')
        window.inputMaps = {!! $maps !!};
@endsection

@section('content')
        <constructor>
            {{ csrf_field() }}
        </constructor>
@endsection
