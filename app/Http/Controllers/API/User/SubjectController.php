<?php

namespace App\Http\Controllers\API\User;

use App\Http\Controllers\Controller;
use App\Models\User;

// CRU
class SubjectController extends Controller
{
    public function index()
    {
        // Get all maps of the current user.
        $user = User::find(auth()->id());

        return response()->json([
            "status" => "success",
            "data" => ["subjects" => $user->subjects]
        ], 200);
    }

    public function store()
    {
        $user = User::find(auth()->id());
        $user->subjects = request('subjects');
        $user->save();

        return response()->json([
            "status" => "success",
            "data" => ["subjects" => $user->subjects]
        ], 200);
    }

    public function destroy($id)
    {
        $subjects = Subject::where('user_id', auth()->id())->get();
        return response()->json([
            "status" => "success",
            "data" => ["subjects" => $subjects]
        ], 200);
    }
}
