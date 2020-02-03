@extends('layouts')
@section('title', "Регистрация - MapDesigner")

@section('content')
<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Подтвердите адрес электронной почты</div>

                <div class="card-body">
                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            На ваш адрес электронной почты была отправлена новая ссылка для подтверждения.
                        </div>
                    @endif
                    Здраствуйте, {{ Auth::user()->login }}! <br>
                        В целях безопасности мы должны убедится что это действительно вы.
                        На почту <spin class="font-italic">{{ Auth::user()->email }}</spin> отправлено письмо для подтверждения.
                        Если вы не получили письмо, <a href="{{ route('verification.resend') }}">нажмите здесь для повторной отправки</a>.
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
