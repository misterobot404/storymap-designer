<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\FeedbackController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\MapController;

/**
 * API Authentication
 */
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');

/**
 * Проверка доступности почты / логина для регистрации
 */
Route::get('/users/{email}/check-available', [UserController::class, 'emailAvailable'])->where('email', '^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
Route::get('/users/{name}/check-available',  [UserController::class, 'nameAvailable']);

/**
 * Получить / установить темы атласов авторизированного пользователя
 */
Route::get('/users/subjects', [UserController::class, 'getSubjects'])->middleware('auth:api');
Route::post('/users/subjects',  [UserController::class, 'setSubjects'])->middleware('auth:api');

/**
 * Получить данные авторизированного пользователя
 */
Route::get('/users/current',  [UserController::class, 'getCurrent']);

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
