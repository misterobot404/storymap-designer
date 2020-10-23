<?php

use Illuminate\Support\Facades\Route;

/**
 * Воронка для всех web запросов
 */
Route::get('{path}', function () {
    return view('index');
})->where('path', '(.*)');
