<?php
use App\Map;

Route::get('/', function () {
    return view('index');
});


////    AJAX

// Get map count 0, if user non auth
Route::get('maps/count', function () {
    return ['mapCount' => Map::getMapCount()];
});

////


// CRUD for MapController added without create.
Route::resource('maps', 'MapController')->except('create')->middleware('auth');

// Email verification added.
Auth::routes(['verify' => true]);

/* DEV HELPER
 * artisan route:list
 */
