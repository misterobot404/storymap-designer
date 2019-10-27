<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\GetDataMapController;

class ConstructorPage extends Controller
{
    public function getPage()
    {
        $data = (new GetDataMapController)->getDataArray();
        return view('constructor', $data);
    }
}
