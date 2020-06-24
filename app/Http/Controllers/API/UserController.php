<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Map;
use App\User;
use Illuminate\Http\JsonResponse;
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

    // Subjects
    public function getSubjects()
    {
        $user = User::find(auth()->id());

        return response()->json([
            "status" => "success",
            "data" => ["subjects" => $user->subjects]
        ], 200);
    }
    public function setSubjects()
    {
        $user = User::find(auth()->id());
        $user->subjects = request('subjects');
        $user->save();

        return response()->json([
            "status" => "success",
            "data" => ["subjects" => $user->subjects]
        ], 200);
    }
}
