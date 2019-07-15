<?php

Route::get('/','DataLoadController@load');

Route::post('/upload','FileUploadController@upload');
