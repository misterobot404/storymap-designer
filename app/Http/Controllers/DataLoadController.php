<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DataLoadController extends Controller
{
    public function load()
    {
        $config = DB::select('select map_config from maps where map_id=10');
        $events = DB::select('select map_events from maps where map_id=10');

        return view('app',
            ['map_events'=> $events[0]->map_events],
            ['map_config'=> $config[0]->map_config]);
    }
}
