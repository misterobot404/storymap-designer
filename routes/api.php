<?php

use App\Http\Controllers\API\SubjectController;
use App\Http\Controllers\API\FeedbackController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\MapController;
use Illuminate\Support\Facades\Route;

/**
 * User
 */
// API Authentication
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');
// Check email / name available
Route::get('/users/{email}/check-available', [AuthController::class, 'emailAvailableCheck'])->where('email', '^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
Route::get('/users/{name}/check-available', [AuthController::class, 'nameAvailableCheck']);
// Get auth user
Route::get('/users/current', [AuthController::class, 'getCurrentUser']);

/**
 * Subjects
 */
Route::middleware('auth:api')->group(function () {
    // CRUD
    Route::get('/subjects', [SubjectController::class, 'index']);
    Route::post('/subjects/{id}', [SubjectController::class, 'update']);
    Route::post('/subjects', [SubjectController::class, 'store']);
    Route::delete('/subjects/{id}', [SubjectController::class, 'destroy']);
});

/**
 * Maps
 */
Route::middleware('auth:api')->group(function () {
    // CRUD
    Route::get('/maps', [MapController::class, 'index']);
    Route::post('/maps', [MapController::class, 'store']);
    Route::put('/maps/{id}', [MapController::class, 'update']);
    Route::delete('/maps/{id}', [MapController::class, 'destroy']);
    // Media
    Route::post('/maps/{map_id}/events/{event_id}/addMedia', [MapController::class, 'addMedia']);
    Route::put('/maps/{map_id}/events/{event_id}/deleteMedia', [MapController::class, 'deleteMedia']);
    // Other
    Route::put('/maps/{id}/setPrivacy', [MapController::class, 'setPrivacy']);
    Route::post('/maps/copy', [MapController::class, 'copy']);
    Route::post('/maps/setSubject', [MapController::class, 'setSubject']);
});

// Атлас могут просматривать без прав, если он публичный
Route::get('/maps/{id}', [MapController::class, 'show']);

/**
 * Other
 */
// Feedback
Route::post('/feedback', FeedbackController::class);
