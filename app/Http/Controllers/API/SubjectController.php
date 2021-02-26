<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Subject;
use Illuminate\Support\Facades\File;

class SubjectController extends Controller
{
    public function index()
    {
        // Get all subjects for current user.
        return response()->json([
            "status" => "success",
            "data" => ["subjects" => Subject::where('user_id', auth()->id())->get()]
        ], 200);
    }

    public function store()
    {
        $subject = new Subject;
        $subject->user_id = auth()->id();
        $subject->name = request('name');

        if (request()->hasFile('icon')) {
            $path = request()->file('icon')->store('subjects', 'public');
            $subject->icon = '/storage/' . $path;
        }

        $subject->save();

        return response()->json([
            "status" => "success",
            "data" => ["subjects" => Subject::where('user_id', auth()->id())->get()]
        ], 200);
    }

    public function update($id)
    {
        $subject = Subject::find($id);

        if (request('name')) $subject->name = request('name');
        if (request()->hasFile('icon')) {
            // Remove old icon
            if (File::exists(public_path($subject->icon))) {
                $icon_basename = basename($subject->icon);
                if ($icon_basename != 'biology.png' || $icon_basename != 'computer_science.png' || $icon_basename != 'custom.png' || $icon_basename != 'geography.png' || $icon_basename != 'history.png')
                    File::delete(public_path($subject->icon));
            }
            // Save new icon
            $path = request()->file('icon')->store('subjects', 'public');
            $subject->icon = '/storage/' . $path;
        }
        $subject->save();

        return response()->json([
            "status" => "success",
            "data" => ["subjects" => Subject::where('user_id', auth()->id())->get()]
        ], 200);
    }

    public function destroy($id)
    {
        // Get all subjects for current user.
        Subject::destroy($id);

        return response()->json([
            "status" => "success",
            "data" => ["subjects" => Subject::where('user_id', auth()->id())->get()]
        ], 200);
    }
}
