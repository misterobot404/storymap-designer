<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GetDataMapController extends Controller
{
    public function getDataArray()
    {
        $config = DB::select('select map_config from maps where map_id=1');
        $events = DB::select('select map_events from maps where map_id=1');

        return array(
            'map_events'=> $events[0]->map_events,
            'map_config'=> $config[0]->map_config);
    }
}
