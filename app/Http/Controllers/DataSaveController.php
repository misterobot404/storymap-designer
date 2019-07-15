<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DataSaveController extends Controller
{
    public function save(Request $request)
    {
        DB::update('update maps set map_events = ? where map_id = 10', [json_encode($request->events)]);
        DB::update('update maps set map_config = ? where map_id = 10', [json_encode($request->config)]);
        return 'true';
    }
}
