<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileUploadController extends Controller
{
    public function upload(Request $request)
    {
        //$upload_file_path =
        $request->file('image')->store('uploads','local');
        return back();
    }
}
