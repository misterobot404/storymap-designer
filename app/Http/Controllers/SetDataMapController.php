<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SetDataMapController extends Controller
{
    public function setData(Request $request)
    {
        DB::update('update maps set map_events = ? where map_id = 1', [$request->events]);
        DB::update('update maps set map_config = ? where map_id = 1', [$request->config]);
        return 'true';
    }

    public function uploadImg(Request $request)
    {
        //$upload_file_path =
        $request->file('image')->store('uploads','local');
        return back();
    }
}

