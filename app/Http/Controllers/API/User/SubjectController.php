<?php

namespace App\Http\Controllers\API\User;

use App\Http\Controllers\Controller;
use App\Models\User;

// CRU
class SubjectController extends Controller
{
    public function index()
    {
        // Get all subjects for current user.
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

    public function destroy($index)
    {
        // Get all subjects for current user.
        $user = User::find(auth()->id());

        $new_subjects = $user->subjects;
        array_splice($new_subjects, $index, 1);
        $user->subjects = $new_subjects;
        $user->save();

        return response()->json([
            "status" => "success",
            "data" => ["subjects" => $user->subjects]
        ], 200);
    }
}
