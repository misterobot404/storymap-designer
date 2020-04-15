<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getCurrent()
    {
        return response()->json(["status" => "success", "data" => ["user" => auth()->user()]], 200);
    }

    public function nameAvailable($name)
    {
        $user = User::where('name', $name)->first();

        if (!$user)
            return response()->json(["status" => "success", "data" => null], 200);
        else return response()->json(["status" => "fail", "data" => ["name" => "Name not available"]], 422);
    }

    public function emailAvailable($email)
    {
        $user = User::where('email', $email)->first();

        if (!$user)
            return response()->json(["status" => "success", "data" => null], 200);
        else return response()->json(["status" => "fail", "data" => ["email" => "Email not available"]], 422);
    }


}
