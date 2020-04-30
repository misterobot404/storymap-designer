<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', 'API\AuthController@register');
Route::post('/login', 'API\AuthController@login');

Route::get('/users/{email}/check-available', 'API\UserController@emailAvailable')->where('email', '^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
Route::get('/users/{name}/check-available', 'API\UserController@nameAvailable');

Route::middleware('auth:api')->group(function () {

    Route::post('/logout', 'API\AuthController@logout');

    Route::get('/users/current', 'API\UserController@getCurrent');

    // CRUD
    Route::get('/maps', 'API\MapController@index');
    Route::post('/maps', 'API\MapController@store');
    Route::get('/maps/{id}', 'API\MapController@show');
    Route::put('/maps/{id}', 'API\MapController@update');
    Route::delete('/maps/{id}', 'API\MapController@destroy');
});
