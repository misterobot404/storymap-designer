<?php

use App\Http\Controllers\API\User\SubjectController;
use App\Http\Controllers\API\FeedbackController;
use App\Http\Controllers\API\User\AuthController;
use App\Http\Controllers\API\MapController;
use Illuminate\Support\Facades\Route;

/**
 * API Authentication
 */
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');

/**
 * Проверка доступности почты / логина для регистрации
 */
Route::get('/users/{email}/check-available', [AuthController::class, 'emailAvailableCheck'])->where('email', '^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
Route::get('/users/{name}/check-available', [AuthController::class, 'nameAvailableCheck']);

/**
 * Получить данные авторизированного пользователя
 */
Route::get('/users/current', [AuthController::class, 'getCurrentUser']);

/**
 * Subjects. CRU
 */
Route::middleware('auth:api')->group(function () {
    Route::get('/users/subjects', [SubjectController::class, 'index']);
    Route::post('/users/subjects', [SubjectController::class, 'store']);
    Route::delete('/users/subjects/{index}', [SubjectController::class, 'destroy']);
});

/**
 * Maps. CRUD
 */
Route::middleware('auth:api')->group(function () {
    Route::get('/maps', [MapController::class, 'index']);
    Route::post('/maps', [MapController::class, 'store']);
    Route::get('/maps/{id}', [MapController::class, 'show']);
    Route::put('/maps/{id}', [MapController::class, 'update']);
    Route::delete('/maps/{id}', [MapController::class, 'destroy']);
    // Other
    Route::post('/maps/duplicate', [MapController::class, 'duplicate']);
});

/**
 * Обратная связь
 */
Route::post('/feedback', FeedbackController::class);
